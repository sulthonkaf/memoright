import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Activity, Calendar, TrendingUp } from "lucide-react"
import CognitiveScoreChart from "@/components/dashboard/cognitive-score-chart"
import UpcomingActivities from "@/components/dashboard/upcoming-activities"

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-turquoise-900">Welcome, John!</h2>
        <Image
          src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?auto=format&fit=crop&q=80&w=2036&ixlib=rb-4.0.3"
          alt="Patient Avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cognitive Score</CardTitle>
            <Brain className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85/100</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activities Completed</CardTitle>
            <Activity className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <Calendar className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 20</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Cognitive Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <CognitiveScoreChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <UpcomingActivities />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Brain Training Illustration"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-end">
        <Button>Start New Activity</Button>
      </div>
    </div>
  )
}

