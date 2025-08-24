import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Users, GraduationCap, ClipboardList, Calendar } from "lucide-react"

const quickActions = [
  {
    title: "Add Student",
    description: "Register new student",
    icon: Users,
    href: "/students",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Add Teacher",
    description: "Add new teacher",
    icon: GraduationCap,
    href: "/teachers",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Create Exam",
    description: "Schedule new exam",
    icon: ClipboardList,
    href: "/grades",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Mark Attendance",
    description: "Take daily attendance",
    icon: Calendar,
    href: "/attendance",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {quickActions.map((action) => (
          <Button key={action.title} variant="ghost" className="w-full justify-start h-auto p-3" asChild>
            <a href={action.href}>
              <div className={`p-2 rounded-lg ${action.bgColor} mr-3`}>
                <action.icon className={`h-4 w-4 ${action.color}`} />
              </div>
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm text-muted-foreground">{action.description}</div>
              </div>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
