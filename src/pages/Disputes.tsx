import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Swords, Calendar, Users } from "lucide-react";

export default function Disputes() {
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
                <Input id="store-selection" placeholder="Digite para buscar..." />
              </div>
              
              <div>
                <Label>Tipo da Pista</Label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="vendas" name="tipo" defaultChecked />
                    <label htmlFor="vendas">Vendas</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="cross-sell" name="tipo" />
                    <label htmlFor="cross-sell">Cross-sell</label>
                  </div>
                </div>
              </div>

              <Button className="w-full">
                Criar
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
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-green-600">Barra Bonita</h4>
                      <p className="text-sm text-muted-foreground">VS</p>
                      <h4 className="font-medium text-red-600">Vila Olímpia</h4>
                    </div>
                    <Badge variant="outline">
                      R$ 176.754,31
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    31/05/2024 - 07/06/2024
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-green-600">Centro</h4>
                      <p className="text-sm text-muted-foreground">VS</p>
                      <h4 className="font-medium text-red-600">Limeira</h4>
                    </div>
                    <Badge variant="outline">
                      R$ 156.904,81
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    31/05/2024 - 07/06/2024
                  </div>
                </div>
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