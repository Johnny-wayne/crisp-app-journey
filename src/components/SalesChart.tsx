import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ChefHat } from "lucide-react";

const data = [
  { date: "10/06", sales: 45 },
  { date: "11/06", sales: 52 },
  { date: "12/06", sales: 48 },
  { date: "13/06", sales: 35 },
  { date: "14/06", sales: 67 },
  { date: "15/06", sales: 78 },
  { date: "16/06", sales: 56 },
];

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Título Do Gráfico</CardTitle>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">15 mai - 15 jun, 2025</span>
            <span className="text-sm font-medium">Gráfico</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-2xl font-bold">2.560 Pontos</div>
          <div className="text-2xl font-bold">123 Vendas</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Bar 
                dataKey="sales" 
                fill="hsl(var(--chart-2))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="bg-chart-2 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-lg font-bold">REI DO FRANGO</div>
              <div className="text-sm opacity-90">ÚLTIMO TÍTULO</div>
              <ChefHat className="w-8 h-8 mx-auto mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">POSIÇÃO</div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Sua loja:</span>
                  <span className="font-bold">3º</span>
                </div>
                <div className="flex justify-between">
                  <span>Região:</span>
                  <span className="font-bold">57º</span>
                </div>
                <div className="flex justify-between">
                  <span>Cidade:</span>
                  <span className="font-bold">127º</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">TICKET MÉDIO</div>
              <div className="text-2xl font-bold text-chart-2 mt-2">R$ 78,58</div>
              <div className="text-sm text-muted-foreground">350 pontos / Por venda</div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}