import { DashboardLayout } from "@/components/dashboard-layout"
import { TeachersTable } from "@/components/teachers-table"
import { AddTeacherDialog } from "@/components/add-teacher-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Download, Calendar } from "lucide-react"

export default function TeachersPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Teachers</h1>
            <p className="text-muted-foreground">Manage teacher information and class schedules</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedules
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <AddTeacherDialog>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Teacher
              </Button>
            </AddTeacherDialog>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search teachers..." className="pl-10" />
          </div>
        </div>

        <TeachersTable />
      </div>
    </DashboardLayout>
  )
}
