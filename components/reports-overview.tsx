import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, TrendingUp, Users, Calendar } from "lucide-react"

export function ReportsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
          <FileText className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">247</div>
          <p className="text-xs text-muted-foreground">Generated this month</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Academic Reports</CardTitle>
          <TrendingUp className="h-4 w-4 text-chart-2" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-chart-2">156</div>
          <p className="text-xs text-muted-foreground">Grade & performance reports</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Attendance Reports</CardTitle>
          <Calendar className="h-4 w-4 text-chart-3" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-chart-3">91</div>
          <p className="text-xs text-muted-foreground">Daily & monthly summaries</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Custom Reports</CardTitle>
          <Users className="h-4 w-4 text-chart-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-chart-4">23</div>
          <p className="text-xs text-muted-foreground">User-generated reports</p>
        </CardContent>
      </Card>
    </div>
  )
}
