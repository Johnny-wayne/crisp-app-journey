import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Trophy, Swords } from "lucide-react";

const myStoreData = [
  { date: "05/06", sales: 45 },
  { date: "11/06", sales: 52 },
  { date: "05/06", sales: 48 },
  { date: "11/06", sales: 35 },
  { date: "24/06", sales: 67 },
  { date: "15/06", sales: 78 },
  { date: "16/06", sales: 56 },
];

const competitorData = [
  { date: "05/06", sales: 38 },
  { date: "11/06", sales: 65 },
  { date: "05/06", sales: 59 },
  { date: "11/06", sales: 42 },
  { date: "24/06", sales: 33 },
  { date: "15/06", sales: 48 },
  { date: "16/06", sales: 44 },
];

const categoryData = [
  { name: "Frangos", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Bovinos", value: 15, color: "hsl(var(--chart-2))" },
  { name: "Legumes", value: 35, color: "hsl(var(--chart-3))" },
  { name: "Suínos", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Tempero", value: 5, color: "hsl(var(--chart-5))" },
];

export default function Competition() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Disputa</h2>
            <p className="text-muted-foreground">Compare seu desempenho com outras lojas</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* My Store Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Minha Loja</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={myStoreData}>
                      <XAxis dataKey="date" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Bar dataKey="sales" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-primary">23,3%</div>
                  <div className="text-sm text-muted-foreground">Performance</div>
                </div>
              </CardContent>
            </Card>

            {/* Competitor Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Swords className="w-5 h-5 text-chart-2" />
                  <span>Loja Adversária</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={competitorData}>
                      <XAxis dataKey="date" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Bar dataKey="sales" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-chart-2">67,7%</div>
                  <div className="text-sm text-muted-foreground">Performance</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* VS Section */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">23,3%</div>
                  <div className="text-muted-foreground">Minha Loja</div>
                </div>
                <div className="text-6xl font-bold text-muted-foreground">VS</div>
                <div className="text-center">
                  <div className="text-4xl font-bold">67,7%</div>
                  <div className="text-muted-foreground">Loja Adversária</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: category.color }}
                        />
                        <span>{category.name}</span>
                      </div>
                      <span className="font-medium">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}