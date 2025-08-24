import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, UserPlus, FileText, Calendar, Award } from "lucide-react"

const recentActivities = [
  {
    id: "1",
    type: "student_added",
    title: "New student enrolled",
    description: "Alice Johnson joined Class 10-A",
    time: "2 hours ago",
    icon: UserPlus,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: "2",
    type: "exam_created",
    title: "Exam scheduled",
    description: "Mathematics Mid-term for Class 11-B",
    time: "4 hours ago",
    icon: FileText,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "3",
    type: "attendance_marked",
    title: "Attendance recorded",
    description: "Class 9-C attendance marked",
    time: "6 hours ago",
    icon: Calendar,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "4",
    type: "grade_entered",
    title: "Grades updated",
    description: "Physics test results published",
    time: "1 day ago",
    icon: Award,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0`}>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">{activity.title}</div>
              <div className="text-sm text-muted-foreground">{activity.description}</div>
              <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
