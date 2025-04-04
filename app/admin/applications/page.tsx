import Link from "next/link"
import { Filter, Search, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminApplicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manage Applications</h1>
        <p className="text-muted-foreground">Review and process job applications</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search applications..." className="pl-8 w-full md:w-[300px]" />
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Applicant</th>
                      <th className="text-left py-3 px-4">Job Position</th>
                      <th className="text-left py-3 px-4">Applied Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 1,
                        name: "Rahul Sharma",
                        email: "rahul.sharma@example.com",
                        job: "UPSC Civil Services 2025",
                        department: "Union Public Service Commission",
                        date: "10 Feb 2025",
                        status: "pending",
                      },
                      {
                        id: 2,
                        name: "Priya Patel",
                        email: "priya.patel@example.com",
                        job: "SSC CGL 2025",
                        department: "Staff Selection Commission",
                        date: "15 Jan 2025",
                        status: "shortlisted",
                      },
                      {
                        id: 3,
                        name: "Amit Kumar",
                        email: "amit.kumar@example.com",
                        job: "IBPS PO 2025",
                        department: "Institute of Banking Personnel Selection",
                        date: "05 Dec 2024",
                        status: "rejected",
                      },
                      {
                        id: 4,
                        name: "Neha Singh",
                        email: "neha.singh@example.com",
                        job: "RRB NTPC 2024",
                        department: "Railway Recruitment Board",
                        date: "20 Nov 2024",
                        status: "shortlisted",
                      },
                      {
                        id: 5,
                        name: "Vikram Mehta",
                        email: "vikram.mehta@example.com",
                        job: "SBI PO 2024",
                        department: "State Bank of India",
                        date: "15 Oct 2024",
                        status: "pending",
                      },
                    ].map((application) => (
                      <tr key={application.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{application.name}</p>
                            <p className="text-sm text-muted-foreground">{application.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p>{application.job}</p>
                            <p className="text-sm text-muted-foreground">{application.department}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">{application.date}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              application.status === "pending"
                                ? "bg-yellow-500"
                                : application.status === "shortlisted"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                            }
                          >
                            {application.status === "pending"
                              ? "Pending"
                              : application.status === "shortlisted"
                                ? "Shortlisted"
                                : "Rejected"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/admin/applications/${application.id}`}>View</Link>
                            </Button>
                            {application.status === "pending" && (
                              <>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Shortlist
                                </Button>
                                <Button size="sm" variant="destructive">
                                  Reject
                                </Button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Applicant</th>
                      <th className="text-left py-3 px-4">Job Position</th>
                      <th className="text-left py-3 px-4">Applied Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 1,
                        name: "Rahul Sharma",
                        email: "rahul.sharma@example.com",
                        job: "UPSC Civil Services 2025",
                        department: "Union Public Service Commission",
                        date: "10 Feb 2025",
                        status: "pending",
                      },
                      {
                        id: 5,
                        name: "Vikram Mehta",
                        email: "vikram.mehta@example.com",
                        job: "SBI PO 2024",
                        department: "State Bank of India",
                        date: "15 Oct 2024",
                        status: "pending",
                      },
                    ].map((application) => (
                      <tr key={application.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{application.name}</p>
                            <p className="text-sm text-muted-foreground">{application.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p>{application.job}</p>
                            <p className="text-sm text-muted-foreground">{application.department}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">{application.date}</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-yellow-500">Pending</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/admin/applications/${application.id}`}>View</Link>
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Shortlist
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shortlisted" className="mt-6">
          {/* Similar table structure for shortlisted applications */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Applicant</th>
                      <th className="text-left py-3 px-4">Job Position</th>
                      <th className="text-left py-3 px-4">Applied Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 2,
                        name: "Priya Patel",
                        email: "priya.patel@example.com",
                        job: "SSC CGL 2025",
                        department: "Staff Selection Commission",
                        date: "15 Jan 2025",
                        status: "shortlisted",
                      },
                      {
                        id: 4,
                        name: "Neha Singh",
                        email: "neha.singh@example.com",
                        job: "RRB NTPC 2024",
                        department: "Railway Recruitment Board",
                        date: "20 Nov 2024",
                        status: "shortlisted",
                      },
                    ].map((application) => (
                      <tr key={application.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{application.name}</p>
                            <p className="text-sm text-muted-foreground">{application.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p>{application.job}</p>
                            <p className="text-sm text-muted-foreground">{application.department}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">{application.date}</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-green-500">Shortlisted</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/admin/applications/${application.id}`}>View</Link>
                            </Button>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              Schedule Interview
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rejected" className="mt-6">
          {/* Similar table structure for rejected applications */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Applicant</th>
                      <th className="text-left py-3 px-4">Job Position</th>
                      <th className="text-left py-3 px-4">Applied Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 3,
                        name: "Amit Kumar",
                        email: "amit.kumar@example.com",
                        job: "IBPS PO 2025",
                        department: "Institute of Banking Personnel Selection",
                        date: "05 Dec 2024",
                        status: "rejected",
                      },
                    ].map((application) => (
                      <tr key={application.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{application.name}</p>
                            <p className="text-sm text-muted-foreground">{application.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p>{application.job}</p>
                            <p className="text-sm text-muted-foreground">{application.department}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">{application.date}</td>
                        <td className="py-3 px-4">
                          <Badge variant="destructive">Rejected</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/admin/applications/${application.id}`}>View</Link>
                            </Button>
                            <Button size="sm" variant="outline">
                              Reconsider
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

