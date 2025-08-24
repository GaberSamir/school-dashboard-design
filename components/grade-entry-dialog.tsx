"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Exam {
  id: string
  title: string
  subject: string
  class: string
  totalMarks: number
  studentsCount: number
  gradedCount: number
}

interface GradeEntryDialogProps {
  exam: Exam
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Mock student data for grade entry
const students = [
  { id: "1", name: "Alice Johnson", studentId: "STU001", currentGrade: 85, status: "graded" },
  { id: "2", name: "Bob Smith", studentId: "STU002", currentGrade: null, status: "pending" },
  { id: "3", name: "Carol Davis", studentId: "STU003", currentGrade: 92, status: "graded" },
  { id: "4", name: "David Wilson", studentId: "STU004", currentGrade: 78, status: "graded" },
  { id: "5", name: "Emma Brown", studentId: "STU005", currentGrade: null, status: "pending" },
]

export function GradeEntryDialog({ exam, open, onOpenChange }: GradeEntryDialogProps) {
  const [grades, setGrades] = useState<{ [key: string]: number | null }>(
    students.reduce(
      (acc, student) => ({
        ...acc,
        [student.id]: student.currentGrade,
      }),
      {},
    ),
  )

  const handleGradeChange = (studentId: string, grade: string) => {
    const numericGrade = grade === "" ? null : Number(grade)
    setGrades((prev) => ({ ...prev, [studentId]: numericGrade }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle grade submission here
    console.log("Submitting grades:", grades)
    onOpenChange(false)
  }

  const getGradeColor = (grade: number | null, totalMarks: number) => {
    if (grade === null) return "text-muted-foreground"
    const percentage = (grade / totalMarks) * 100
    if (percentage >= 90) return "text-secondary"
    if (percentage >= 80) return "text-primary"
    if (percentage >= 70) return "text-chart-3"
    return "text-destructive"
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Enter Grades - {exam.title}</DialogTitle>
          <DialogDescription>
            {exam.subject} • Class {exam.class} • Total Marks: {exam.totalMarks}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Student</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Grade (out of {exam.totalMarks})</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => {
                  const grade = grades[student.id]
                  const percentage = grade ? Math.round((grade / exam.totalMarks) * 100) : null
                  return (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/abstract-geometric-shapes.png" />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{student.studentId}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          max={exam.totalMarks}
                          value={grade || ""}
                          onChange={(e) => handleGradeChange(student.id, e.target.value)}
                          placeholder="Enter grade"
                          className="w-24"
                        />
                      </TableCell>
                      <TableCell>
                        <span className={`font-medium ${getGradeColor(grade, exam.totalMarks)}`}>
                          {percentage ? `${percentage}%` : "-"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={grade !== null ? "default" : "secondary"}
                          className={grade !== null ? "bg-secondary text-secondary-foreground" : ""}
                        >
                          {grade !== null ? "Graded" : "Pending"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Grades</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
