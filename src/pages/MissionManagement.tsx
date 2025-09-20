import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Target, Users, Calendar, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

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
                <Input id="mission-title" placeholder="Ex: Vender 10 produtos premium" />
              </div>
              
              <div>
                <Label htmlFor="mission-description">Descrição</Label>
                <Textarea id="mission-description" placeholder="Descreva os objetivos e critérios da missão..." />
              </div>

              <div>
                <Label htmlFor="mission-points">Pontos da Missão</Label>
                <Input id="mission-points" type="number" placeholder="100" />
              </div>

              <Button className="w-full">
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
                <Input id="employee-search" placeholder="Digite o nome do funcionário..." />
              </div>
              
              <div className="space-y-2">
                <Label>Funcionários Sugeridos</Label>
                <div className="space-y-2">
                  {["Carlos Silva", "Maria Santos", "João Pedro", "Ana Costa"].map((name) => (
                    <div key={name} className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">{name}</span>
                      <Button size="sm" variant="outline">
                        Atribuir
                      </Button>
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
                {[
                  { title: "Vender", progress: 75, points: "50 pts", deadline: "Hoje às 18h" },
                  { title: "Cross-sell", progress: 60, points: "30 pts", deadline: "Amanhã" },
                  { title: "Atendimento", progress: 90, points: "40 pts", deadline: "2 dias" },
                  { title: "Upselling", progress: 45, points: "60 pts", deadline: "3 dias" }
                ].map((mission, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{mission.title}</span>
                      <Badge variant="outline">{mission.points}</Badge>
                    </div>
                    <Progress value={mission.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">{mission.deadline}</div>
                  </div>
                ))}
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