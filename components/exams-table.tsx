"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Eye, Trash2, Users, FileText } from "lucide-react"
import { GradeEntryDialog } from "@/components/grade-entry-dialog"

// Mock exam data
const exams = [
  {
    id: "1",
    title: "Mathematics Mid-term",
    subject: "Mathematics",
    class: "10-A",
    date: "2024-03-15",
    duration: "2 hours",
    totalMarks: 100,
    status: "Completed",
    studentsCount: 32,
    gradedCount: 32,
    teacher: "Dr. Sarah Wilson",
    type: "Mid-term",
  },
  {
    id: "2",
    title: "Physics Chapter 5 Test",
    subject: "Physics",
    class: "11-B",
    date: "2024-03-20",
    duration: "1.5 hours",
    totalMarks: 50,
    status: "Grading",
    studentsCount: 28,
    gradedCount: 15,
    teacher: "Dr. Sarah Wilson",
    type: "Chapter Test",
  },
  {
    id: "3",
    title: "English Literature Essay",
    subject: "English",
    class: "12-A",
    date: "2024-03-25",
    duration: "3 hours",
    totalMarks: 100,
    status: "Scheduled",
    studentsCount: 25,
    gradedCount: 0,
    teacher: "Mr. John Davis",
    type: "Essay",
  },
  {
    id: "4",
    title: "Chemistry Lab Practical",
    subject: "Chemistry",
    class: "11-A",
    date: "2024-03-18",
    duration: "2 hours",
    totalMarks: 75,
    status: "Completed",
    studentsCount: 30,
    gradedCount: 30,
    teacher: "Dr. Michael Chen",
    type: "Practical",
  },
]

export function ExamsTable() {
  const [selectedExam, setSelectedExam] = useState<(typeof exams)[0] | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-secondary text-secondary-foreground"
      case "Grading":
        return "bg-chart-3 text-white"
      case "Scheduled":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="rounded-md border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead>Exam Details</TableHead>
            <TableHead>Subject & Class</TableHead>
            <TableHead>Date & Duration</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id} className="hover:bg-muted/30">
              <TableCell>
                <div>
                  <div className="font-medium text-foreground">{exam.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {exam.type} • {exam.totalMarks} marks
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{exam.subject}</div>
                  <div className="text-sm text-muted-foreground">Class {exam.class}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{new Date(exam.date).toLocaleDateString()}</div>
                  <div className="text-sm text-muted-foreground">{exam.duration}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">
                    {exam.gradedCount}/{exam.studentsCount} graded
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.round((exam.gradedCount / exam.studentsCount) * 100)}% complete
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(exam.status)}>{exam.status}</Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedExam(exam)}>
                      <Users className="h-4 w-4 mr-2" />
                      Enter Grades
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="h-4 w-4 mr-2" />
                      Grade Report
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Exam
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedExam && (
        <GradeEntryDialog
          exam={selectedExam}
          open={!!selectedExam}
          onOpenChange={(open) => !open && setSelectedExam(null)}
        />
      )}
    </div>
  )
}
