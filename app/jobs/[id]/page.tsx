"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Download, FileText, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SiteHeader } from "@/components/mobile/layout/site-header"

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
      <SiteHeader />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-2 sm:py-4 border-b">
          <div className="container px-3 sm:px-4 md:px-6">
            <div className="flex items-center text-xs sm:text-sm">
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
        <section className="py-4 sm:py-6 md:py-8 bg-muted/20">
          <div className="container px-3 sm:px-4 md:px-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <Link href="/jobs" className="inline-flex items-center text-xs sm:text-sm font-medium text-red-600 mb-1 sm:mb-2">
                  <ArrowLeft className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  Back to Jobs
                </Link>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{job.title}</h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">{job.department}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  <Badge variant="outline" className="flex items-center gap-1 text-xs sm:text-sm">
                    <Calendar className="h-3 w-3" />
                    Last Date: {job.lastDate}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-xs sm:text-sm">
                    <Users className="h-3 w-3" />
                    Vacancies: {job.vacancies}
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">Location: {job.location}</Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-sm sm:text-base">
                  <Link href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, '-')}/apply`}>
                    Apply Now
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 text-sm sm:text-base">
                  <Download className="h-4 w-4" />
                  Download Notification
                </Button>
                <Button variant="ghost" size="icon" className="self-end sm:self-auto">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-4 sm:py-6 md:py-8">
          <div className="container px-3 sm:px-4 md:px-6">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex-1">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full flex overflow-x-auto gap-0 sm:gap-0 mb-4 sm:mb-6 bg-white dark:bg-muted/20 p-0 rounded-xl shadow-sm dark:shadow-none border-0">
                    <TabsTrigger 
                      value="overview" 
                      className="flex-1 min-w-[80px] text-xs sm:text-sm px-3 py-2 rounded-l-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all hover:bg-gray-50 dark:hover:bg-muted/30 border-r border-gray-100 dark:border-muted/50"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger 
                      value="eligibility" 
                      className="flex-1 min-w-[80px] text-xs sm:text-sm px-3 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all hover:bg-gray-50 dark:hover:bg-muted/30 border-r border-gray-100 dark:border-muted/50"
                    >
                      Eligibility
                    </TabsTrigger>
                    <TabsTrigger 
                      value="vacancies" 
                      className="flex-1 min-w-[80px] text-xs sm:text-sm px-3 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all hover:bg-gray-50 dark:hover:bg-muted/30 border-r border-gray-100 dark:border-muted/50"
                    >
                      Vacancies
                    </TabsTrigger>
                    <TabsTrigger 
                      value="apply" 
                      className="flex-1 min-w-[80px] text-xs sm:text-sm px-3 py-2 rounded-r-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all hover:bg-gray-50 dark:hover:bg-muted/30"
                    >
                      How to Apply
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-0">
                    <Card className="border-0 shadow-none">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-base sm:text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Job Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="px-0 space-y-4 sm:space-y-6">
                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">About {job.department}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
                            {job.department} is a prestigious government organization responsible for recruiting
                            candidates for various government positions. The{" "}
                            {job.title.split(" ").slice(0, -1).join(" ")} is one of the most sought-after government
                            examinations in India.
                          </p>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-3 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Important Dates</h3>
                          <div className="overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableHead className="text-xs sm:text-sm font-semibold">Event</TableHead>
                                  <TableHead className="text-xs sm:text-sm font-semibold">Date</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">Application Start</TableCell>
                                  <TableCell className="text-xs sm:text-sm">01 Mar 2025</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">Last Date to Apply</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{job.lastDate}</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">Admit Card</TableCell>
                                  <TableCell className="text-xs sm:text-sm">15 May 2025</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell className="text-xs sm:text-sm">Exam Date</TableCell>
                                  <TableCell className="text-xs sm:text-sm">01 Jun 2025</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Application Fee</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mb-2">{job.applicationFee}</p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">
                            Payment can be made through Debit Card, Credit Card, Net Banking, or UPI.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="eligibility" className="mt-0">
                    <Card className="border-0 shadow-none">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-base sm:text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Eligibility Criteria</CardTitle>
                      </CardHeader>
                      <CardContent className="px-0 space-y-4 sm:space-y-6">
                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Nationality</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">Candidate must be a citizen of India.</p>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Age Limit</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mb-2">{job.ageLimit}</p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mb-2">Age relaxation as per government norms:</p>
                          <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-muted-foreground space-y-1">
                            <li>SC/ST: 5 years</li>
                            <li>OBC: 3 years</li>
                            <li>PwD: 10 years</li>
                            <li>Ex-Servicemen: As per rules</li>
                          </ul>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Educational Qualification</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">{job.qualification}</p>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Physical Fitness</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">
                            Candidates should be physically and mentally fit according to the standards prescribed for
                            the post.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="vacancies" className="mt-0">
                    <Card className="border-0 shadow-none">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-base sm:text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Vacancy Details</CardTitle>
                      </CardHeader>
                      <CardContent className="px-0 space-y-4 sm:space-y-6">
                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-3 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Total Vacancies: {job.vacancies}</h3>
                          <div className="overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableHead className="text-xs sm:text-sm font-semibold">Category</TableHead>
                                  <TableHead className="text-xs sm:text-sm font-semibold">Vacancies</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">General</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{Math.floor(job.vacancies * 0.4)}</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">OBC</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{Math.floor(job.vacancies * 0.27)}</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">SC</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{Math.floor(job.vacancies * 0.15)}</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">ST</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{Math.floor(job.vacancies * 0.075)}</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-gray-100 dark:border-muted/50">
                                  <TableCell className="text-xs sm:text-sm">EWS</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{Math.floor(job.vacancies * 0.1)}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell className="text-xs sm:text-sm">PwD</TableCell>
                                  <TableCell className="text-xs sm:text-sm">{Math.floor(job.vacancies * 0.04)}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Salary Structure</h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mb-2">{job.salary}</p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground">
                            Additional benefits include Dearness Allowance, House Rent Allowance, Transport Allowance,
                            and other benefits as per government norms.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="apply" className="mt-0">
                    <Card className="border-0 shadow-none">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-base sm:text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Application Process</CardTitle>
                      </CardHeader>
                      <CardContent className="px-0 space-y-4 sm:space-y-6">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                                1
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Registration</h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mt-1">
                                  Visit the official website of {job.department} and register with your basic details.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                                2
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Fill Application Form</h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mt-1">
                                  Complete the application form with all required personal, educational, and professional
                                  details.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                                3
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Upload Documents</h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mt-1">
                                  Upload scanned copies of your photograph, signature, and required certificates.
                                </p>
                                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mt-2 space-y-1">
                                  <li>Photograph: 3.5 cm x 4.5 cm (20-300 KB)</li>
                                  <li>Signature: 3.5 cm x 1.5 cm (10-150 KB)</li>
                                  <li>Documents: PDF format (Max 2 MB each)</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                                4
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Pay Application Fee</h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mt-1">
                                  Pay the application fee through online payment methods (Debit Card, Credit Card, Net
                                  Banking, UPI).
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                            <div className="flex items-start gap-3">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                                5
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm sm:text-base bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Submit & Print</h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-muted-foreground mt-1">
                                  Submit your application and take a printout of the confirmation page for future
                                  reference.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-muted/30 p-4 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-muted/50">
                          <h3 className="font-semibold text-sm sm:text-base mb-2 flex items-center bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                            <FileText className="mr-2 h-4 w-4" />
                            Important Instructions
                          </h3>
                          <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-muted-foreground space-y-1">
                            <li>Ensure all details are correct before final submission.</li>
                            <li>Keep your registration ID and password secure.</li>
                            <li>Save a copy of your application for future reference.</li>
                            <li>Check the official website regularly for updates.</li>
                          </ul>
                        </div>

                        <div className="flex justify-center">
                          <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs sm:text-sm px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Selection Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      {job.selectionProcess.split(", ").map((stage, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200 text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="text-xs sm:text-sm">{stage}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Important Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      <Button variant="outline" className="w-full justify-start text-xs sm:text-sm">
                        <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Official Notification
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs sm:text-sm">
                        <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Syllabus
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs sm:text-sm">
                        <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Previous Year Papers
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">Similar Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      <Link
                        href="/jobs/1"
                        className="block p-2 sm:p-3 border rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-colors"
                      >
                        <h4 className="font-medium text-sm sm:text-base">UPSC Civil Services 2025</h4>
                        <p className="text-xs text-muted-foreground">Last Date: 15 Apr 2025</p>
                      </Link>
                      <Link
                        href="/jobs/2"
                        className="block p-2 sm:p-3 border rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-colors"
                      >
                        <h4 className="font-medium text-sm sm:text-base">SSC CGL 2025</h4>
                        <p className="text-xs text-muted-foreground">Last Date: 30 Mar 2025</p>
                      </Link>
                      <Link
                        href="/jobs/3"
                        className="block p-2 sm:p-3 border rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-colors"
                      >
                        <h4 className="font-medium text-sm sm:text-base">IBPS PO 2025</h4>
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
        <section className="py-4 sm:py-6 md:py-8 bg-muted/20">
          <div className="container px-3 sm:px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">You May Also Be Interested In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[4, 5, 6].map((id) => (
                <Card
                  key={id}
                  className="overflow-hidden transition-all hover:shadow-md border-muted hover:border-red-200 dark:hover:border-red-900"
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 hover:text-red-600 transition-colors">
                      <Link href={`/jobs/${id}`}>
                        {id === 4 ? "RRB NTPC 2025" : id === 5 ? "SBI PO 2025" : "UPSC CAPF 2025"}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      {id === 4
                        ? "Railway Recruitment Board"
                        : id === 5
                          ? "State Bank of India"
                          : "Union Public Service Commission"}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm mb-3 sm:mb-4">
                      <div>
                        <span className="font-medium">Vacancies:</span> {id === 4 ? "10000" : id === 5 ? "2000" : "800"}
                      </div>
                      <div>
                        <span className="font-medium">Last Date:</span>{" "}
                        {id === 4 ? "10 Apr" : id === 5 ? "25 Mar" : "05 May"} 2025
                      </div>
                    </div>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-xs sm:text-sm">
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

