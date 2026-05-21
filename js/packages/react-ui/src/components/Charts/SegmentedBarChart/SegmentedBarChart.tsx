import clsx from "clsx";
import { useMemo } from "react";
import { useTheme } from "../../ThemeProvider";
import { SegmentedBarData } from ".";
import {
  getColorStrategy,
  getDistributedColors,
  getIqPalette,
  getPalette,
  PaletteName,
} from "../utils/PalletUtils";

export interface SegmentedBarProps {
  data: SegmentedBarData;
  theme?: PaletteName;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
}

export const SegmentedBar = ({
  data,
  theme = "ocean",
  className,
  style,
  animated = true,
}: SegmentedBarProps) => {
  const { mode } = useTheme();

  // Calculate percentages
  const segments = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const total = data.reduce((acc: number, value: number) => acc + value, 0);

    return data.map((value: number, index: number) => ({
      value,
      index,
      percentage: total > 0 ? (value / total) * 100 : 0,
    }));
  }, [data]);

  // Get theme colors for each segment
  const paletteColors = theme === "iq" ? getIqPalette(mode === "dark" ? "dark" : "light") : getPalette(theme).colors;
  const colors = useMemo(() => {
    return getDistributedColors(
      paletteColors,
      Math.max(segments.length, 1),
      getColorStrategy(theme),
    );
  }, [paletteColors, segments.length, theme]);

  // Segmented progress bar
  return (
    <div className={clsx("crayon-segmented-bar-chart", className)} style={style}>
      {segments.map((segment: any, index: number) => {
        return (
          <div
            key={`segment-${index}`}
            className={clsx("crayon-segmented-bar-chart-segment", {
              "crayon-segmented-bar-chart-animated": animated,
            })}
            style={{
              width: `${segment.percentage}%`,
              backgroundColor: colors[index % colors.length],
            }}
            title={`${segment.value}`}
          />
        );
      })}
    </div>
  );
};