"use client"

import { useState, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, DollarSign, Clock, Building2, CheckCircle, XCircle, Clock as ClockIcon } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type ApplicationStatus = "Applied" | "Interview" | "Rejected"

interface Application {
  id: string
  job: {
    id: string
    title: string
    company: string
    location: string
    salary: string
  }
  status: ApplicationStatus
  appliedAt: string
  lastUpdated: string
  nextSteps: string
}

const statusIcons: Record<ApplicationStatus, ReactNode> = {
  Applied: <ClockIcon className="h-4 w-4" />,
  Interview: <CheckCircle className="h-4 w-4" />,
  Rejected: <XCircle className="h-4 w-4" />,
}

const statusColors: Record<ApplicationStatus, string> = {
  Applied: "bg-yellow-100 text-yellow-800",
  Interview: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
}

// Mock data - replace with actual API calls
const mockApplications = [
  {
    id: "1",
    job: {
      id: "1",
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Bangalore",
      salary: "₹8L - ₹12L",
    },
    status: "Applied",
    appliedAt: "2024-03-15",
    lastUpdated: "2024-03-15",
    nextSteps: "Awaiting response from employer",
  },
  {
    id: "2",
    job: {
      id: "2",
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Hyderabad",
      salary: "₹10L - ₹15L",
    },
    status: "Interview",
    appliedAt: "2024-03-10",
    lastUpdated: "2024-03-18",
    nextSteps: "Technical interview scheduled for March 25",
  },
  {
    id: "3",
    job: {
      id: "3",
      title: "Product Manager",
      company: "Product Co",
      location: "Mumbai",
      salary: "₹15L - ₹20L",
    },
    status: "Rejected",
    appliedAt: "2024-03-05",
    lastUpdated: "2024-03-12",
    nextSteps: "Application was not selected",
  },
]

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredApplications = mockApplications.filter((app) => {
    if (activeTab === "all") return true
    return app.status.toLowerCase() === activeTab
  })

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
          <TabsTrigger value="interview">Interview</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid gap-4">
            {filteredApplications.map((application) => (
              <Card key={application.id} className="hover:bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{application.job.title}</h3>
                        <Badge
                          className={`flex items-center gap-1 ${statusColors[application.status as ApplicationStatus]}`}
                        >
                          {statusIcons[application.status as ApplicationStatus]}
                          {application.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {application.job.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {application.job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {application.job.salary}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>Applied on: {application.appliedAt}</p>
                        <p>Last updated: {application.lastUpdated}</p>
                        <p>Next steps: {application.nextSteps}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">View Details</Button>
                      <Button>Withdraw</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

