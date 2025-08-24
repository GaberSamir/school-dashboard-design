"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Mock data for grade analytics
const gradeDistribution = [
  { range: "90-100", count: 156, percentage: 12.5 },
  { range: "80-89", count: 312, percentage: 25.0 },
  { range: "70-79", count: 468, percentage: 37.5 },
  { range: "60-69", count: 234, percentage: 18.8 },
  { range: "50-59", count: 62, percentage: 5.0 },
  { range: "0-49", count: 15, percentage: 1.2 },
]

const subjectPerformance = [
  { subject: "Math", average: 8.7, students: 247 },
  { subject: "Physics", average: 8.2, students: 189 },
  { subject: "Chemistry", average: 8.5, students: 203 },
  { subject: "Biology", average: 8.9, students: 198 },
  { subject: "English", average: 8.1, students: 312 },
  { subject: "History", average: 8.3, students: 156 },
]

const monthlyTrends = [
  { month: "Sep", average: 8.2 },
  { month: "Oct", average: 8.4 },
  { month: "Nov", average: 8.3 },
  { month: "Dec", average: 8.6 },
  { month: "Jan", average: 8.5 },
  { month: "Feb", average: 8.7 },
  { month: "Mar", average: 8.8 },
]

export function GradeChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Grade Distribution</CardTitle>
          <CardDescription>Distribution of student grades across all subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: {
                label: "Students",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-chart-1)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subject Performance</CardTitle>
          <CardDescription>Average grades by subject</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              average: {
                label: "Average Grade",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis domain={[0, 10]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="average" fill="var(--color-chart-2)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Grade Trends</CardTitle>
          <CardDescription>Average grade trends over the academic year</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              average: {
                label: "Average Grade",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[7, 10]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="average" stroke="var(--color-chart-3)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
