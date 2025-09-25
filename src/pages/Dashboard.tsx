import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { SalesChart } from "@/components/SalesChart";
import { Leaderboard } from "@/components/Leaderboard";
import { Missions } from "@/components/Missions";
export default function Dashboard() {
  return <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-4 md:p-6 space-y-6 animate-fade-in bg-zinc-950">
        {/* Metrics Cards */}
        <div className="animate-slide-up">
          <MetricsCards />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          {/* Sales Chart - Takes 2 columns on large screens */}
          <div className="xl:col-span-2 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <SalesChart />
          </div>
          
          {/* Leaderboard - Takes 1 column */}
          <div className="space-y-4 md:space-y-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <Leaderboard />
          </div>
        </div>
        
        {/* Missions Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2">
            {/* Could add more charts or content here */}
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Missions />
          </div>
        </div>
      </main>
    </div>;
}