import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Segmented({ options, value, onChange, className }) {
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const [internalValue, setInternalValue] = useState(
    value ?? options[0]?.value,
  );

  const activeValue = value ?? internalValue;

  const handleChange = (val) => {
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
  };

  useEffect(() => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const buttons = Array.from(container.querySelectorAll("button"));
    const activeIndex = options.findIndex((opt) => opt.value === activeValue);

    const activeButton = buttons[activeIndex];
    if (!activeButton) return;

    indicator.style.width = `${activeButton.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeButton.offsetLeft}px)`;
  }, [activeValue, options]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center rounded-xl bg-muted p-1",
        "dark:bg-muted",
        className,
      )}
    >
      {/* Sliding Indicator */}
      <span
        ref={indicatorRef}
        className="absolute left-0 top-1 bottom-1 rounded-lg bg-white shadow-sm transition-all duration-300 ease-out"
      />

      {options.map((opt) => {
        const active = opt.value === activeValue;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleChange(opt.value)}
            className={cn(
              "relative z-10 px-4 py-1.5 text-sm font-medium transition-colors",
              active
                ? " text-black"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
