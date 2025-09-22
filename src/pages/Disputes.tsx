import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Swords, Calendar, Users, X } from "lucide-react";
import { useState } from "react";

export default function Disputes() {
  const { toast } = useToast();
  const [selectedStore, setSelectedStore] = useState("");
  const [disputeType, setDisputeType] = useState("vendas");
  const [activeDisputes, setActiveDisputes] = useState([
    { id: 1, store1: "Barra Bonita", store2: "Vila Olímpia", value: "R$ 176.754,31", period: "31/05/2024 - 07/06/2024" },
    { id: 2, store1: "Centro", store2: "Limeira", value: "R$ 156.904,81", period: "31/05/2024 - 07/06/2024" }
  ]);

  const stores = ["Barra Bonita", "Vila Olímpia", "Centro", "Limeira", "Interlagos", "Tatuapé", "São Caetano", "Diadema"];

  const handleCreateDispute = () => {
    if (!selectedStore) {
      toast({
        title: "Erro",
        description: "Selecione uma loja para criar a disputa",
        variant: "destructive"
      });
      return;
    }

    const newDispute = {
      id: Date.now(),
      store1: selectedStore,
      store2: stores[Math.floor(Math.random() * stores.length)],
      value: `R$ ${(Math.random() * 200000 + 100000).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      period: `${new Date().toLocaleDateString('pt-BR')} - ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}`
    };

    setActiveDisputes([...activeDisputes, newDispute]);
    setSelectedStore("");
    setDisputeType("vendas");
    
    toast({
      title: "Disputa criada!",
      description: `Disputa entre ${newDispute.store1} e ${newDispute.store2} foi iniciada.`
    });
  };

  const handleRemoveDispute = (id: number) => {
    setActiveDisputes(activeDisputes.filter(d => d.id !== id));
    toast({
      title: "Disputa finalizada",
      description: "A disputa foi movida para disputas finalizadas."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-6">
          <div>
            <h1 className="text-2xl font-bold">Disputas</h1>
            <p className="text-muted-foreground">Gerencie competições entre lojas</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Disputa
          </Button>
        </div>
      </div>

      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nova Disputa */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Nova Disputa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="store-selection">Selecionar Loja</Label>
                <Select value={selectedStore} onValueChange={setSelectedStore}>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha uma loja" />
                  </SelectTrigger>
                  <SelectContent>
                    {stores.map((store) => (
                      <SelectItem key={store} value={store}>{store}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Tipo da Disputa</Label>
                <Select value={disputeType} onValueChange={setDisputeType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendas">Vendas</SelectItem>
                    <SelectItem value="cross-sell">Cross-sell</SelectItem>
                    <SelectItem value="ticket-medio">Ticket Médio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" onClick={handleCreateDispute}>
                Criar Disputa
              </Button>
            </CardContent>
          </Card>

          {/* Disputas em Andamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Swords className="h-5 w-5" />
                Disputas em Andamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeDisputes.map((dispute) => (
                  <div key={dispute.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-green-600">{dispute.store1}</h4>
                        <p className="text-sm text-muted-foreground">VS</p>
                        <h4 className="font-medium text-red-600">{dispute.store2}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {dispute.value}
                        </Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveDispute(dispute.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {dispute.period}
                    </div>
                  </div>
                ))}
                {activeDisputes.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhuma disputa ativa no momento
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disputas Finalizadas */}
        <Card>
          <CardHeader>
            <CardTitle>Disputas Finalizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { winner: "Interlagos", loser: "Tatuapé", result: "Crescente", period: "07/06/2024", status: "Aberta" },
                { winner: "Interlagos", loser: "Tatuapé", result: "Finalizadas", period: "07/06/2024", status: "Fechada" },
                { winner: "Interlagos", loser: "Tatuapé", result: "São Caetano", period: "07/06/2024", status: "Aberta" },
                { winner: "Interlagos", loser: "Tatuapé", result: "Diadema", period: "07/06/2024", status: "Fechada" }
              ].map((disputa, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm font-medium">{disputa.winner}</div>
                      <div className="text-xs text-muted-foreground">vs {disputa.loser}</div>
                    </div>
                    <div className="text-sm">{disputa.result}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{disputa.period}</span>
                    <Badge variant={disputa.status === "Aberta" ? "default" : "secondary"}>
                      {disputa.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}