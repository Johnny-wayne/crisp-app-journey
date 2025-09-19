import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { SalesChart } from "@/components/SalesChart";
import { Leaderboard } from "@/components/Leaderboard";
import { Missions } from "@/components/Missions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6 space-y-6">
        {/* Metrics Cards */}
        <MetricsCards />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Chart - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          
          {/* Leaderboard - Takes 1 column */}
          <div className="space-y-6">
            <Leaderboard />
          </div>
        </div>
        
        {/* Missions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Could add more charts or content here */}
          </div>
          <Missions />
        </div>
      </main>
    </div>
  );
}