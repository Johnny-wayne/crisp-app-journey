import { cn } from "@/lib/utils";

interface LoadingSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "text" | "circle" | "button";
  lines?: number;
}

export function LoadingSkeleton({ 
  className, 
  variant = "text", 
  lines = 1,
  ...props 
}: LoadingSkeletonProps) {
  if (variant === "card") {
    return (
      <div className={cn("animate-pulse", className)} {...props}>
        <div className="bg-muted rounded-lg p-6 space-y-4">
          <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-muted-foreground/20 rounded"></div>
            <div className="h-3 bg-muted-foreground/20 rounded w-5/6"></div>
          </div>
          <div className="h-8 bg-muted-foreground/20 rounded w-24"></div>
        </div>
      </div>
    );
  }

  if (variant === "circle") {
    return (
      <div className={cn("animate-pulse", className)} {...props}>
        <div className="h-12 w-12 bg-muted-foreground/20 rounded-full"></div>
      </div>
    );
  }

  if (variant === "button") {
    return (
      <div className={cn("animate-pulse", className)} {...props}>
        <div className="h-10 bg-muted-foreground/20 rounded-md w-24"></div>
      </div>
    );
  }

  return (
    <div className={cn("animate-pulse space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "h-4 bg-muted-foreground/20 rounded",
            i === lines - 1 && lines > 1 && "w-3/4"
          )}
        />
      ))}
    </div>
  );
}