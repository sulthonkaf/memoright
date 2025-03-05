import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Brain, Calendar, TrendingUp } from "lucide-react"
import CognitiveScoreChart from "@/components/dashboard/cognitive-score-chart"
import PatientList from "@/components/dashboard/patient-list"

export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-turquoise-900">Doctor Dashboard</h2>
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Doctor Avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assessments Today</CardTitle>
            <Brain className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Cognitive Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76.5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Patient Cognitive Score Trends</CardTitle>
            <CardDescription>Average scores over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <CognitiveScoreChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Patients</CardTitle>
            <CardDescription>Patients with recent activity or assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <PatientList />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assessments">
        <TabsList>
          <TabsTrigger value="assessments">Recent Assessments</TabsTrigger>
          <TabsTrigger value="appointments">Upcoming Appointments</TabsTrigger>
          <TabsTrigger value="reports">Patient Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="assessments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Assessments</CardTitle>
              <CardDescription>Latest cognitive assessments performed</CardDescription>
            </CardHeader>
            <CardContent>{/* Add recent assessments content here */}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appointments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Scheduled patient consultations</CardDescription>
            </CardHeader>
            <CardContent>{/* Add upcoming appointments content here */}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Patient Reports</CardTitle>
              <CardDescription>Recent reports and analyses</CardDescription>
            </CardHeader>
            <CardContent>{/* Add patient reports content here */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="Doctor-Patient Consultation"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Generate Report</Button>
        <Button>Start New Assessment</Button>
      </div>
    </div>
  )
}

