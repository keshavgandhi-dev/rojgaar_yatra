"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Download, FileText, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const jobId = Number.parseInt(resolvedParams.id)

  // Mock job data based on ID
  const job = {
    title:
      jobId === 1
        ? "UPSC Civil Services 2025"
        : jobId === 2
          ? "SSC CGL 2025"
          : jobId === 3
            ? "IBPS PO 2025"
            : "Government Job Position",
    department:
      jobId === 1
        ? "Union Public Service Commission"
        : jobId === 2
          ? "Staff Selection Commission"
          : jobId === 3
            ? "Institute of Banking Personnel Selection"
            : "Government Department",
    location: "All India",
    vacancies: jobId === 1 ? 1200 : jobId === 2 ? 5000 : jobId === 3 ? 3500 : 2000,
    lastDate: jobId === 1 ? "15 Apr 2025" : jobId === 2 ? "30 Mar 2025" : jobId === 3 ? "20 May 2025" : "30 Apr 2025",
    applicationFee:
      jobId === 1
        ? "₹100 (General), ₹0 (SC/ST/PwD/Women)"
        : jobId === 2
          ? "₹100 (General/OBC), ₹0 (SC/ST/PwD/Women)"
          : jobId === 3
            ? "₹175 (General/OBC), ₹175 (SC/ST/PwD)"
            : "₹100 (General), ₹0 (Reserved Categories)",
    ageLimit: jobId === 1 ? "21-32 years" : jobId === 2 ? "18-32 years" : jobId === 3 ? "20-30 years" : "18-35 years",
    qualification:
      jobId === 1
        ? "Graduate from any recognized University"
        : jobId === 2
          ? "Bachelor's Degree from a recognized University"
          : jobId === 3
            ? "Graduate in any discipline from a recognized University"
            : "Graduate from recognized University",
    selectionProcess:
      jobId === 1
        ? "Prelims, Mains, Interview"
        : jobId === 2
          ? "Tier-I, Tier-II, Tier-III, Document Verification"
          : jobId === 3
            ? "Prelims, Mains, Interview"
            : "Written Test, Interview",
    salary:
      jobId === 1
        ? "₹56,100 - ₹2,50,000 (Level 10-14)"
        : jobId === 2
          ? "₹47,600 - ₹1,51,100 (Level 8)"
          : jobId === 3
            ? "₹23,700 - ₹42,020"
            : "As per Government norms",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href="/jobs" className="text-muted-foreground hover:text-foreground">
                Jobs
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="font-medium truncate">{job.title}</span>
            </div>
          </div>
        </div>

        {/* Job Header */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <Link href="/jobs" className="inline-flex items-center text-sm font-medium text-red-600 mb-2">
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
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 md:mt-0">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, '-')}/apply`}>
                    Apply Now
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Notification
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
                    <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                    <TabsTrigger value="vacancies">Vacancies</TabsTrigger>
                    <TabsTrigger value="apply">How to Apply</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Job Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">About {job.department}</h3>
                          <p className="text-muted-foreground">
                            {job.department} is a prestigious government organization responsible for recruiting
                            candidates for various government positions. The{" "}
                            {job.title.split(" ").slice(0, -1).join(" ")} is one of the most sought-after government
                            examinations in India.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Important Dates</h3>
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Online Application Start Date</TableCell>
                                <TableCell>15 Feb 2025</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Last Date to Apply</TableCell>
                                <TableCell>{job.lastDate}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Last Date for Fee Payment</TableCell>
                                <TableCell>{job.lastDate}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Admit Card Release Date</TableCell>
                                <TableCell>15 May 2025 (Tentative)</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Exam Date</TableCell>
                                <TableCell>05 Jun 2025 (Tentative)</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Application Fee</h3>
                          <p className="text-muted-foreground mb-2">{job.applicationFee}</p>
                          <p className="text-sm text-muted-foreground">
                            Payment can be made through Debit Card, Credit Card, Net Banking, or UPI.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="eligibility" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Eligibility Criteria</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Nationality</h3>
                          <p className="text-muted-foreground">Candidate must be a citizen of India.</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Age Limit</h3>
                          <p className="text-muted-foreground mb-2">{job.ageLimit}</p>
                          <p className="text-sm text-muted-foreground">Age relaxation as per government norms:</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                            <li>SC/ST: 5 years</li>
                            <li>OBC: 3 years</li>
                            <li>PwD: 10 years</li>
                            <li>Ex-Servicemen: As per rules</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Educational Qualification</h3>
                          <p className="text-muted-foreground">{job.qualification}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Physical Fitness</h3>
                          <p className="text-muted-foreground">
                            Candidates should be physically and mentally fit according to the standards prescribed for
                            the post.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="vacancies" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Vacancy Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Total Vacancies: {job.vacancies}</h3>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Category</TableHead>
                                <TableHead>Vacancies</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>General</TableCell>
                                <TableCell>{Math.floor(job.vacancies * 0.4)}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>OBC</TableCell>
                                <TableCell>{Math.floor(job.vacancies * 0.27)}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>SC</TableCell>
                                <TableCell>{Math.floor(job.vacancies * 0.15)}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>ST</TableCell>
                                <TableCell>{Math.floor(job.vacancies * 0.075)}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>EWS</TableCell>
                                <TableCell>{Math.floor(job.vacancies * 0.1)}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>PwD</TableCell>
                                <TableCell>{Math.floor(job.vacancies * 0.04)}</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Salary Structure</h3>
                          <p className="text-muted-foreground mb-2">{job.salary}</p>
                          <p className="text-sm text-muted-foreground">
                            Additional benefits include Dearness Allowance, House Rent Allowance, Transport Allowance,
                            and other benefits as per government norms.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="apply" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Application Process</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 font-bold">
                              1
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Registration</h3>
                              <p className="text-muted-foreground">
                                Visit the official website of {job.department} and register with your basic details.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 font-bold">
                              2
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Fill Application Form</h3>
                              <p className="text-muted-foreground">
                                Complete the application form with all required personal, educational, and professional
                                details.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 font-bold">
                              3
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Upload Documents</h3>
                              <p className="text-muted-foreground">
                                Upload scanned copies of your photograph, signature, and required certificates.
                              </p>
                              <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                                <li>Photograph: 3.5 cm x 4.5 cm (20-300 KB)</li>
                                <li>Signature: 3.5 cm x 1.5 cm (10-150 KB)</li>
                                <li>Documents: PDF format (Max 2 MB each)</li>
                              </ul>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 font-bold">
                              4
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Pay Application Fee</h3>
                              <p className="text-muted-foreground">
                                Pay the application fee through online payment methods (Debit Card, Credit Card, Net
                                Banking, UPI).
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 font-bold">
                              5
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">Submit & Print</h3>
                              <p className="text-muted-foreground">
                                Submit your application and take a printout of the confirmation page for future
                                reference.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                          <h3 className="font-semibold text-lg mb-2 flex items-center">
                            <FileText className="mr-2 h-5 w-5 text-red-600" />
                            Important Instructions
                          </h3>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Ensure all details are correct before final submission.</li>
                            <li>Keep your registration ID and password secure.</li>
                            <li>Save a copy of your application for future reference.</li>
                            <li>Check the official website regularly for updates.</li>
                          </ul>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-red-600 hover:bg-red-700">Apply Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lg:w-[300px] space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Selection Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {job.selectionProcess.split(", ").map((stage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="text-sm">{stage}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Important Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Official Notification
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Syllabus
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Previous Year Papers
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Similar Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link
                        href="/jobs/1"
                        className="block p-3 border rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-colors"
                      >
                        <h4 className="font-medium">UPSC Civil Services 2025</h4>
                        <p className="text-xs text-muted-foreground">Last Date: 15 Apr 2025</p>
                      </Link>
                      <Link
                        href="/jobs/2"
                        className="block p-3 border rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-colors"
                      >
                        <h4 className="font-medium">SSC CGL 2025</h4>
                        <p className="text-xs text-muted-foreground">Last Date: 30 Mar 2025</p>
                      </Link>
                      <Link
                        href="/jobs/3"
                        className="block p-3 border rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-colors"
                      >
                        <h4 className="font-medium">IBPS PO 2025</h4>
                        <p className="text-xs text-muted-foreground">Last Date: 20 May 2025</p>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Jobs */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">You May Also Be Interested In</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[4, 5, 6].map((id) => (
                <Card
                  key={id}
                  className="overflow-hidden transition-all hover:shadow-md border-muted hover:border-red-200 dark:hover:border-red-900"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 hover:text-red-600 transition-colors">
                      <Link href={`/jobs/${id}`}>
                        {id === 4 ? "RRB NTPC 2025" : id === 5 ? "SBI PO 2025" : "UPSC CAPF 2025"}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {id === 4
                        ? "Railway Recruitment Board"
                        : id === 5
                          ? "State Bank of India"
                          : "Union Public Service Commission"}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                      <div>
                        <span className="font-medium">Vacancies:</span> {id === 4 ? "10000" : id === 5 ? "2000" : "800"}
                      </div>
                      <div>
                        <span className="font-medium">Last Date:</span>{" "}
                        {id === 4 ? "10 Apr" : id === 5 ? "25 Mar" : "05 May"} 2025
                      </div>
                    </div>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href={`/jobs/${id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

