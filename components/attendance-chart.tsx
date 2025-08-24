"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data for attendance analytics
const dailyAttendance = [
  { day: "Mon", present: 1180, absent: 67, rate: 94.6 },
  { day: "Tue", present: 1175, absent: 72, rate: 94.2 },
  { day: "Wed", present: 1190, absent: 57, rate: 95.4 },
  { day: "Thu", present: 1165, absent: 82, rate: 93.4 },
  { day: "Fri", present: 1200, absent: 47, rate: 96.2 },
]

const monthlyTrends = [
  { month: "Sep", rate: 92.5 },
  { month: "Oct", rate: 93.2 },
  { month: "Nov", rate: 94.1 },
  { month: "Dec", rate: 93.8 },
  { month: "Jan", rate: 94.5 },
  { month: "Feb", rate: 94.2 },
  { month: "Mar", rate: 95.1 },
]

const classAttendance = [
  { class: "9-A", rate: 96.2 },
  { class: "9-B", rate: 94.8 },
  { class: "9-C", rate: 93.5 },
  { class: "10-A", rate: 95.1 },
  { class: "10-B", rate: 94.3 },
  { class: "10-C", rate: 92.7 },
  { class: "11-A", rate: 94.9 },
  { class: "11-B", rate: 93.8 },
  { class: "12-A", rate: 96.5 },
  { class: "12-B", rate: 95.2 },
]

const attendanceDistribution = [
  { name: "Present", value: 94.2, color: "hsl(var(--chart-2))" },
  { name: "Absent", value: 4.8, color: "hsl(var(--chart-4))" },
  { name: "Late", value: 1.0, color: "hsl(var(--chart-3))" },
]

export function AttendanceChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Daily Attendance This Week</CardTitle>
          <CardDescription>Present vs absent students by day</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              present: {
                label: "Present",
                color: "hsl(var(--chart-2))",
              },
              absent: {
                label: "Absent",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyAttendance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="present" fill="var(--color-present)" />
                <Bar dataKey="absent" fill="var(--color-absent)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Attendance Trends</CardTitle>
          <CardDescription>Attendance rate trends over the academic year</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: "Attendance Rate",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[90, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Class-wise Attendance</CardTitle>
          <CardDescription>Attendance rates by class</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: "Attendance Rate",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classAttendance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="class" />
                <YAxis domain={[90, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="rate" fill="var(--color-rate)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Distribution</CardTitle>
          <CardDescription>Overall attendance status breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              present: {
                label: "Present",
                color: "hsl(var(--chart-2))",
              },
              absent: {
                label: "Absent",
                color: "hsl(var(--chart-4))",
              },
              late: {
                label: "Late",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {attendanceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
