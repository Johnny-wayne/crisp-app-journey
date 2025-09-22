import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Plus, Target, Users, Calendar, CheckCircle, X } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";

const chartData = [
  { name: "Seg", value: 80 },
  { name: "Ter", value: 65 },
  { name: "Qua", value: 90 },
  { name: "Qui", value: 75 },
  { name: "Sex", value: 95 },
  { name: "Sab", value: 85 },
  { name: "Dom", value: 70 }
];

export default function MissionManagement() {
  const { toast } = useToast();
  const [missionTitle, setMissionTitle] = useState("");
  const [missionDescription, setMissionDescription] = useState("");
  const [missionPoints, setMissionPoints] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [activeMissions, setActiveMissions] = useState([
    { id: 1, title: "Vender 10 produtos premium", progress: 75, points: "50 pts", deadline: "Hoje às 18h", employee: "Carlos Silva" },
    { id: 2, title: "Cross-sell 5 itens", progress: 60, points: "30 pts", deadline: "Amanhã", employee: "Maria Santos" },
    { id: 3, title: "Atendimento nota 5", progress: 90, points: "40 pts", deadline: "2 dias", employee: "João Pedro" },
    { id: 4, title: "Upselling R$500", progress: 45, points: "60 pts", deadline: "3 dias", employee: "Ana Costa" }
  ]);

  const employees = ["Carlos Silva", "Maria Santos", "João Pedro", "Ana Costa", "Bruno Oliveira", "Carla Ferreira"];

  const handleCreateMission = () => {
    if (!missionTitle || !missionDescription || !missionPoints) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos da missão",
        variant: "destructive"
      });
      return;
    }

    const newMission = {
      id: Date.now(),
      title: missionTitle,
      progress: 0,
      points: `${missionPoints} pts`,
      deadline: "7 dias",
      employee: "Não atribuído"
    };

    setActiveMissions([...activeMissions, newMission]);
    setMissionTitle("");
    setMissionDescription("");
    setMissionPoints("");
    
    toast({
      title: "Missão criada!",
      description: `A missão "${missionTitle}" foi criada com sucesso.`
    });
  };

  const handleAssignMission = (missionId: number, employeeName: string) => {
    setActiveMissions(activeMissions.map(mission => 
      mission.id === missionId 
        ? { ...mission, employee: employeeName }
        : mission
    ));
    
    toast({
      title: "Missão atribuída!",
      description: `Missão atribuída para ${employeeName}.`
    });
  };

  const handleRemoveMission = (id: number) => {
    setActiveMissions(activeMissions.filter(m => m.id !== id));
    toast({
      title: "Missão removida",
      description: "A missão foi removida da lista."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-6">
          <div>
            <h1 className="text-2xl font-bold">Gestão de Missões</h1>
            <p className="text-muted-foreground">Adicione e gerencie missões para sua equipe</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Missão
          </Button>
        </div>
      </div>

      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Adicionar Missão */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Adicionar Missão
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="mission-title">Título da Missão</Label>
                <Input 
                  id="mission-title" 
                  value={missionTitle}
                  onChange={(e) => setMissionTitle(e.target.value)}
                  placeholder="Ex: Vender 10 produtos premium" 
                />
              </div>
              
              <div>
                <Label htmlFor="mission-description">Descrição</Label>
                <Textarea 
                  id="mission-description" 
                  value={missionDescription}
                  onChange={(e) => setMissionDescription(e.target.value)}
                  placeholder="Descreva os objetivos e critérios da missão..." 
                />
              </div>

              <div>
                <Label htmlFor="mission-points">Pontos da Missão</Label>
                <Input 
                  id="mission-points" 
                  type="number" 
                  value={missionPoints}
                  onChange={(e) => setMissionPoints(e.target.value)}
                  placeholder="100" 
                />
              </div>

              <Button className="w-full" onClick={handleCreateMission}>
                Criar Missão
              </Button>
            </CardContent>
          </Card>

          {/* Atribuir a Funcionário */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Atribuir a Funcionário
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="employee-search">Pesquisar Funcionário</Label>
                <Input 
                  id="employee-search" 
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                  placeholder="Digite o nome do funcionário..." 
                />
              </div>
              
              <div className="space-y-2">
                <Label>Funcionários Disponíveis</Label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {employees
                    .filter(name => name.toLowerCase().includes(selectedEmployee.toLowerCase()))
                    .map((name) => (
                    <div key={name} className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">{name}</span>
                      <div className="flex gap-2">
                        {activeMissions
                          .filter(m => m.employee === "Não atribuído")
                          .slice(0, 1)
                          .map(mission => (
                          <Button 
                            key={mission.id}
                            size="sm" 
                            variant="outline"
                            onClick={() => handleAssignMission(mission.id, name)}
                          >
                            Atribuir última missão
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Missões em Andamento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Missões em Andamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeMissions.map((mission) => (
                  <div key={mission.id} className="p-3 border rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{mission.title}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{mission.points}</Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveMission(mission.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={mission.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{mission.deadline}</span>
                      <span>Atribuído para: {mission.employee}</span>
                    </div>
                  </div>
                ))}
                {activeMissions.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhuma missão ativa no momento
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Missões Concluídas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Missões Concluídas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">15</div>
                  <div className="text-sm text-muted-foreground">Missões Completadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-muted-foreground">Pendentes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}