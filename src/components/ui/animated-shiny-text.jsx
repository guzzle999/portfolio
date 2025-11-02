import { cn } from "@/lib/utils"

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 300,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "relative inline-block font-medium",
        "bg-[linear-gradient(120deg,#777_0%_0%,#fffefe_45%,#777_55%)] bg-[length:var(--shiny-width)_100%]",
        "bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
