import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gold-400 text-gold-900 hover:bg-gold-400/90 active:scale-[0.98]",
        outline:
          "hairline border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] dark:border-gold-400/25 dark:bg-gold-900/30 dark:text-gold-50 dark:hover:bg-gold-900/50",
        ghost:
          "text-inherit hover:bg-black/5 dark:hover:bg-white/10",
        destructive:
          "bg-danger-50 text-danger-700 hover:bg-danger-50/80 hairline border-transparent",
        soft:
          "bg-gold-50 text-gold-700 hover:bg-gold-100 active:scale-[0.98] hairline border-gold-400/20 dark:bg-gold-50 dark:text-gold-900 dark:hover:bg-gold-50/90",
        link: "text-gold-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
