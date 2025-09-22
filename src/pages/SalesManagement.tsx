import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, TrendingUp, Calendar, PieChart } from "lucide-react";
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect } from "react";

const pieData = [
  { name: "Açaí", value: 40, color: "#8b5cf6" },
  { name: "Lanches", value: 25, color: "#06b6d4" },
  { name: "Bebidas", value: 20, color: "#10b981" },
  { name: "Sobremesas", value: 10, color: "#f59e0b" },
  { name: "Outros", value: 5, color: "#ef4444" }
];

export default function SalesManagement() {
  const [selectedPeriod, setSelectedPeriod] = useState("hoje");
  const [salesData, setSalesData] = useState({
    vendas: { value: "R$ 12,36", items: "250 itens" },
    crossSells: { value: "223 vendidos", meta: "Meta: 250" },
    ticketMedio: { value: "R$ 78,58", vendas: "210 vendas" }
  });

  const [recentSales, setRecentSales] = useState([
    { id: 1, product: "Açaí Frapp melgaçuda 1kg", value: "R$ 25,00", time: "15 min atrás", status: "✓ Pronto" },
    { id: 2, product: "Açaí Frapp melgaçuda 1kg", value: "R$ 25,00", time: "23 min atrás", status: "✓ Pronto" },
    { id: 3, product: "Açaí Frapp melgaçuda 1kg", value: "R$ 25,00", time: "31 min atrás", status: "✓ Pronto" },
    { id: 4, product: "Açaí Frapp melgaçuda 1kg", value: "R$ 25,00", time: "45 min atrás", status: "✓ Pronto" }
  ]);

  useEffect(() => {
    // Simular mudança de dados baseada no período
    if (selectedPeriod === "semana") {
      setSalesData({
        vendas: { value: "R$ 86,52", items: "1.750 itens" },
        crossSells: { value: "1.561 vendidos", meta: "Meta: 1.750" },
        ticketMedio: { value: "R$ 82,15", vendas: "1.470 vendas" }
      });
    } else if (selectedPeriod === "mes") {
      setSalesData({
        vendas: { value: "R$ 372,40", items: "7.500 itens" },
        crossSells: { value: "6.700 vendidos", meta: "Meta: 7.500" },
        ticketMedio: { value: "R$ 85,30", vendas: "6.300 vendas" }
      });
    } else {
      setSalesData({
        vendas: { value: "R$ 12,36", items: "250 itens" },
        crossSells: { value: "223 vendidos", meta: "Meta: 250" },
        ticketMedio: { value: "R$ 78,58", vendas: "210 vendas" }
      });
    }
  }, [selectedPeriod]);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="flex items-center justify-between p-6">
          <div>
            <h1 className="text-2xl font-bold">Gestão de Vendas</h1>
            <p className="text-muted-foreground">Acompanhe vendas e performance da equipe</p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hoje">Hoje</SelectItem>
                <SelectItem value="semana">Esta semana</SelectItem>
                <SelectItem value="mes">Este mês</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <main className="p-6 space-y-6">
        {/* Resumo de Vendas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vendas</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{salesData.vendas.value}</div>
              <p className="text-xs text-muted-foreground">{salesData.vendas.items}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cross-sells</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{salesData.crossSells.value}</div>
              <p className="text-xs text-muted-foreground">{salesData.crossSells.meta}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{salesData.ticketMedio.value}</div>
              <p className="text-xs text-muted-foreground">{salesData.ticketMedio.vendas}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Últimas Vendas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Últimas Vendas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{sale.product}</div>
                      <div className="text-xs text-muted-foreground">{sale.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{sale.value}</div>
                      <div className="text-xs text-green-600">{sale.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vendas por Categoria */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Vendas por Categoria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
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