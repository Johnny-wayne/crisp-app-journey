import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import MissionsPage from "./pages/MissionsPage";
import Competition from "./pages/Competition";
import ManagerDashboard from "./pages/ManagerDashboard";
import RegionalRanking from "./pages/RegionalRanking";
import Disputes from "./pages/Disputes";
import MissionManagement from "./pages/MissionManagement";
import SalesManagement from "./pages/SalesManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/missions" element={<MissionsPage />} />
                <Route path="/competition" element={<Competition />} />
                <Route path="/manager" element={<ManagerDashboard />} />
                <Route path="/manager/ranking" element={<RegionalRanking />} />
                <Route path="/manager/disputes" element={<Disputes />} />
                <Route path="/manager/mission-management" element={<MissionManagement />} />
                <Route path="/manager/sales" element={<SalesManagement />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
