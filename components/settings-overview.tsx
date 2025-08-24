import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Users, Shield, Database } from "lucide-react"

export function SettingsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">School Profile</CardTitle>
          <School className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">Active</div>
          <p className="text-xs text-muted-foreground">Profile configured</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">User Accounts</CardTitle>
          <Users className="h-4 w-4 text-chart-2" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-chart-2">1,247</div>
          <p className="text-xs text-muted-foreground">Total active users</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Security Status</CardTitle>
          <Shield className="h-4 w-4 text-chart-3" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-chart-3">Secure</div>
          <p className="text-xs text-muted-foreground">All systems protected</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Health</CardTitle>
          <Database className="h-4 w-4 text-chart-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-chart-4">98%</div>
          <p className="text-xs text-muted-foreground">Uptime this month</p>
        </CardContent>
      </Card>
    </div>
  )
}
