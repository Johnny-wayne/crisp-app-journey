import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Trophy } from "lucide-react";

export function Missions() {
  const missions = [
    {
      title: "Limpar a Loja",
      points: 200,
      progress: 67.7,
      completed: false,
      icon: Circle,
    },
    {
      title: "Limpar os Freezers",
      points: 200,
      progress: 67.7,
      completed: false,
      icon: Circle,
    },
    {
      title: "Vender 10 frangos",
      points: 5000,
      progress: 37.7,
      completed: false,
      icon: Circle,
    },
    {
      title: "Limpar a Loja",
      points: 200,
      progress: 100,
      completed: true,
      icon: CheckCircle,
    },
  ];

  const todayMissions = missions.slice(0, 3);
  const completedMission = missions[3];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Missões de Hoje
          <span className="text-sm font-normal text-muted-foreground">
            Mostrar todas
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Today's Missions */}
        <div className="space-y-3">
          {todayMissions.map((mission, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{mission.title}</span>
                  <span className="text-sm text-success font-medium">{mission.progress}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{mission.points} pontos</span>
                  <Progress value={mission.progress} className="w-20 h-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Completed Mission */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-success">{completedMission.title}</span>
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <span className="text-sm text-success/80">{completedMission.points} pontos</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold">80</div>
            <div className="text-sm text-muted-foreground">Missões Completadas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">13</div>
            <div className="text-sm text-muted-foreground">Medalhas</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}