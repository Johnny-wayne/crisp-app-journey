import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp } from "lucide-react";

export default function Goals() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Metas</h2>
            <p className="text-muted-foreground">Acompanhe suas metas e objetivos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Meta Mensal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 25.000</div>
                <div className="text-sm text-muted-foreground">Vendas este mês</div>
                <div className="mt-2">
                  <div className="flex items-center text-success text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    49% concluído
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Meta de Pontos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.000 pts</div>
                <div className="text-sm text-muted-foreground">Pontos este mês</div>
                <div className="mt-2">
                  <div className="flex items-center text-success text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    51% concluído
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Meta Cross-sell</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">300 vendas</div>
                <div className="text-sm text-muted-foreground">Cross-sells este mês</div>
                <div className="mt-2">
                  <div className="flex items-center text-success text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    74% concluído
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}