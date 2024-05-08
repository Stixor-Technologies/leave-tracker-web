import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";

const generalClasses = "h-10 px-4 py-2 w-full";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primaryDark hover:transition-background duration-300 font-medium text-sm",
        secondary:
          "bg-lightGray border border-stroke text-textColor hover:bg-gray hover:transition-background duration-300 font-medium text-sm",

        transparent: "",
      },
      size: {
        large: `${generalClasses} sm:w-[22.188rem]`,
        medium: `${generalClasses} sm:w-[12.875rem]`,
        small: `${generalClasses} sm:w-[10.75rem]`,
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          loading && "relative",
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center justify-center">
          {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          <span>{props.children}</span>
        </div>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
