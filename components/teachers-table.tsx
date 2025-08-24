"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Eye, Trash2, Calendar } from "lucide-react"
import { EditTeacherDialog } from "@/components/edit-teacher-dialog"

// Mock teacher data
const teachers = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@school.edu",
    teacherId: "TCH001",
    subjects: ["Mathematics", "Physics"],
    department: "Science",
    qualification: "Ph.D. in Mathematics",
    experience: "12 years",
    phone: "+1 (555) 123-4567",
    address: "123 Faculty St, City, State 12345",
    joinDate: "2012-08-15",
    status: "Active",
    classes: ["10-A Math", "11-B Physics", "12-A Advanced Math"],
  },
  {
    id: "2",
    name: "Mr. John Davis",
    email: "john.davis@school.edu",
    teacherId: "TCH002",
    subjects: ["English Literature", "Creative Writing"],
    department: "Languages",
    qualification: "M.A. in English Literature",
    experience: "8 years",
    phone: "+1 (555) 234-5678",
    address: "456 Teacher Ave, City, State 12345",
    joinDate: "2016-09-01",
    status: "Active",
    classes: ["9-A English", "10-C Literature", "11-A Writing"],
  },
  {
    id: "3",
    name: "Ms. Emily Rodriguez",
    email: "emily.rodriguez@school.edu",
    teacherId: "TCH003",
    subjects: ["History", "Social Studies"],
    department: "Social Sciences",
    qualification: "M.A. in History",
    experience: "6 years",
    phone: "+1 (555) 345-6789",
    address: "789 Education Blvd, City, State 12345",
    joinDate: "2018-08-20",
    status: "Active",
    classes: ["9-B History", "10-A Social Studies"],
  },
  {
    id: "4",
    name: "Dr. Michael Chen",
    email: "michael.chen@school.edu",
    teacherId: "TCH004",
    subjects: ["Chemistry", "Biology"],
    department: "Science",
    qualification: "Ph.D. in Chemistry",
    experience: "15 years",
    phone: "+1 (555) 456-7890",
    address: "321 Science Dr, City, State 12345",
    joinDate: "2009-07-01",
    status: "On Leave",
    classes: ["11-A Chemistry", "12-B Biology"],
  },
]

export function TeachersTable() {
  const [selectedTeacher, setSelectedTeacher] = useState<(typeof teachers)[0] | null>(null)

  return (
    <div className="rounded-md border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead>Teacher</TableHead>
            <TableHead>Teacher ID</TableHead>
            <TableHead>Department & Subjects</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id} className="hover:bg-muted/30">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/abstract-geometric-shapes.png" />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {teacher.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{teacher.name}</div>
                    <div className="text-sm text-muted-foreground">{teacher.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-mono text-sm">{teacher.teacherId}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{teacher.department}</div>
                  <div className="text-sm text-muted-foreground">{teacher.subjects.join(", ")}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{teacher.experience}</div>
                  <div className="text-sm text-muted-foreground">{teacher.qualification}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div className="font-medium">{teacher.classes.length} classes</div>
                  <div className="text-muted-foreground">
                    {teacher.classes.slice(0, 2).join(", ")}
                    {teacher.classes.length > 2 && "..."}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={teacher.status === "Active" ? "default" : "secondary"}
                  className={teacher.status === "Active" ? "bg-secondary text-secondary-foreground" : ""}
                >
                  {teacher.status}
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
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="h-4 w-4 mr-2" />
                      View Schedule
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedTeacher(teacher)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Teacher
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

      {selectedTeacher && (
        <EditTeacherDialog
          teacher={selectedTeacher}
          open={!!selectedTeacher}
          onOpenChange={(open) => !open && setSelectedTeacher(null)}
        />
      )}
    </div>
  )
}
