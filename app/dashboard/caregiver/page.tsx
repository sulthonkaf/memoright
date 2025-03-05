import Image from "next/image"
import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, Bell } from "lucide-react"
import CognitiveScoreChart from "@/components/dashboard/cognitive-score-chart"
import PatientList from "@/components/dashboard/patient-list"

export default function CaregiverDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-turquoise-900">Caregiver Dashboard</h2>
        <Image
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3"
          alt="Caregiver Avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patients Under Care</CardTitle>
            <Users className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks for Today</CardTitle>
            <Bell className="h-4 w-4 text-turquoise-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Patient Overview</CardTitle>
            <CardDescription>Quick summary of your patients</CardDescription>
          </CardHeader>
          <CardContent>
            <PatientList />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Cognitive Scores</CardTitle>
            <CardDescription>Trend across all patients</CardDescription>
          </CardHeader>
          <CardContent>
            <CognitiveScoreChart />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activities">
        <TabsList>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="activities" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Patient Activities</CardTitle>
              <CardDescription>Activities in the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>{/* Add recent activities content here */}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reminders" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reminders</CardTitle>
              <CardDescription>Medication and therapy reminders</CardDescription>
            </CardHeader>
            <CardContent>{/* Add reminders content here */}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Latest Reports</CardTitle>
              <CardDescription>Recent cognitive health reports</CardDescription>
            </CardHeader>
            <CardContent>{/* Add reports content here */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2078&ixlib=rb-4.0.3"
          alt="Caregiver and Patient Interaction"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Schedule Appointment</Button>
        <Button>Add New Patient</Button>
      </div>
    </div>
  )
}

