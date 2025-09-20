import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trophy, Target, TrendingUp } from "lucide-react";

export default function RegionalRanking() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-6">
          <div>
            <h1 className="text-2xl font-bold">Ranking Regional</h1>
            <p className="text-muted-foreground">Performance das lojas da região</p>
          </div>
          <Badge variant="secondary">Maio 2024</Badge>
        </div>
      </div>

      <main className="p-6 space-y-6">
        {/* Mapa do Brasil - Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              LEADERBOARD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium">Mapa do Brasil</p>
                <p className="text-sm text-muted-foreground">Visualização de performance por região</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Faturamento e Ticket Médio */}
          <Card>
            <CardHeader>
              <CardTitle>Faturamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">R$ 2.347</span>
                <Badge variant="outline">5.632.304 pontos</Badge>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Cross-sell</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>50.500 vendidos</span>
                    <span className="text-muted-foreground">total</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meta: 60.000</span>
                    <span className="text-muted-foreground">84%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Vendas</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>R$ 223.546,08</span>
                    <span className="text-muted-foreground">total</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meta: 250.000</span>
                    <span className="text-muted-foreground">89%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Ticket Médio</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>R$ 78,58</span>
                    <span className="text-muted-foreground">210 vendas</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ranking de Vendedores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Ranking de Vendedores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { position: 1, name: "Vendedor", points: "2.081 pontos", icon: "🥇" },
                  { position: 2, name: "Vendedor", points: "1.981 pontos", icon: "🥈" },
                  { position: 3, name: "Vendedor", points: "1.881 pontos", icon: "🥉" },
                  { position: 4, name: "Vendedor", points: "1.781 pontos", icon: "4️⃣" }
                ].map((vendedor) => (
                  <div key={vendedor.position} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{vendedor.icon}</span>
                      <div>
                        <span className="font-medium">{vendedor.name}</span>
                        <div className="text-sm text-muted-foreground">Posição #{vendedor.position}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{vendedor.points}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}