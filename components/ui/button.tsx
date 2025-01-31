import { cva, type VariantProps } from 'class-variance-authority';
import { type HTMLMotionProps,motion } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-[#E40138] to-rose-500 text-white hover:opacity-90',
        outline: 'border-2 border-[#E40138] text-white hover:bg-[#E40138]/10',
        secondary: 'bg-white text-[#E40138] hover:bg-gray-100',
        ghost: 'hover:bg-[#E40138]/10 text-white',
        link: 'text-white underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps extends 
Omit<HTMLMotionProps<"button">, keyof VariantProps<typeof buttonVariants>>,
VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant, size, ...props }, ref) => {
    return (
    <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
    />
    );
}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
