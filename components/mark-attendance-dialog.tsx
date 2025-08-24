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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface MarkAttendanceDialogProps {
  children: React.ReactNode
}

// Mock student data for attendance marking
const students = [
  { id: "1", name: "Alice Johnson", studentId: "STU001", status: "present" },
  { id: "2", name: "Bob Smith", studentId: "STU002", status: "absent" },
  { id: "3", name: "Carol Davis", studentId: "STU003", status: "late" },
  { id: "4", name: "David Wilson", studentId: "STU004", status: "present" },
  { id: "5", name: "Emma Brown", studentId: "STU005", status: "present" },
]

const classes = ["9-A", "9-B", "9-C", "10-A", "10-B", "10-C", "11-A", "11-B", "11-C", "12-A", "12-B", "12-C"]

export function MarkAttendanceDialog({ children }: MarkAttendanceDialogProps) {
  const [open, setOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState("")
  const [attendance, setAttendance] = useState<{ [key: string]: string }>(
    students.reduce((acc, student) => ({ ...acc, [student.id]: student.status }), {}),
  )

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle attendance submission here
    console.log("Submitting attendance:", attendance)
    setOpen(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-secondary text-secondary-foreground"
      case "absent":
        return "bg-destructive text-destructive-foreground"
      case "late":
        return "bg-chart-3 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Mark Attendance</DialogTitle>
          <DialogDescription>
            Select a class and mark attendance for today ({new Date().toLocaleDateString()})
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="class">Select Class</Label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    Class {cls}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedClass && (
            <div className="rounded-md border border-border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Student</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Attendance Status</TableHead>
                    <TableHead>Current Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
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
                        <Select
                          value={attendance[student.id]}
                          onValueChange={(value) => handleAttendanceChange(student.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="present">Present</SelectItem>
                            <SelectItem value="absent">Absent</SelectItem>
                            <SelectItem value="late">Late</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(attendance[student.id])}>
                          {attendance[student.id]?.charAt(0).toUpperCase() + attendance[student.id]?.slice(1)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!selectedClass}>
              Save Attendance
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
