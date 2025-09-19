import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, User } from "lucide-react";

export function Leaderboard() {
  const leaders = [
    {
      position: 1,
      name: "Vendedor",
      points: 35000,
      icon: Trophy,
      badge: "1st",
      badgeColor: "bg-yellow-500",
    },
    {
      position: 2,
      name: "Vendedor",
      points: 30000,
      icon: Medal,
      badge: "2nd",
      badgeColor: "bg-gray-400",
    },
    {
      position: 3,
      name: "Claudio Vinícius",
      points: 28000,
      icon: Award,
      badge: "3rd",
      badgeColor: "bg-orange-600",
      isCurrentUser: true,
    },
    {
      position: 4,
      name: "Vendedor",
      points: 26000,
      icon: User,
      badge: "4th",
      badgeColor: "bg-muted",
    },
    {
      position: 5,
      name: "Vendedor",
      points: 20000,
      icon: User,
      badge: "5th",
      badgeColor: "bg-muted",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          LEADERBOARD
          <span className="text-sm font-normal text-muted-foreground">
            Mostrar todos
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              leader.isCurrentUser 
                ? "bg-primary/10 border border-primary/20" 
                : "hover:bg-muted/50"
            }`}
          >
            <div className="flex items-center space-x-3 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${leader.badgeColor}`}>
                <span className="text-white text-sm font-bold">{leader.position}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">{leader.name}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-bold">{leader.points.toLocaleString()} pontos</span>
              <leader.icon className="w-5 h-5 text-primary" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}