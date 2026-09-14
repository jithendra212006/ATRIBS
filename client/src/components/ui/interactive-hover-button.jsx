import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white py-2 pl-7 pr-5 text-[13px] font-semibold text-black",
          className,
        )}
        {...props}
      >
        <span className="pointer-events-none absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#F04326] transition-all duration-300 ease-out group-hover:h-[300px] group-hover:w-[300px] group-hover:-translate-x-1/2" />

        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>

        <div className="absolute inset-0 z-10 flex h-full w-full -translate-x-8 items-center justify-center gap-1.5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
