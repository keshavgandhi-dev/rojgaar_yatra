import Link from "next/link"
import { ArrowLeft, CalendarIcon, CheckCircle2, Clock, Download, FileText, MapPin, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

export default function ApplicationDetailsPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the application details based on the ID
  const applicationId = Number.parseInt(params.id)
  const application = applications.find((app) => app.id === applicationId)

  if (!application) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Application Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The application you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/dashboard/applications">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Applications
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/dashboard/applications"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Applications
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">{application.jobTitle}</h1>
          <p className="text-muted-foreground">{application.department}</p>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>Track your application progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Application Progress</span>
                    <span className="font-medium">
                      {application.status === "pending" ? "25%" : application.status === "shortlisted" ? "75%" : "100%"}
                    </span>
                  </div>
                  <Progress
                    value={application.status === "pending" ? 25 : application.status === "shortlisted" ? 75 : 100}
                    className={application.status === "rejected" ? "bg-red-200" : ""}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div
                      className={`rounded-full p-2 ${application.status !== "rejected" ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"}`}
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Application Submitted</h3>
                      <p className="text-sm text-muted-foreground">
                        Your application was submitted on {application.appliedDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`rounded-full p-2 ${
                        application.status === "shortlisted" || application.status === "rejected"
                          ? application.status === "rejected"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {application.status === "rejected" ? (
                        <XCircle className="h-5 w-5" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Initial Screening</h3>
                      <p className="text-sm text-muted-foreground">
                        {application.status === "pending"
                          ? "Your application is being reviewed by the hiring team"
                          : application.status === "rejected"
                            ? "Your application did not meet the requirements for this position"
                            : "Your application has passed the initial screening"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`rounded-full p-2 ${application.status === "shortlisted" ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"}`}
                    >
                      {application.status === "shortlisted" ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <Clock className="h-5 w-5" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Shortlisted</h3>
                      <p className="text-sm text-muted-foreground">
                        {application.status === "shortlisted"
                          ? `You have been shortlisted for the next round. Interview scheduled on ${application.interviewDate}`
                          : "This stage is pending"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-full p-2 bg-muted text-muted-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Final Selection</h3>
                      <p className="text-sm text-muted-foreground">This stage is pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{application.nextSteps}</p>

              {application.status === "shortlisted" && application.interviewDate && (
                <div className="mt-4 p-4 border rounded-lg bg-muted/50">
                  <h3 className="font-medium mb-2">Interview Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                      <span>Date: {application.interviewDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 opacity-70" />
                      <span>Time: 10:00 AM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 opacity-70" />
                      <span>Location: Online (Zoom)</span>
                    </div>
                  </div>
                  <Button className="mt-4" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Interview Letter
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Application ID</h3>
                  <p>APP{application.id.toString().padStart(6, "0")}</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Applied On</h3>
                  <p>{application.appliedDate}</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Job Type</h3>
                  <p>Full Time</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Documents Submitted</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      Resume.pdf
                    </li>
                    <li className="flex items-center text-sm">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      Cover Letter.pdf
                    </li>
                    <li className="flex items-center text-sm">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      Educational Certificates.pdf
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions about your application, please contact our support team.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
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
interface Application {
  id: number
  jobTitle: string
  department: string
  appliedDate: string
  status: "pending" | "shortlisted" | "rejected"
  nextSteps?: string
  interviewDate?: string
}

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

