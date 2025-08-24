import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Calendar, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Students",
    value: "1,247",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Total Teachers",
    value: "89",
    change: "+3%",
    changeType: "positive" as const,
    icon: GraduationCap,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Calendar,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Average Grade",
    value: "8.7",
    change: "+0.3",
    changeType: "positive" as const,
    icon: TrendingUp,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function StatsOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <span className={`font-medium ${stat.changeType === "positive" ? "text-secondary" : "text-destructive"}`}>
                {stat.change}
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
