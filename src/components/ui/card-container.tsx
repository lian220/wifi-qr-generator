import * as React from "react";

export interface CardContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

const CardContainer = React.forwardRef<HTMLDivElement, CardContainerProps>(
  ({ children, backgroundColor = "#ffffff", ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: '192px',
          height: '256px',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          position: 'relative',
          backgroundColor
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContainer.displayName = "CardContainer";

export { CardContainer };
