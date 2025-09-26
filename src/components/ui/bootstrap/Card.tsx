import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <BootstrapCard
        ref={ref}
        className={cn(
          'border-0',
          variant === 'outline' && 'border border-1',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BootstrapCard.Header
    ref={ref}
    className={cn('bg-transparent border-0 p-3', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <BootstrapCard.Title
    ref={ref}
    className={cn('mb-0 fw-semibold', className)}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <BootstrapCard.Text
    ref={ref}
    className={cn('text-muted mb-0', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BootstrapCard.Body
    ref={ref}
    className={cn('p-3', className)}
    {...props}
  />
));

CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BootstrapCard.Footer
    ref={ref}
    className={cn('bg-transparent border-0 p-3', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';