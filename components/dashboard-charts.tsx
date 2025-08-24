"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
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

// Mock data for dashboard analytics
const enrollmentTrends = [
  { month: "Sep", students: 1180, teachers: 85 },
  { month: "Oct", students: 1205, teachers: 87 },
  { month: "Nov", students: 1220, teachers: 88 },
  { month: "Dec", students: 1235, teachers: 89 },
  { month: "Jan", students: 1247, teachers: 89 },
  { month: "Feb", students: 1250, teachers: 90 },
  { month: "Mar", students: 1247, teachers: 89 },
]

const performanceByGrade = [
  { grade: "9th", average: 8.5, students: 312 },
  { grade: "10th", average: 8.7, students: 298 },
  { grade: "11th", average: 8.3, students: 285 },
  { grade: "12th", average: 8.9, students: 352 },
]

const attendanceOverTime = [
  { week: "Week 1", rate: 94.2 },
  { week: "Week 2", rate: 93.8 },
  { week: "Week 3", rate: 95.1 },
  { week: "Week 4", rate: 94.6 },
  { week: "Week 5", rate: 95.3 },
  { week: "Week 6", rate: 94.9 },
]

const subjectDistribution = [
  { subject: "Mathematics", students: 1247, color: "hsl(var(--chart-1))" },
  { subject: "Science", students: 1180, color: "hsl(var(--chart-2))" },
  { subject: "English", students: 1247, color: "hsl(var(--chart-3))" },
  { subject: "History", students: 890, color: "hsl(var(--chart-4))" },
  { subject: "Arts", students: 650, color: "hsl(var(--chart-5))" },
]

const examResults = [
  { month: "Sep", passed: 95.2, failed: 4.8 },
  { month: "Oct", passed: 96.1, failed: 3.9 },
  { month: "Nov", passed: 94.8, failed: 5.2 },
  { month: "Dec", passed: 97.3, failed: 2.7 },
  { month: "Jan", passed: 95.9, failed: 4.1 },
  { month: "Feb", passed: 96.7, failed: 3.3 },
]

export function DashboardCharts() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Enrollment Trends</CardTitle>
                <CardDescription>Student and teacher growth over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    students: {
                      label: "Students",
                      color: "hsl(var(--chart-1))",
                    },
                    teachers: {
                      label: "Teachers",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={enrollmentTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="students"
                        stackId="1"
                        stroke="var(--color-students)"
                        fill="var(--color-students)"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="teachers"
                        stackId="2"
                        stroke="var(--color-teachers)"
                        fill="var(--color-teachers)"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exam Results Trends</CardTitle>
                <CardDescription>Pass/fail rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    passed: {
                      label: "Passed (%)",
                      color: "hsl(var(--chart-2))",
                    },
                    failed: {
                      label: "Failed (%)",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={examResults}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[0, 100]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="passed"
                        stroke="var(--color-passed)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-passed)" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="failed"
                        stroke="var(--color-failed)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-failed)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance by Grade</CardTitle>
              <CardDescription>Average grades and student count by grade level</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  average: {
                    label: "Average Grade",
                    color: "hsl(var(--chart-3))",
                  },
                  students: {
                    label: "Student Count",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceByGrade}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="grade" />
                    <YAxis yAxisId="left" orientation="left" domain={[0, 10]} />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="average" fill="var(--color-average)" />
                    <Bar yAxisId="right" dataKey="students" fill="var(--color-students)" opacity={0.6} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance Trends</CardTitle>
              <CardDescription>Attendance rates over the past 6 weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  rate: {
                    label: "Attendance Rate (%)",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={attendanceOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis domain={[90, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="rate"
                      stroke="var(--color-rate)"
                      fill="var(--color-rate)"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subject Enrollment Distribution</CardTitle>
              <CardDescription>Number of students enrolled in each subject</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  mathematics: {
                    label: "Mathematics",
                    color: "hsl(var(--chart-1))",
                  },
                  science: {
                    label: "Science",
                    color: "hsl(var(--chart-2))",
                  },
                  english: {
                    label: "English",
                    color: "hsl(var(--chart-3))",
                  },
                  history: {
                    label: "History",
                    color: "hsl(var(--chart-4))",
                  },
                  arts: {
                    label: "Arts",
                    color: "hsl(var(--chart-5))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={subjectDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      dataKey="students"
                      label={({ subject, students }) => `${subject}: ${students}`}
                    >
                      {subjectDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
