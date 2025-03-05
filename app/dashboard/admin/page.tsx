"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SystemHealth from "@/components/dashboard/system-health"

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-turquoise-900">Admin Dashboard</h2>
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3"
          alt="Admin Avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      <SystemHealth />

      <Card>
        <CardHeader>
          <CardTitle>User Statistics</CardTitle>
          <CardDescription>Overview of system users and activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Active Users</h3>
              <p className="text-3xl font-bold">987</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">New Users (This Week)</h3>
              <p className="text-3xl font-bold">56</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Data Storage Used</h3>
              <p className="text-3xl font-bold">78%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="security">Security Logs</TabsTrigger>
          <TabsTrigger value="performance">System Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage system users and permissions</CardDescription>
            </CardHeader>
            <CardContent>{/* Add user management content here */}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Logs</CardTitle>
              <CardDescription>Recent security events and alerts</CardDescription>
            </CardHeader>
            <CardContent>{/* Add security logs content here */}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Performance metrics and optimizations</CardDescription>
            </CardHeader>
            <CardContent>{/* Add system performance content here */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="System Administration"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Generate System Report</Button>
        <Button>Manage User Accounts</Button>
      </div>
    </div>
  )
}

