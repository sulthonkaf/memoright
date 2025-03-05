"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, ChevronRight, Activity, TrendingUp, Clock, Bell } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Link from "next/link"

// Mock data for the cognitive trends chart
const cognitiveData = [
  { date: "2024-01", mmse: 28, attention: 85, memory: 75 },
  { date: "2024-02", mmse: 29, attention: 88, memory: 78 },
  { date: "2024-03", mmse: 28, attention: 86, memory: 80 },
  { date: "2024-04", mmse: 30, attention: 90, memory: 85 },
]

const recentObservations = [
  {
    id: 1,
    caregiver: "Sarah (Caregiver)",
    avatar: "/placeholder.svg?height=32&width=32",
    observation: "Showed improvement in memory exercises today. Completed all tasks with minimal assistance.",
    time: "2 hours ago",
  },
  {
    id: 2,
    caregiver: "Sarah (Caregiver)",
    avatar: "/placeholder.svg?height=32&width=32",
    observation: "Showed increased engagement during social activities. Mood remains positive.",
    time: "1 day ago",
  },
  {
    id: 3,
    caregiver: "Sarah (Caregiver)",
    avatar: "/placeholder.svg?height=32&width=32",
    observation: "Completed daily routine independently. Remember to schedule next doctor's appointment.",
    time: "2 days ago",
  },
]

const upcomingTasks = [
  {
    id: 1,
    title: "Daily Brain Training",
    description: "Complete today's exercises",
    icon: Brain,
    time: "Today at 10:00 AM",
  },
  {
    id: 2,
    title: "Cognitive Assessment",
    description: "Scheduled for tomorrow",
    icon: Activity,
    time: "Tomorrow at 2:00 PM",
  },
  {
    id: 3,
    title: "Read Health Tips",
    description: "New article available",
    icon: ChevronRight,
    time: "Today",
  },
]

export default function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container py-8 px-4">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
            <p className="text-muted-foreground mt-1">Here's an overview of your cognitive health journey</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Last MMSE Score</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28/30</div>
              <p className="text-xs text-muted-foreground">Completed one week ago</p>
              <Progress value={93} className="mt-3" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Brain Gym Sessions</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Sessions completed this month</p>
              <Progress value={75} className="mt-3" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">Of scheduled activities completed</p>
              <Progress value={89} className="mt-3" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Left Column - Charts and Activity */}
          <div className="space-y-6 lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle>Cognitive Health Trends</CardTitle>
                <CardDescription>Your MMSE scores and brain activity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cognitiveData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="mmse" stroke="#8884d8" name="MMSE Score" />
                      <Line type="monotone" dataKey="attention" stroke="#82ca9d" name="Attention" />
                      <Line type="monotone" dataKey="memory" stroke="#ffc658" name="Memory" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Observations</CardTitle>
                <CardDescription>Latest notes from your caregiver</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentObservations.map((observation) => (
                    <div key={observation.id} className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={observation.avatar} alt={observation.caregiver} />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">{observation.caregiver}</p>
                          <span className="text-xs text-muted-foreground">{observation.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{observation.observation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Start your daily activities</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Button asChild>
                  <Link href="/cognitive-test">Take MMSE Test</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/brain-gym">Start Brain Gym</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/progress">View Reports</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Calendar and Tasks */}
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Exercise Schedule</CardTitle>
                <CardDescription>Plan your brain training</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Your scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-primary/10">
                        <task.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{task.title}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">{task.time}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{task.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/schedule">View Full Schedule</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

