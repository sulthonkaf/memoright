"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import CognitiveScoreChart from "@/components/doctor/cognitive-score-chart"
import DementiaCategoryChart from "@/components/doctor/dementia-category-chart"
import PatientHeatmap from "@/components/doctor/patient-heatmap"
import RecentAssessments from "@/components/doctor/recent-assessments"
import UpcomingAppointments from "@/components/doctor/upcoming-appointments"
import DecisionSupportSystem from "@/components/decision-support-system"
import PredictiveModel from "@/components/predictive-model"
import AIAssistant from "@/components/ai-assistant"
import Link from "next/link"
import { Users, Brain, Calendar, FileText, Activity } from "lucide-react"

export default function DoctorDashboard() {
  const [showWelcome, setShowWelcome] = useState(true)

  const patientData = {
    id: "P12345",
    age: 65,
    gender: "Female",
    cognitiveScores: [22, 23, 24, 24, 25],
    medicalHistory: ["Hypertension", "Type 2 Diabetes"],
  }

  return (
    <div className="container py-6 space-y-6">
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Smith!</h1>
          <p className="text-xl">Here's an overview of your patients and upcoming tasks.</p>
          <Button className="mt-4" onClick={() => setShowWelcome(false)}>
            Dismiss
          </Button>
        </motion.div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-blue-500" />
                Cognitive Score Overview
              </CardTitle>
              <CardDescription>Average MMSE scores across all patients</CardDescription>
            </CardHeader>
            <CardContent>
              <CognitiveScoreChart />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5 text-purple-500" />
                Dementia Risk Categories
              </CardTitle>
              <CardDescription>Distribution of patients across risk categories</CardDescription>
            </CardHeader>
            <CardContent>
              <DementiaCategoryChart />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-green-500" />
              Patient Cognitive Health Heatmap
            </CardTitle>
            <CardDescription>Overview of cognitive function across patient demographics</CardDescription>
          </CardHeader>
          <CardContent>
            <PatientHeatmap />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-blue-500" />
              AI-Powered Decision Support System
            </CardTitle>
            <CardDescription>Get AI assistance for diagnosis and treatment decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <DecisionSupportSystem patientData={patientData} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5 text-yellow-500" />
              Predictive Model for Cognitive Decline
            </CardTitle>
            <CardDescription>AI-driven predictions for patient cognitive health</CardDescription>
          </CardHeader>
          <CardContent>
            <PredictiveModel patientData={patientData} />
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-green-500" />
                Recent Assessments
              </CardTitle>
              <CardDescription>Latest patient MMSE test results</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentAssessments />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-purple-500" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your schedule for the next few days</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingAppointments />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="mr-2 h-5 w-5 text-blue-500" />
            AI Assistant
          </CardTitle>
          <CardDescription>Get help and answers to your medical queries</CardDescription>
        </CardHeader>
        <CardContent>
          <AIAssistant userType="doctor" />
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          asChild
        >
          <Link href="/doctor/patients">
            <Users className="mr-2 h-6 w-6" />
            View All Patients
          </Link>
        </Button>
      </div>
    </div>
  )
}

