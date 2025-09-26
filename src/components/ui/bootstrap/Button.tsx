import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const buttonVariants = {
  variant: {
    default: 'btn-primary',
    destructive: 'btn-danger',
    outline: 'btn-outline-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-light',
    link: 'btn-link',
  },
  size: {
    default: '',
    sm: 'btn-sm',
    lg: 'btn-lg',
    icon: 'p-2',
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variantClass = buttonVariants.variant[variant];
    const sizeClass = buttonVariants.size[size];

    return (
      <BootstrapButton
        ref={ref}
        className={cn(
          variantClass,
          sizeClass,
          size === 'icon' && 'd-flex align-items-center justify-content-center',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';