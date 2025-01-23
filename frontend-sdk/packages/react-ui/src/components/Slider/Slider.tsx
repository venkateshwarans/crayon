import * as SliderPrimitive from '@radix-ui/react-slider'
import { forwardRef, useEffect, useMemo, useState } from 'react'

export interface SliderProps {
  /**
   * The variant of the slider
   */
  variant: 'continuous' | 'discrete' | 'range'
  /**
   * The minimum value of the slider
   */
  min: number
  /**
   * The maximum value of the slider
   */
  max: number
  /**
   * The step value for discrete slider
   */
  step?: number
  /**
   * Whether the slider is disabled
   */
  disabled?: boolean
  /**
   * Callback when value changes
   */
  onValueChange: (value: number | number[]) => void
  /**
   * The value of the slider
   */
  value: number | number[]
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ variant, min, max, step, disabled, onValueChange, value }, ref) => {
    const [internalValue, setInternalValue] = useState(
        variant === 'range' ? [min, max] : value,
      )

      useEffect(() => {
        setInternalValue(variant === 'range' ? [min, max] : value ?? min)
      }, [variant, min, max, value])

      const handleValueChange = (newValue: number[]) => {
        const value = variant === 'range' ? newValue : newValue[0]
        if (value === undefined) return
        setInternalValue(value)
        if (onValueChange) onValueChange(value)
      }

      const sliderProps = useMemo(() => {
        const baseProps = { min, max }
        switch (variant) {
          case 'continuous':
            return { ...baseProps, value: [internalValue] }
          case 'discrete':
            if (step === undefined) {
              throw new Error('Step is required for discrete slider')
            }
            return { ...baseProps, step, value: [internalValue] }
          case 'range':
            return { ...baseProps, value: internalValue }
        }
      }, [variant, min, max, step, internalValue])

      const thumbs = useMemo(() => {
        const thumbClass =
          'shadow-small block size-4 rounded-sm outline-inner outline-default bg-container overflow-hidden outline-none group/thumb'

        const valueIndicatorClass =
          'absolute -top-[30px] left-1/2 -translate-x-1/2 bg-brand-el text-brand px-2xs py-3xs rounded-sm shadow-medium typography-label opacity-0 group-hover/thumb:opacity-100 group-focus/thumb:opacity-100 transition-opacity duration-200'

        return variant === 'range' ? (
          <>
            <SliderPrimitive.Thumb className="outline-none">
              <div className={thumbClass}>
                <div className="group-hover/thumb:bg-container-hover flex size-full items-center justify-center bg-container">
                  <div className="size-1 rounded-full bg-brand-el" />
                </div>
                {!disabled && (
                  <div className={valueIndicatorClass}>
                    {Array.isArray(internalValue)
                      ? internalValue[0]
                      : internalValue}
                  </div>
                )}
              </div>
            </SliderPrimitive.Thumb>
            <SliderPrimitive.Thumb className="outline-none">
              <div className={thumbClass}>
                <div className="group-hover/thumb:bg-container-hover flex size-full items-center justify-center bg-container">
                  <div className="size-1 rounded-full bg-brand-el" />
                </div>
                {!disabled && (
                  <div className={valueIndicatorClass}>
                    {Array.isArray(internalValue)
                      ? internalValue[1]
                      : internalValue}
                  </div>
                )}
              </div>
            </SliderPrimitive.Thumb>
          </>
        ) : (
          <SliderPrimitive.Thumb className="outline-none">
            <div className={thumbClass}>
              <div className="group-hover/thumb:bg-container-hover flex size-full items-center justify-center bg-container">
                <div className="size-1 rounded-full bg-brand-el" />
              </div>
              {!disabled && (
                <div className={valueIndicatorClass}>{internalValue}</div>
              )}
            </div>
          </SliderPrimitive.Thumb>
        )
      }, [variant, internalValue, disabled])

      const renderDots = () => {
        if (variant === 'discrete' && step) {
          const numSteps = Math.floor((max - min) / step) - 1
          return Array.from({ length: numSteps }, (_, index) => {
            const value = min + step * (index + 1)
            const position = ((value - min) / (max - min)) * 100
            return (
              <div
                key={value}
                className="absolute top-[1px] size-1 rounded-full bg-container"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              />
            )
          })
        }
        return null
      }

      return (
        <SliderPrimitive.Root
          ref={ref}
          className="relative flex h-5 w-full min-w-[100px] max-w-full touch-none select-none items-center"
          {...sliderProps}
          onValueChange={handleValueChange}
          minStepsBetweenThumbs={1}
          disabled={disabled}
          key={variant}
          value={Array.isArray(internalValue) ? internalValue : [internalValue]}
        >
          <SliderPrimitive.Track className="relative h-[6px] grow rounded-full bg-sunk">
            <SliderPrimitive.Range className="absolute h-full rounded-full bg-brand-el" />
            {variant === 'discrete' && renderDots()}
          </SliderPrimitive.Track>
          {thumbs}
        </SliderPrimitive.Root>
      )
  },
)

Slider.displayName = 'Slider'

export default Slider
