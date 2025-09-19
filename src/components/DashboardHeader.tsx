import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-primary-foreground hover:bg-primary-foreground/10" />
          <div>
            <h1 className="text-xl font-bold">Olá, Claudio</h1>
            <p className="text-primary-foreground/80 text-sm">3ª Posição</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}