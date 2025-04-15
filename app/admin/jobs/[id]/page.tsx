import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileEdit, Calendar, Users, FileText, Share2 } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
    qualification: "Graduate from any recognized University",
    experience: "No prior experience required",
    ageLimit: "21-30 years",
    selectionProcess: "Prelims, Mains, Interview",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Job Header */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <Link href="/admin/jobs" className="inline-flex items-center text-sm font-medium text-red-600 mb-2">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Jobs
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                <p className="text-muted-foreground mt-1">{job.department}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Last Date: {job.lastDate}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Vacancies: {job.vacancies}
                  </Badge>
                  <Badge variant="outline">Location: {job.location}</Badge>
                  <Badge variant={job.status === "Active" ? "default" : "destructive"}>
                    {job.status}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 md:mt-0">
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href={`/admin/jobs/${job.id}/edit`}>
                    <FileEdit className="mr-2 h-4 w-4" />
                    Edit Job
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Download Details
                </Button>
                <Button variant="ghost" size="icon" className="self-end">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <Tabs defaultValue="overview">
                  <TabsList className="w-full grid grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="requirements">Requirements</TabsTrigger>
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Job Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Description</h3>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Important Dates</h3>
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Posted Date</TableCell>
                                <TableCell>{job.postedDate}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Last Date to Apply</TableCell>
                                <TableCell>{job.lastDate}</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Salary</h3>
                          <p className="text-muted-foreground">{job.salary}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="requirements" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Requirements</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Educational Qualification</h3>
                          <p className="text-muted-foreground">{job.qualification}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Experience</h3>
                          <p className="text-muted-foreground">{job.experience}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Age Limit</h3>
                          <p className="text-muted-foreground">{job.ageLimit}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Selection Process</h3>
                          <p className="text-muted-foreground">{job.selectionProcess}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="applications" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Applications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">Total Applications</h3>
                              <p className="text-muted-foreground">{job.applications} received</p>
                            </div>
                            <Button variant="outline">View All Applications</Button>
                          </div>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Status</TableHead>
                                <TableHead>Count</TableHead>
                                <TableHead>Percentage</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Pending</TableCell>
                                <TableCell>500</TableCell>
                                <TableCell>40%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Under Review</TableCell>
                                <TableCell>300</TableCell>
                                <TableCell>24%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Shortlisted</TableCell>
                                <TableCell>200</TableCell>
                                <TableCell>16%</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Rejected</TableCell>
                                <TableCell>245</TableCell>
                                <TableCell>20%</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="settings" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Job Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Status</h3>
                          <div className="flex items-center gap-4">
                            <Badge variant={job.status === "Active" ? "default" : "destructive"}>
                              {job.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              Change Status
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Vacancies</h3>
                          <p className="text-muted-foreground">{job.vacancies} positions available</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Danger Zone</h3>
                          <div className="space-y-2">
                            <Button variant="destructive" className="w-full">
                              Delete Job Posting
                            </Button>
                            <p className="text-sm text-muted-foreground">
                              Once you delete a job posting, there is no going back. Please be certain.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lg:w-[300px] space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Applications</p>
                        <p className="text-2xl font-bold">{job.applications}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Vacancies</p>
                        <p className="text-2xl font-bold">{job.vacancies}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Days Left</p>
                        <p className="text-2xl font-bold">30</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Applications
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Export Job Details
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        View Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 