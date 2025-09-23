import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { EmptyState } from "@/components/ui/empty-state";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Search, Target, Trash2, User, Calendar, Trophy, CheckCircle, X } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const chartData = [
  { name: "Jan", completed: 12, pending: 8 },
  { name: "Fev", completed: 15, pending: 5 },
  { name: "Mar", completed: 18, pending: 7 },
  { name: "Abr", completed: 22, pending: 3 },
  { name: "Mai", completed: 25, pending: 2 },
  { name: "Jun", completed: 20, pending: 6 },
];

const mockEmployees = [
  { id: 1, name: "João Silva", position: "Vendedor" },
  { id: 2, name: "Maria Santos", position: "Consultora" },
  { id: 3, name: "Pedro Costa", position: "Vendedor" },
  { id: 4, name: "Ana Lima", position: "Supervisora" },
];

export default function MissionManagement() {
  const { toast } = useToast();
  const [missionTitle, setMissionTitle] = useState("");
  const [missionDescription, setMissionDescription] = useState("");
  const [missionPoints, setMissionPoints] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [searchEmployee, setSearchEmployee] = useState("");
  const [activeMissions, setActiveMissions] = useState([
    {
      id: 1,
      title: "Vender 10 produtos premium",
      points: 100,
      progress: 40,
      deadline: "2024-01-15",
      assignedTo: "João Silva",
    },
    {
      id: 2,
      title: "Conseguir 5 cross-sells",
      points: 75,
      progress: 80,
      deadline: "2024-01-20",
      assignedTo: "Maria Santos",
    },
  ]);
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; missionId: number | null }>({
    open: false,
    missionId: null,
  });

  const handleCreateMission = () => {
    if (!missionTitle.trim() || !missionDescription.trim() || !missionPoints.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    const newMission = {
      id: Date.now(),
      title: missionTitle,
      points: parseInt(missionPoints),
      progress: 0,
      deadline: "2024-01-31",
      assignedTo: null,
    };

    setActiveMissions([...activeMissions, newMission]);
    setMissionTitle("");
    setMissionDescription("");
    setMissionPoints("");
    
    toast({
      title: "Sucesso!",
      description: "Missão criada com sucesso.",
    });
  };

  const handleAssignMission = () => {
    if (!selectedEmployee) {
      toast({
        title: "Erro",
        description: "Selecione um funcionário para atribuir a missão.",
        variant: "destructive",
      });
      return;
    }

    const unassignedMission = activeMissions.find(m => !m.assignedTo);
    if (!unassignedMission) {
      toast({
        title: "Aviso",
        description: "Não há missões disponíveis para atribuição.",
        variant: "destructive",
      });
      return;
    }

    const selectedEmp = mockEmployees.find(emp => emp.id.toString() === selectedEmployee);
    if (selectedEmp) {
      setActiveMissions(activeMissions.map(mission => 
        mission.id === unassignedMission.id 
          ? { ...mission, assignedTo: selectedEmp.name }
          : mission
      ));
      setSelectedEmployee("");
      
      toast({
        title: "Sucesso!",
        description: `Missão atribuída a ${selectedEmp.name}.`,
      });
    }
  };

  const handleRemoveMission = (missionId: number) => {
    setActiveMissions(activeMissions.filter(mission => mission.id !== missionId));
    setDeleteDialog({ open: false, missionId: null });
    
    toast({
      title: "Missão removida",
      description: "A missão foi removida com sucesso.",
    });
  };

  const filteredEmployees = mockEmployees.filter(emp =>
    emp.name.toLowerCase().includes(searchEmployee.toLowerCase())
  );

  const unassignedMissionsCount = activeMissions.filter(m => !m.assignedTo).length;

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-4 md:p-6 animate-fade-in">
        <div className="space-y-6">
          <div className="space-y-4">
            <Breadcrumbs />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Gerenciar Missões</h2>
                <p className="text-muted-foreground">Crie e atribua missões para sua equipe</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="animate-pulse-subtle">
                  {unassignedMissionsCount} não atribuídas
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Create Mission Card */}
            <Card variant="bordered" className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  <span>Adicionar Missão</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="mission-title" className="text-sm font-medium mb-2 block">Título da Missão *</Label>
                  <Input
                    id="mission-title"
                    placeholder="Ex: Vender 10 produtos premium"
                    value={missionTitle}
                    onChange={(e) => setMissionTitle(e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.01]"
                  />
                </div>
                <div>
                  <Label htmlFor="mission-description" className="text-sm font-medium mb-2 block">Descrição *</Label>
                  <Textarea
                    id="mission-description"
                    placeholder="Descreva os detalhes da missão..."
                    value={missionDescription}
                    onChange={(e) => setMissionDescription(e.target.value)}
                    className="min-h-[80px] transition-all duration-200 focus:scale-[1.01]"
                  />
                </div>
                <div>
                  <Label htmlFor="mission-points" className="text-sm font-medium mb-2 block">Pontos *</Label>
                  <Input
                    id="mission-points"
                    type="number"
                    placeholder="100"
                    value={missionPoints}
                    onChange={(e) => setMissionPoints(e.target.value)}
                    className="transition-all duration-200 focus:scale-[1.01]"
                  />
                </div>
                <Button 
                  onClick={handleCreateMission} 
                  className="w-full"
                  variant="gradient"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Missão
                </Button>
              </CardContent>
            </Card>

            {/* Assign to Employee Card */}
            <Card variant="bordered" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="p-2 bg-info/10 rounded-md">
                    <User className="w-5 h-5 text-info" />
                  </div>
                  <span>Atribuir a Funcionário</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Buscar Funcionário</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Digite o nome do funcionário..."
                      value={searchEmployee}
                      onChange={(e) => setSearchEmployee(e.target.value)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.01]"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Selecionar Funcionário</Label>
                  <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                    <SelectTrigger className="transition-all duration-200 focus:scale-[1.01]">
                      <SelectValue placeholder="Escolha um funcionário" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredEmployees.map((employee) => (
                        <SelectItem key={employee.id} value={employee.id.toString()}>
                          <div className="flex items-center space-x-2">
                            <span>{employee.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {employee.position}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleAssignMission} 
                  className="w-full"
                  disabled={unassignedMissionsCount === 0}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Atribuir Última Missão
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Active Missions */}
            <Card variant="elevated" className="xl:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="p-2 bg-warning/10 rounded-md">
                    <Target className="w-5 h-5 text-warning" />
                  </div>
                  <span>Missões em Andamento</span>
                  <Badge variant="secondary">{activeMissions.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeMissions.length === 0 ? (
                  <EmptyState
                    icon={Target}
                    title="Nenhuma missão ativa"
                    description="Crie sua primeira missão para começar a engajar sua equipe."
                    action={{
                      label: "Criar Missão",
                      onClick: () => (document.querySelector('#mission-title') as HTMLInputElement)?.focus(),
                    }}
                  />
                ) : (
                  <div className="space-y-4">
                    {activeMissions.map((mission, index) => (
                      <div 
                        key={mission.id} 
                        className="p-4 border rounded-lg hover:shadow-md transition-all duration-200 animate-fade-in hover:scale-[1.01]"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">{mission.title}</h4>
                              <Badge variant="outline">
                                <Trophy className="w-3 h-3 mr-1" />
                                {mission.points} pts
                              </Badge>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Progresso</span>
                                <span className="font-medium">{mission.progress}%</span>
                              </div>
                              <Progress value={mission.progress} className="h-2" />
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {new Date(mission.deadline).toLocaleDateString('pt-BR')}
                              </div>
                              {mission.assignedTo && (
                                <div className="flex items-center">
                                  <User className="w-3 h-3 mr-1" />
                                  {mission.assignedTo}
                                </div>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setDeleteDialog({ open: true, missionId: mission.id })}
                            className="hover:bg-destructive hover:text-destructive-foreground"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Completed Missions Chart */}
            <Card variant="gradient" className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="p-2 bg-success/10 rounded-md">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <span>Missões Concluídas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="completed" fill="hsl(var(--success))" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="pending" fill="hsl(var(--muted))" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-success">112</div>
                    <div className="text-sm text-muted-foreground">Concluídas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-muted-foreground">31</div>
                    <div className="text-sm text-muted-foreground">Pendentes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <ConfirmDialog
          open={deleteDialog.open}
          onOpenChange={(open) => setDeleteDialog({ open, missionId: null })}
          title="Remover Missão"
          description="Tem certeza que deseja remover esta missão? Esta ação não pode ser desfeita."
          confirmLabel="Remover"
          variant="destructive"
          onConfirm={() => deleteDialog.missionId && handleRemoveMission(deleteDialog.missionId)}
        />
      </main>
    </div>
  );
}