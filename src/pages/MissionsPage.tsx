import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, CheckCircle, Clock } from "lucide-react";

export default function MissionsPage() {
  const missions = [
    {
      title: "Limpar a Loja",
      description: "Mantenha a loja limpa e organizada",
      points: 200,
      progress: 67.7,
      completed: false,
      deadline: "Hoje, 18:00",
    },
    {
      title: "Limpar os Freezers",
      description: "Limpeza completa dos equipamentos de refrigeração",
      points: 200,
      progress: 67.7,
      completed: false,
      deadline: "Hoje, 20:00",
    },
    {
      title: "Vender 10 frangos",
      description: "Meta de vendas de frango para hoje",
      points: 5000,
      progress: 37.7,
      completed: false,
      deadline: "Hoje, 22:00",
    },
    {
      title: "Organizar estoque",
      description: "Organização completa do estoque",
      points: 300,
      progress: 100,
      completed: true,
      deadline: "Concluído",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Missões</h2>
            <p className="text-muted-foreground">Complete suas missões diárias e ganhe pontos</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className={mission.completed ? "bg-success/5 border-success/20" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        mission.completed ? "bg-success" : "bg-primary/10"
                      }`}>
                        {mission.completed ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <Trophy className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span>{mission.title}</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      mission.completed ? "text-success" : "text-primary"
                    }`}>
                      {mission.points} pts
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{mission.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Progresso</span>
                      <span className={`text-sm font-medium ${
                        mission.completed ? "text-success" : "text-foreground"
                      }`}>
                        {mission.progress}%
                      </span>
                    </div>
                    
                    <Progress 
                      value={mission.progress} 
                      className={mission.completed ? "bg-success/20" : ""}
                    />
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{mission.deadline}</span>
                      </div>
                      {mission.completed && (
                        <div className="flex items-center space-x-1 text-success">
                          <CheckCircle className="w-4 h-4" />
                          <span>Concluído</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}