import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileEdit } from "lucide-react"
import Link from "next/link"

export default function JobViewPage({ params }: { params: { id: string } }) {
  // This would normally fetch the job data from an API
  const job = {
    id: params.id,
    title: "Bank PO",
    department: "Banking",
    location: "All India",
    postedDate: "2023-04-01",
    lastDate: "2023-05-15",
    status: "Active",
    applications: "1,245",
    description: "Join as a Probationary Officer in leading banks across India...",
    requirements: [
      "Bachelor's degree with minimum 60%",
      "Age limit: 21-30 years",
      "Indian citizenship",
    ],
    salary: "₹40,000 - ₹60,000 per month",
    vacancies: 1500,
  }

  return (
    <div className="px-3">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" className="hover:bg-muted" asChild>
          <Link href="/admin/jobs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">{job.title}</h1>
          <p className="text-sm text-muted-foreground">Job ID: {job.id}</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" asChild>
          <Link href={`/admin/jobs/${job.id}/edit`}>
            <FileEdit className="mr-2 h-4 w-4" />
            Edit Job
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">{job.description}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Requirements</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {job.requirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={job.status === "Active" ? "default" : "destructive"}>
                {job.status}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">Department</p>
                <p className="text-sm text-muted-foreground">{job.department}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Salary</p>
                <p className="text-sm text-muted-foreground">{job.salary}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Total Vacancies</p>
                <p className="text-sm text-muted-foreground">{job.vacancies}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Applications</p>
                <p className="text-sm text-muted-foreground">{job.applications} received</p>
              </div>
              <div>
                <p className="text-sm font-medium">Posted Date</p>
                <p className="text-sm text-muted-foreground">{job.postedDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Date</p>
                <p className="text-sm text-muted-foreground">{job.lastDate}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 