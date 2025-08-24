import { DashboardLayout } from "@/components/dashboard-layout"
import { AttendanceOverview } from "@/components/attendance-overview"
import { AttendanceTable } from "@/components/attendance-table"
import { AttendanceChart } from "@/components/attendance-chart"
import { MarkAttendanceDialog } from "@/components/mark-attendance-dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Download } from "lucide-react"

export default function AttendancePage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
            <p className="text-muted-foreground">
              Track and manage student attendance with daily, weekly, and monthly insights
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="today">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <MarkAttendanceDialog>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Mark Attendance
              </Button>
            </MarkAttendanceDialog>
          </div>
        </div>

        <AttendanceOverview />

        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <AttendanceTable period="daily" />
          </TabsContent>

          <TabsContent value="weekly" className="space-y-6">
            <AttendanceTable period="weekly" />
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <AttendanceTable period="monthly" />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AttendanceChart />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
