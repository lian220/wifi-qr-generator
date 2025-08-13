import { cn } from "@/lib/utils";
import * as React from "react";

export interface CardContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

const CardContainer = React.forwardRef<HTMLDivElement, CardContainerProps>(
  ({ children, backgroundColor = "#ffffff", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-[192px] h-[256px] rounded-lg shadow-lg flex flex-col items-center justify-between p-4 relative",
          className
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContainer.displayName = "CardContainer";

export { CardContainer };
