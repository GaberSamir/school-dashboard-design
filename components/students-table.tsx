"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Eye, Trash2 } from "lucide-react"
import { EditStudentDialog } from "@/components/edit-student-dialog"

// Mock student data
const students = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@school.edu",
    studentId: "STU001",
    grade: "10th Grade",
    class: "10-A",
    status: "Active",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    parentName: "Robert Johnson",
    parentPhone: "+1 (555) 987-6543",
    enrollmentDate: "2023-09-01",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@school.edu",
    studentId: "STU002",
    grade: "11th Grade",
    class: "11-B",
    status: "Active",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave, City, State 12345",
    parentName: "Sarah Smith",
    parentPhone: "+1 (555) 876-5432",
    enrollmentDate: "2022-09-01",
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol.davis@school.edu",
    studentId: "STU003",
    grade: "9th Grade",
    class: "9-C",
    status: "Inactive",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd, City, State 12345",
    parentName: "Michael Davis",
    parentPhone: "+1 (555) 765-4321",
    enrollmentDate: "2024-09-01",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david.wilson@school.edu",
    studentId: "STU004",
    grade: "12th Grade",
    class: "12-A",
    status: "Active",
    phone: "+1 (555) 456-7890",
    address: "321 Elm St, City, State 12345",
    parentName: "Jennifer Wilson",
    parentPhone: "+1 (555) 654-3210",
    enrollmentDate: "2021-09-01",
  },
]

export function StudentsTable() {
  const [selectedStudent, setSelectedStudent] = useState<(typeof students)[0] | null>(null)

  return (
    <div className="rounded-md border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead>Student</TableHead>
            <TableHead>Student ID</TableHead>
            <TableHead>Grade & Class</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id} className="hover:bg-muted/30">
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
                  <div>
                    <div className="font-medium text-foreground">{student.name}</div>
                    <div className="text-sm text-muted-foreground">{student.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-mono text-sm">{student.studentId}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{student.grade}</div>
                  <div className="text-sm text-muted-foreground">Class {student.class}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{student.phone}</div>
                  <div className="text-muted-foreground">{student.parentName}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={student.status === "Active" ? "default" : "secondary"}
                  className={student.status === "Active" ? "bg-secondary text-secondary-foreground" : ""}
                >
                  {student.status}
                </Badge>
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
                    <DropdownMenuItem onClick={() => setSelectedStudent(student)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Student
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

      {selectedStudent && (
        <EditStudentDialog
          student={selectedStudent}
          open={!!selectedStudent}
          onOpenChange={(open) => !open && setSelectedStudent(null)}
        />
      )}
    </div>
  )
}
