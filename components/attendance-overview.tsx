import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, UserX, TrendingUp } from "lucide-react"

const attendanceStats = [
  {
    title: "Total Students",
    value: "1,247",
    change: "All enrolled",
    changeType: "neutral" as const,
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Present Today",
    value: "1,175",
    change: "94.2% attendance",
    changeType: "positive" as const,
    icon: UserCheck,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Absent Today",
    value: "72",
    change: "5.8% absence",
    changeType: "negative" as const,
    icon: UserX,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Weekly Average",
    value: "93.8%",
    change: "+1.2% from last week",
    changeType: "positive" as const,
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function AttendanceOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {attendanceStats.map((stat) => (
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
              <span
                className={`font-medium ${
                  stat.changeType === "positive"
                    ? "text-secondary"
                    : stat.changeType === "negative"
                      ? "text-destructive"
                      : "text-muted-foreground"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
