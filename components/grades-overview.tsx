import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, TrendingUp, Award } from "lucide-react"

const gradeStats = [
  {
    title: "Total Exams",
    value: "24",
    change: "+3 this month",
    changeType: "positive" as const,
    icon: FileText,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Students Graded",
    value: "1,247",
    change: "98% completion",
    changeType: "positive" as const,
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Average Score",
    value: "8.7/10",
    change: "+0.3 from last term",
    changeType: "positive" as const,
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Top Performers",
    value: "156",
    change: "Above 9.0 average",
    changeType: "positive" as const,
    icon: Award,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function GradesOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {gradeStats.map((stat) => (
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
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
