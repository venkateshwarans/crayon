import React from "react";
import { ResponsiveContainer } from "recharts";
import { useLayoutContext } from "../../../context/LayoutContext";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette } from "../utils/PalletUtils";

export interface ScorecardProps {
  /**
   * The primary value to display in the scorecard
   */
  value: number | string;
  
  /**
   * Optional title/label for the value
   */
  title?: string;
  
  /**
   * Optional comparison value to show trend/progress
   */
  comparisonValue?: number;
  
  /**
   * Optional comparison label
   */
  comparisonLabel?: string;
  
  /**
   * Format for displaying the value
   */
  valueFormat?: "number" | "currency" | "percentage" | "compact" | ((value: number | string) => string);
  
  /**
   * Format for displaying the comparison value
   */
  comparisonFormat?: "number" | "currency" | "percentage" | "compact" | ((value: number) => string);
  
  /**
   * Whether to show the comparison as progress towards a target
   * If true, displays as progress percentage
   * If false, displays as percentage change
   */
  showAsProgress?: boolean;
  
  /**
   * Whether to show a sparkline below the main value
   */
  showSparkline?: boolean;
  
  /**
   * Data for the sparkline if enabled
   */
  sparklineData?: Array<{ value: number }>;
  
  /**
   * Color theme for the scorecard
   */
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid" | "iq";
  
  /**
   * Color for positive changes/values
   */
  positiveColor?: string;
  
  /**
   * Color for negative changes/values
   */
  negativeColor?: string;
  
  /**
   * Color for the primary value
   */
  valueColor?: string;
  
  /**
   * Size variant of the scorecard
   */
  size?: "compact" | "small" | "medium" | "large" | "hero";
  
  /**
   * Whether to hide the comparison indicator
   */
  hideComparison?: boolean;
  
  /**
   * Custom styles for the container
   */
  style?: React.CSSProperties;
  
  /**
   * Custom className for the container
   */
  className?: string;
}

/**
 * Formats a number based on the specified format
 */
const formatValue = (
  value: number | string,
  format: ScorecardProps["valueFormat"] | ScorecardProps["comparisonFormat"]
): string => {
  if (typeof format === "function") {
    // Use type assertion to handle the function call properly
    return (format as (val: typeof value) => string)(value);
  }
  
  // Convert to number if it's a string that can be parsed as a number
  const numValue = typeof value === "string" ? parseFloat(value) : value;
  
  // If it's not a valid number, return the original value as string
  if (typeof numValue === 'number' && isNaN(numValue)) {
    return String(value);
  }
  
  // Ensure numValue is a number for formatting
  const valueToFormat = typeof numValue === 'number' ? numValue : 0;
  
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valueToFormat);
    case "percentage":
      return new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(valueToFormat / 100);
    case "compact":
      return new Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short" }).format(valueToFormat);
    case "number":
    default:
      return new Intl.NumberFormat("en-US").format(valueToFormat);
  }
};

/**
 * Calculates the percentage change or progress
 */
const calculatePercentage = (current: number | string, comparison: number, isProgress: boolean): number => {
  // Ensure current is a number
  const currentNum = typeof current === 'string' ? parseFloat(current) : current;
  if (isProgress) {
    // Calculate progress percentage (current / target)
    return (currentNum / comparison) * 100;
  } else {
    // Calculate percentage change
    if (comparison === 0) return currentNum > 0 ? 100 : currentNum < 0 ? -100 : 0;
    return ((currentNum - comparison) / Math.abs(comparison)) * 100;
  }
};

/**
 * Scorecard Component
 * 
 * Displays a single KPI value with optional comparison indicator and sparkline.
 * Similar to the scorecards in Looker Studio, this component can show metrics
 * with comparison values and trends.
 */
export const Scorecard: React.FC<ScorecardProps> = ({
  value,
  title,
  comparisonValue,
  comparisonLabel,
  valueFormat = "number",
  comparisonFormat = "percentage",
  showAsProgress = false,
  showSparkline = false,
  sparklineData = [],
  theme = "ocean",
  positiveColor,
  negativeColor,
  valueColor,
  size = "medium",
  hideComparison = false,
  style,
  className,
}) => {
  const { layout } = useLayoutContext();
  const palette = getPalette(theme);
  
  // Check for dark mode - we'll use a different approach since layout doesn't have a 'dark' type
  // We can detect dark mode through CSS variables or system preferences
  const isDarkMode = typeof window !== 'undefined' && 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default colors based on theme - using more vibrant colors for better contrast
  // Adjust colors based on light/dark mode
  const defaultPositiveColor = isDarkMode ? '#4CAF50' : '#2E7D32'; // Brighter in dark mode
  const defaultNegativeColor = isDarkMode ? '#F44336' : '#D32F2F'; // Brighter in dark mode
  const defaultValueColor = isDarkMode 
    ? (theme === 'vivid' ? palette.colors[0] : '#90CAF9') // Light blue in dark mode
    : (theme === 'vivid' ? palette.colors[0] : '#1A237E'); // Dark blue in light mode
  
  // Use provided colors or defaults
  const actualPositiveColor = positiveColor || defaultPositiveColor;
  const actualNegativeColor = negativeColor || defaultNegativeColor;
  const actualValueColor = valueColor || defaultValueColor;
  
  // Format the main value
  const formattedValue = formatValue(value, valueFormat);
  
  // Calculate and format comparison if available
  let percentageChange: number | null = null;
  let formattedComparison: string | null = null;
  let comparisonDirection: "positive" | "negative" | "neutral" = "neutral";
  
  if (comparisonValue !== undefined && !hideComparison) {
    percentageChange = calculatePercentage(
      value, 
      comparisonValue, 
      showAsProgress
    );
    
    // Determine direction for styling
    if (showAsProgress) {
      // For progress bars, closer to 100% is positive
      comparisonDirection = percentageChange < 50 ? "negative" : "positive";
    } else {
      // For change indicators, positive change is positive
      comparisonDirection = percentageChange > 0 ? "positive" : percentageChange < 0 ? "negative" : "neutral";
    }
    
    // Format the comparison value
    formattedComparison = formatValue(
      Math.abs(percentageChange), 
      comparisonFormat
    );
    
    // Add sign for percentage change (not for progress)
    if (!showAsProgress && comparisonFormat === "percentage") {
      formattedComparison = `${percentageChange > 0 ? '+' : ''}${formattedComparison}`;
    }
  }
  
  // Determine font sizes based on size prop
  const titleSize = size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-base";
  const valueSize = size === "small" ? "text-xl" : size === "medium" ? "text-3xl" : "text-5xl";
  const comparisonSize = size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-base";
  
  // Create chart config for the container
  const chartConfig: ChartConfig = {
    scorecard: {
      label: title || "Value",
      color: actualValueColor,
    },
  };
  
  // Create sparkline if enabled
  const renderSparkline = () => {
    if (!showSparkline || !sparklineData.length) return null;
    
    // Simple sparkline implementation
    const maxValue = Math.max(...sparklineData.map(d => d.value));
    const minValue = Math.min(...sparklineData.map(d => d.value));
    const range = maxValue - minValue;
    const height = sparklineHeight;
    
    // Ensure we don't divide by zero
    if (range === 0 || !sparklineData.length) {
      // If all values are the same, draw a straight line in the middle
      return (
        <div className="mt-4 w-full">
          <svg height={height} width="100%" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
            <line 
              x1="0" 
              y1={height/2} 
              x2="100" 
              y2={height/2} 
              stroke={actualValueColor} 
              strokeWidth={Math.max(1, dotSize/2)} 
            />
          </svg>
        </div>
      );
    }
    
    // Calculate points for the sparkline
    const points = sparklineData.map((d, i) => {
      const x = (i / (sparklineData.length - 1)) * 100;
      const y = height - ((d.value - minValue) / range) * height;
      return `${x},${y}`;
    }).join(" ");
    
    // Determine if the trend is positive or negative
    const firstDataValue = sparklineData?.[0]?.value ?? 0; // Safe to access now that we've checked length
    const lastDataValue = sparklineData?.[sparklineData.length - 1]?.value ?? 0;
    const trendColor = lastDataValue >= firstDataValue ? actualPositiveColor : actualNegativeColor;
    
    return (
      <div className="mt-4 w-full">
        <svg 
          height={height} 
          width="100%" 
          viewBox={`0 0 100 ${height}`} 
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          {/* Add a subtle gradient fill under the line */}
          <defs>
            <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={trendColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={trendColor} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Area fill under the line */}
          <path
            d={`M0,${height} L0,${height - ((firstDataValue - minValue) / range) * height} ${points} L100,${height} Z`}
            fill="url(#sparklineGradient)"
          />
          
          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke={trendColor}
            strokeWidth={Math.max(1, dotSize/2)}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isDarkMode ? 'filter drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))' : ''}
          />
          
          {/* Add a dot at the end */}
          <circle
            cx="100"
            cy={height - ((lastDataValue - minValue) / range) * height}
            r={dotSize}
            fill={trendColor}
            stroke={isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'white'}
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  };
  
  // Render progress bar if showing as progress
  const renderProgressBar = () => {
    if (!showAsProgress || percentageChange === null) return null;
    
    return (
      <div className={`w-full mt-3 bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden shadow-inner`} style={{ height: `${progressBarHeight}px` }}>
        <div 
          className={`rounded-full transition-all duration-500 ease-in-out`} 
          style={{
            height: `${progressBarHeight}px`,
            width: `${Math.min(100, Math.max(0, percentageChange))}%`,
            backgroundColor: comparisonDirection === "positive" ? actualPositiveColor : actualNegativeColor,
            boxShadow: isDarkMode ? '0 0 8px rgba(255, 255, 255, 0.3)' : '0 0 8px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>
    );
  };
  
  // Determine sizes for all elements based on size prop
  // Font sizes
  const responsiveTitleSize = 
    size === "compact" ? "text-xs" : 
    size === "small" ? "text-xs" : 
    size === "medium" ? "text-sm" : 
    size === "large" ? "text-base" :
    "text-lg"; // hero
    
  const responsiveValueSize = 
    size === "compact" ? "text-lg" : 
    size === "small" ? "text-xl" : 
    size === "medium" ? "text-3xl" : 
    size === "large" ? "text-5xl" :
    "text-7xl"; // hero
    
  const responsiveComparisonSize = 
    size === "compact" ? "text-xs" : 
    size === "small" ? "text-xs" : 
    size === "medium" ? "text-sm" : 
    size === "large" ? "text-base" :
    "text-lg"; // hero
    
  // Icon and element sizes
  const iconSize = 
    size === "compact" ? 12 : 
    size === "small" ? 14 : 
    size === "medium" ? 16 : 
    size === "large" ? 20 :
    24; // hero
    
  const progressBarHeight = 
    size === "compact" ? 2 : 
    size === "small" ? 2.5 : 
    size === "medium" ? 3 : 
    size === "large" ? 4 :
    5; // hero
    
  const sparklineHeight = 
    size === "compact" ? 15 : 
    size === "small" ? 20 : 
    size === "medium" ? 30 : 
    size === "large" ? 40 :
    50; // hero
    
  const dotSize = 
    size === "compact" ? 2 : 
    size === "small" ? 3 : 
    size === "medium" ? 3 : 
    size === "large" ? 4 :
    5; // hero

  // Use a key based on props to force re-render when props change
  const componentKey = `scorecard-${value}-${title}-${comparisonValue}-${theme}-${size}`;
  
  return (
    <ChartContainer key={componentKey} config={chartConfig} className={`inline-block ${className}`} style={style}>
      <div className="p-3 sm:p-4 flex flex-col justify-center overflow-hidden">
        {title && <div className={`${responsiveTitleSize} text-gray-600 dark:text-gray-300 mb-2 font-medium`}>{title}</div>}
        
        <div 
          className={`${responsiveValueSize} font-bold tracking-tight truncate`} 
          style={{ 
            color: actualValueColor, 
            fontWeight: 800,
            textShadow: isDarkMode ? '0px 0px 8px rgba(255, 255, 255, 0.3)' : 'none', // Add subtle text shadow in dark mode
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
          title={formattedValue} // Add tooltip on hover for overflow text
        >
          {formattedValue}
        </div>
        
        {!hideComparison && formattedComparison && (
          <div className="flex items-center mt-2 md:mt-3">
            <span 
              className={`${responsiveComparisonSize} font-semibold flex items-center truncate`}
              style={{ 
                color: comparisonDirection === "positive" 
                  ? actualPositiveColor 
                  : comparisonDirection === "negative" 
                    ? actualNegativeColor 
                    : "inherit",
                fontWeight: 600,
                textShadow: isDarkMode ? '0px 0px 4px rgba(255, 255, 255, 0.2)' : 'none', // Subtle text shadow in dark mode
                maxWidth: '100%'
              }}
            >
              {!showAsProgress && (
                <span className="mr-1 inline-flex items-center">
                  {comparisonDirection === "positive" ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><path d="m18 15-6-6-6 6"/></svg> : 
                    comparisonDirection === "negative" ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><path d="m6 9 6 6 6-6"/></svg> : 
                    ""}
                </span>
              )}
              {formattedComparison}
              {comparisonLabel && <span className="ml-1 text-gray-500 dark:text-gray-400">{comparisonLabel}</span>}
            </span>
          </div>
        )}
        
        {renderProgressBar()}
        {renderSparkline()}
      </div>
    </ChartContainer>
  );
};
