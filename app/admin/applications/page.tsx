"use client"

import Link from "next/link"
import { Filter, Search, Download, Calendar, User, Briefcase, Mail, Clock, FileText, XCircle, MapPin, Phone, MoreVertical, RefreshCw, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination"

interface Application {
  id: string
  name: string
  email: string
  phone: string
  jobTitle: string
  department: string
  location: string
  appliedOn: string
  status: "pending" | "shortlisted" | "rejected"
  progress: number
}

const statusColors = {
  pending: "bg-yellow-500",
  shortlisted: "bg-green-500",
  rejected: "bg-red-500",
}

const applications: Application[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    jobTitle: "UPSC Civil Services 2025",
    department: "Union Public Service Commission",
    location: "All India",
    appliedOn: "10 Feb 2025",
    status: "pending",
    progress: 30,
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    phone: "+91 98765 43211",
    jobTitle: "SSC CGL 2025",
    department: "Staff Selection Commission",
    location: "All India",
    appliedOn: "15 Jan 2025",
    status: "shortlisted",
    progress: 60,
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    phone: "+91 98765 43212",
    jobTitle: "IBPS PO 2025",
    department: "Institute of Banking Personnel Selection",
    location: "All India",
    appliedOn: "05 Dec 2024",
    status: "rejected",
    progress: 100,
  },
]

export default function AdminApplicationsPage() {
  return (
    <div className="px-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
          <h1 className="text-2xl font-bold tracking-tight">Applications</h1>
          <p className="text-sm text-muted-foreground">Manage and monitor job applications</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Tabs defaultValue="all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
            <TabsTrigger value="pending" className="text-sm">Pending</TabsTrigger>
            <TabsTrigger value="shortlisted" className="text-sm">Shortlisted</TabsTrigger>
            <TabsTrigger value="rejected" className="text-sm">Rejected</TabsTrigger>
          </TabsList>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search applications..." className="pl-8 text-sm" />
        </div>
      </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 text-sm font-medium">Applicant</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Job Details</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Contact</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Applied On</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Progress</th>
                      <th className="text-right py-3 px-4 text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application) => (
                      <tr key={application.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-sm">
                                {application.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{application.name}</div>
                              <div className="text-xs text-muted-foreground">ID: {application.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-sm">{application.jobTitle}</div>
                            <div className="text-xs text-muted-foreground">{application.department}</div>
                            <div className="text-xs text-muted-foreground">{application.location}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="text-sm">{application.email}</div>
                            <div className="text-xs text-muted-foreground">{application.phone}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">{application.appliedOn}</td>
                        <td className="py-3 px-4">
                          <Badge className={`text-xs ${statusColors[application.status as keyof typeof statusColors]}`}>
                            {application.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-[60px] h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-green-500"
                                style={{ width: `${application.progress}%` }}
                              />
                            </div>
                            <span className="text-xs">{application.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-sm">
                              <DropdownMenuLabel className="text-sm">Actions</DropdownMenuLabel>
                              <DropdownMenuItem asChild className="text-sm">
                                <Link href={`/admin/applications/${application.id}`}>View Details</Link>
                              </DropdownMenuItem>
                            {application.status === "pending" && (
                              <>
                                  <DropdownMenuItem className="text-sm text-green-600">Shortlist</DropdownMenuItem>
                                  <DropdownMenuItem className="text-sm text-red-600">Reject</DropdownMenuItem>
                              </>
                            )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-sm text-destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing 1-8 of 1,250 applications</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="text-sm" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="text-sm">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-sm">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-sm">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-sm" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="text-sm" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Pending Applications</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show only pending applications.</p>
                          </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shortlisted">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Shortlisted Applications</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show only shortlisted applications.</p>
                          </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Rejected Applications</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show only rejected applications.</p>
                          </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Application Statistics</CardTitle>
            <CardDescription className="text-sm">Overview of application data</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Applications</span>
                <span className="font-bold text-sm">1,250</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pending</span>
                <span className="font-bold text-sm">500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Shortlisted</span>
                <span className="font-bold text-sm">300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Rejected</span>
                <span className="font-bold text-sm">450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">New (This Month)</span>
                <span className="font-bold text-sm">124</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Recent Applications</CardTitle>
            <CardDescription className="text-sm">Latest job applications received</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {applications.slice(0, 5).map((application) => (
                <div key={application.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-sm">
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{application.name}</div>
                      <div className="text-xs text-muted-foreground">{application.appliedOn}</div>
                    </div>
                  </div>
                  <Badge className={`text-xs ${statusColors[application.status as keyof typeof statusColors]}`}>
                    {application.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription className="text-sm">Common application management tasks</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm">
                <Download className="mr-2 h-4 w-4" />
                Export All Applications
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <Mail className="mr-2 h-4 w-4" />
                Send Bulk Email
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <FileText className="mr-2 h-4 w-4" />
                Generate Reports
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <Users className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

