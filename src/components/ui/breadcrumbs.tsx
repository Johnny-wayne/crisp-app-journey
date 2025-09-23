import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  "/": "Dashboard",
  "/goals": "Metas",
  "/missions": "Missões",
  "/competition": "Competição",
  "/manager": "Painel do Gerente",
  "/manager/ranking": "Ranking Regional",
  "/manager/disputes": "Disputas",
  "/manager/mission-management": "Gerenciar Missões",
  "/manager/sales": "Vendas",
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const location = useLocation();
  
  const breadcrumbItems = items || generateBreadcrumbs(location.pathname);

  return (
    <nav className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}>
      <Link 
        to="/" 
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          {item.href && index < breadcrumbItems.length - 1 ? (
            <Link 
              to={item.href} 
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    
    breadcrumbs.push({
      label: routeLabels[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: isLast ? undefined : currentPath,
    });
  });
  
  return breadcrumbs;
}