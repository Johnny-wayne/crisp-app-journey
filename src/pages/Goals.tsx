import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Target, TrendingUp, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Goals() {
  const goals = [
    {
      title: "Meta Mensal",
      current: 12250,
      target: 25000,
      unit: "R$",
      description: "Vendas este mês",
      progress: 49,
      icon: Target,
    },
    {
      title: "Meta de Pontos",
      current: 2550,
      target: 5000,
      unit: "pts",
      description: "Pontos este mês",
      progress: 51,
      icon: Award,
    },
    {
      title: "Meta Cross-sell",
      current: 222,
      target: 300,
      unit: "vendas",
      description: "Cross-sells este mês",
      progress: 74,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-4 md:p-6 animate-fade-in">
        <div className="space-y-6">
          <div className="space-y-4">
            <Breadcrumbs />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Metas</h2>
              <p className="text-muted-foreground">Acompanhe suas metas e objetivos</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card 
                  key={goal.title} 
                  variant="elevated" 
                  className="animate-fade-in hover:scale-[1.02] transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span>{goal.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold">
                        {goal.unit} {goal.current.toLocaleString('pt-BR')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        de {goal.unit} {goal.target.toLocaleString('pt-BR')} • {goal.description}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium text-primary">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center text-success text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {goal.progress}% concluído
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}