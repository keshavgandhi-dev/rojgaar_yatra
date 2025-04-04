import Link from "next/link"
import { CalendarIcon, CheckCircle2, Clock, FileText, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
        <p className="text-muted-foreground">View and track all your job applications</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6">
            {applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
          <div className="grid gap-6">
            {applications
              .filter((app) => app.status === "pending")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="shortlisted" className="mt-6">
          <div className="grid gap-6">
            {applications
              .filter((app) => app.status === "shortlisted")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="rejected" className="mt-6">
          <div className="grid gap-6">
            {applications
              .filter((app) => app.status === "rejected")
              .map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Application {
  id: number
  jobTitle: string
  department: string
  appliedDate: string
  status: "pending" | "shortlisted" | "rejected"
  nextSteps?: string
  interviewDate?: string
}

function ApplicationCard({ application }: { application: Application }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{application.jobTitle}</CardTitle>
            <CardDescription>{application.department}</CardDescription>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center text-sm">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span>Applied on {application.appliedDate}</span>
          </div>

          {application.status === "shortlisted" && application.interviewDate && (
            <div className="flex items-center text-sm text-green-600">
              <Clock className="mr-2 h-4 w-4" />
              <span>Interview scheduled on {application.interviewDate}</span>
            </div>
          )}

          {application.nextSteps && (
            <div className="mt-2 text-sm border-l-2 border-red-600 pl-3">
              <p className="font-medium">Next Steps:</p>
              <p>{application.nextSteps}</p>
            </div>
          )}

          <div className="flex justify-between items-center mt-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/applications/${application.id}`}>
                <FileText className="mr-2 h-4 w-4" />
                View Details
              </Link>
            </Button>

            {application.status === "pending" && (
              <Button variant="ghost" size="sm" className="text-red-600">
                Withdraw Application
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }: { status: Application["status"] }) {
  if (status === "pending") {
    return (
      <Badge variant="outline" className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        Under Review
      </Badge>
    )
  }

  if (status === "shortlisted") {
    return (
      <Badge className="bg-green-500 flex items-center gap-1">
        <CheckCircle2 className="h-3 w-3" />
        Shortlisted
      </Badge>
    )
  }

  return (
    <Badge variant="destructive" className="flex items-center gap-1">
      <XCircle className="h-3 w-3" />
      Not Selected
    </Badge>
  )
}

// Sample data
const applications: Application[] = [
  {
    id: 1,
    jobTitle: "UPSC Civil Services 2025",
    department: "Union Public Service Commission",
    appliedDate: "10 Feb 2025",
    status: "pending",
    nextSteps: "Your application is under initial screening. You will be notified about the prelims exam date soon.",
  },
  {
    id: 2,
    jobTitle: "SSC CGL 2025",
    department: "Staff Selection Commission",
    appliedDate: "15 Jan 2025",
    status: "shortlisted",
    interviewDate: "25 Mar 2025",
    nextSteps:
      "Congratulations! You have been shortlisted for the interview round. Please check your email for the interview details.",
  },
  {
    id: 3,
    jobTitle: "IBPS PO 2024",
    department: "Institute of Banking Personnel Selection",
    appliedDate: "05 Dec 2024",
    status: "rejected",
    nextSteps:
      "We regret to inform you that your application has not been selected for the next round. We encourage you to apply for future openings.",
  },
  {
    id: 4,
    jobTitle: "RRB NTPC 2024",
    department: "Railway Recruitment Board",
    appliedDate: "20 Nov 2024",
    status: "shortlisted",
    interviewDate: "15 Feb 2025",
    nextSteps:
      "You have been shortlisted for the document verification round. Please bring all original documents as mentioned in the email.",
  },
]

