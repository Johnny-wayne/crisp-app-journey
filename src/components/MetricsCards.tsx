import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Trophy, DollarSign } from "lucide-react";
export function MetricsCards() {
  const metrics = [{
    title: "Vendas",
    value: "R$ 12.3k",
    subtitle: "250 Items",
    change: "+12%",
    icon: DollarSign,
    color: "text-chart-1"
  }, {
    title: "Cross-sells",
    value: "223",
    subtitle: "vendas",
    change: "+8%",
    icon: TrendingUp,
    color: "text-chart-2"
  }, {
    title: "Ticket Médio",
    value: "R$ 78,58",
    subtitle: "350 pontos",
    change: "+15%",
    icon: Target,
    color: "text-chart-3"
  }, {
    title: "Pontos",
    value: "2.560",
    subtitle: "Este mês",
    change: "+23%",
    icon: Trophy,
    color: "text-chart-4"
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => <Card key={index} className="relative overflow-hidden bg-zinc-900">
          <CardHeader className="pb-2 bg-neutral-900">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-zinc-900">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.subtitle}</div>
              </div>
              <div className="flex flex-col items-end">
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
                <span className="text-xs text-success font-medium mt-1">
                  {metric.change}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>)}
    </div>;
}