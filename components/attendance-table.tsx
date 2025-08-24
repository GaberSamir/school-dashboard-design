"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Phone } from "lucide-react"

interface AttendanceTableProps {
  period: "daily" | "weekly" | "monthly"
}

// Mock attendance data
const dailyAttendance = [
  {
    id: "1",
    name: "Alice Johnson",
    studentId: "STU001",
    class: "10-A",
    status: "Present",
    checkIn: "08:15 AM",
    checkOut: "03:30 PM",
    parentContact: "+1 (555) 987-6543",
  },
  {
    id: "2",
    name: "Bob Smith",
    studentId: "STU002",
    class: "11-B",
    status: "Absent",
    checkIn: "-",
    checkOut: "-",
    parentContact: "+1 (555) 876-5432",
  },
  {
    id: "3",
    name: "Carol Davis",
    studentId: "STU003",
    class: "9-C",
    status: "Late",
    checkIn: "08:45 AM",
    checkOut: "03:30 PM",
    parentContact: "+1 (555) 765-4321",
  },
  {
    id: "4",
    name: "David Wilson",
    studentId: "STU004",
    class: "12-A",
    status: "Present",
    checkIn: "08:10 AM",
    checkOut: "03:25 PM",
    parentContact: "+1 (555) 654-3210",
  },
]

const weeklyAttendance = [
  {
    id: "1",
    name: "Alice Johnson",
    studentId: "STU001",
    class: "10-A",
    daysPresent: 5,
    daysAbsent: 0,
    attendanceRate: "100%",
    status: "Excellent",
  },
  {
    id: "2",
    name: "Bob Smith",
    studentId: "STU002",
    class: "11-B",
    daysPresent: 3,
    daysAbsent: 2,
    attendanceRate: "60%",
    status: "Poor",
  },
  {
    id: "3",
    name: "Carol Davis",
    studentId: "STU003",
    class: "9-C",
    daysPresent: 4,
    daysAbsent: 1,
    attendanceRate: "80%",
    status: "Good",
  },
  {
    id: "4",
    name: "David Wilson",
    studentId: "STU004",
    class: "12-A",
    daysPresent: 5,
    daysAbsent: 0,
    attendanceRate: "100%",
    status: "Excellent",
  },
]

const monthlyAttendance = [
  {
    id: "1",
    name: "Alice Johnson",
    studentId: "STU001",
    class: "10-A",
    daysPresent: 22,
    daysAbsent: 1,
    attendanceRate: "95.7%",
    status: "Excellent",
  },
  {
    id: "2",
    name: "Bob Smith",
    studentId: "STU002",
    class: "11-B",
    daysPresent: 18,
    daysAbsent: 5,
    attendanceRate: "78.3%",
    status: "Average",
  },
  {
    id: "3",
    name: "Carol Davis",
    studentId: "STU003",
    class: "9-C",
    daysPresent: 20,
    daysAbsent: 3,
    attendanceRate: "87.0%",
    status: "Good",
  },
  {
    id: "4",
    name: "David Wilson",
    studentId: "STU004",
    class: "12-A",
    daysPresent: 23,
    daysAbsent: 0,
    attendanceRate: "100%",
    status: "Excellent",
  },
]

export function AttendanceTable({ period }: AttendanceTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
      case "Excellent":
        return "bg-secondary text-secondary-foreground"
      case "Absent":
      case "Poor":
        return "bg-destructive text-destructive-foreground"
      case "Late":
      case "Average":
        return "bg-chart-3 text-white"
      case "Good":
        return "bg-primary text-primary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const renderDailyTable = () => (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>Student</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Check In</TableHead>
          <TableHead>Check Out</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dailyAttendance.map((student) => (
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
                  <div className="text-sm text-muted-foreground">{student.studentId}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">{student.class}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
            </TableCell>
            <TableCell className="font-mono text-sm">{student.checkIn}</TableCell>
            <TableCell className="font-mono text-sm">{student.checkOut}</TableCell>
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
                    View History
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Status
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Parent
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  const renderWeeklyTable = () => (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>Student</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Days Present</TableHead>
          <TableHead>Days Absent</TableHead>
          <TableHead>Attendance Rate</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {weeklyAttendance.map((student) => (
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
                  <div className="text-sm text-muted-foreground">{student.studentId}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">{student.class}</TableCell>
            <TableCell className="font-medium text-secondary">{student.daysPresent}</TableCell>
            <TableCell className="font-medium text-destructive">{student.daysAbsent}</TableCell>
            <TableCell className="font-mono text-sm font-medium">{student.attendanceRate}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
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
                  <DropdownMenuItem>
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Parent
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  const renderMonthlyTable = () => (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>Student</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Days Present</TableHead>
          <TableHead>Days Absent</TableHead>
          <TableHead>Attendance Rate</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {monthlyAttendance.map((student) => (
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
                  <div className="text-sm text-muted-foreground">{student.studentId}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">{student.class}</TableCell>
            <TableCell className="font-medium text-secondary">{student.daysPresent}</TableCell>
            <TableCell className="font-medium text-destructive">{student.daysAbsent}</TableCell>
            <TableCell className="font-mono text-sm font-medium">{student.attendanceRate}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
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
                  <DropdownMenuItem>
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Parent
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  return (
    <div className="rounded-md border border-border bg-card">
      {period === "daily" && renderDailyTable()}
      {period === "weekly" && renderWeeklyTable()}
      {period === "monthly" && renderMonthlyTable()}
    </div>
  )
}
