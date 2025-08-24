import { DashboardLayout } from "@/components/dashboard-layout"
import { GradesOverview } from "@/components/grades-overview"
import { ExamsTable } from "@/components/exams-table"
import { GradeChart } from "@/components/grade-chart"
import { CreateExamDialog } from "@/components/create-exam-dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, FileText, BarChart3 } from "lucide-react"

export default function GradesPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Grades & Exams</h1>
            <p className="text-muted-foreground">Manage exams, enter grades, and view performance analytics</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Reports
            </Button>
            <CreateExamDialog>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Exam
              </Button>
            </CreateExamDialog>
          </div>
        </div>

        <GradesOverview />

        <Tabs defaultValue="exams" className="space-y-6">
          <TabsList>
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="grades">Grade Entry</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="exams" className="space-y-6">
            <ExamsTable />
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <div className="text-center py-12 text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select an exam from the Exams tab to enter grades</p>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <GradeChart />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
