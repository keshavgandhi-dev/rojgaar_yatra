import Link from "next/link"
import {
  BarChart,
  Bell,
  Calendar,
  FileText,
  Home,
  LineChart,
  PieChart,
  Plus,
  Settings,
  Users,
  Briefcase,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/admin" className="flex items-center">
              <span className="text-xl font-bold text-red-600">Rojgaar</span>
              <span className="text-xl font-bold">Yatra</span>
              <span className="text-xl font-bold text-red-600">.com</span>
              <Badge className="ml-2" variant="outline">
                Admin
              </Badge>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
            </Button>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@rojgaaryatra.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/30">
          <div className="flex flex-col gap-1 p-4">
            <Link href="/admin" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/jobs"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Briefcase className="h-4 w-4" />
              Manage Jobs
            </Link>
            <Link
              href="/admin/results"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Upload Results
            </Link>
            <Link
              href="/admin/admit-cards"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Calendar className="h-4 w-4" />
              Admit Cards
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Users className="h-4 w-4" />
              Manage Users
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                      <p className="text-3xl font-bold">1,250,000</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">12%</span>
                    <span className="ml-1 text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                      <p className="text-3xl font-bold">1,543</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">8%</span>
                    <span className="ml-1 text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Applications</p>
                      <p className="text-3xl font-bold">245,678</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">24%</span>
                    <span className="ml-1 text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                      <p className="text-3xl font-bold">₹12.5M</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                    <span className="text-red-500 font-medium">3%</span>
                    <span className="ml-1 text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-7">
              <Card className="md:col-span-4">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Applications Overview</CardTitle>
                    <CardDescription>Daily application submissions</CardDescription>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-lg">
                    <BarChart className="h-16 w-16 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Applications Chart</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>User Distribution</CardTitle>
                  <CardDescription>User categories and demographics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-lg">
                    <PieChart className="h-16 w-16 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">User Distribution Chart</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="recent-jobs">
                <TabsList className="mb-4">
                  <TabsTrigger value="recent-jobs">Recent Jobs</TabsTrigger>
                  <TabsTrigger value="recent-applications">Recent Applications</TabsTrigger>
                  <TabsTrigger value="recent-users">Recent Users</TabsTrigger>
                </TabsList>

                <TabsContent value="recent-jobs">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Recently Added Jobs</CardTitle>
                        <CardDescription>Latest job postings on the platform</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input type="search" placeholder="Search jobs..." className="pl-8 w-[200px]" />
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700" asChild>
                          <Link href="/admin/jobs/new">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Job
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium">Job Title</th>
                                <th className="text-left py-3 px-4 font-medium">Department</th>
                                <th className="text-left py-3 px-4 font-medium">Vacancies</th>
                                <th className="text-left py-3 px-4 font-medium">Last Date</th>
                                <th className="text-left py-3 px-4 font-medium">Status</th>
                                <th className="text-right py-3 px-4 font-medium">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="border-b">
                                  <td className="py-3 px-4">
                                    {
                                      [
                                        "UPSC Civil Services 2025",
                                        "SSC CGL 2025",
                                        "IBPS PO 2025",
                                        "RRB NTPC 2025",
                                        "SBI PO 2025",
                                      ][i - 1]
                                    }
                                  </td>
                                  <td className="py-3 px-4 text-muted-foreground">
                                    {["UPSC", "SSC", "IBPS", "RRB", "SBI"][i - 1]}
                                  </td>
                                  <td className="py-3 px-4">{[1200, 5000, 3500, 10000, 2000][i - 1]}</td>
                                  <td className="py-3 px-4">
                                    {["15 Apr", "30 Mar", "20 May", "10 Apr", "25 Mar"][i - 1]} 2025
                                  </td>
                                  <td className="py-3 px-4">
                                    <Badge className={i % 2 === 0 ? "bg-green-500" : "bg-yellow-500"}>
                                      {i % 2 === 0 ? "Active" : "Draft"}
                                    </Badge>
                                  </td>
                                  <td className="py-3 px-4 text-right">
                                    <Button variant="ghost" size="sm" asChild>
                                      <Link href={`/admin/jobs/${i}`}>
                                        <ArrowRight className="h-4 w-4" />
                                      </Link>
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Showing 5 of 1,543 jobs</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/admin/jobs">View All Jobs</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="recent-applications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Applications</CardTitle>
                      <CardDescription>Latest job applications received</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium">Applicant</th>
                                <th className="text-left py-3 px-4 font-medium">Job</th>
                                <th className="text-left py-3 px-4 font-medium">Applied On</th>
                                <th className="text-left py-3 px-4 font-medium">Status</th>
                                <th className="text-right py-3 px-4 font-medium">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="border-b">
                                  <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                      <Avatar className="h-8 w-8">
                                        <AvatarFallback>{["RS", "AP", "SK", "MK", "VT"][i - 1]}</AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <p className="font-medium">
                                          {
                                            ["Rahul Sharma", "Amit Patel", "Sneha Kumar", "Mohan Khan", "Vijay Tiwari"][
                                              i - 1
                                            ]
                                          }
                                        </p>
                                        <p className="text-xs text-muted-foreground">{`applicant${i}@example.com`}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="py-3 px-4">
                                    {
                                      [
                                        "UPSC Civil Services 2025",
                                        "SSC CGL 2025",
                                        "IBPS PO 2025",
                                        "RRB NTPC 2025",
                                        "SBI PO 2025",
                                      ][i - 1]
                                    }
                                  </td>
                                  <td className="py-3 px-4 text-muted-foreground">
                                    {["10 Mar", "09 Mar", "08 Mar", "07 Mar", "06 Mar"][i - 1]} 2025
                                  </td>
                                  <td className="py-3 px-4">
                                    <Badge
                                      className={
                                        i === 1
                                          ? "bg-yellow-500"
                                          : i === 2
                                            ? "bg-green-500"
                                            : i === 3
                                              ? "bg-blue-500"
                                              : i === 4
                                                ? "bg-red-500"
                                                : "bg-gray-500"
                                      }
                                    >
                                      {i === 1
                                        ? "Pending"
                                        : i === 2
                                          ? "Approved"
                                          : i === 3
                                            ? "Under Review"
                                            : i === 4
                                              ? "Rejected"
                                              : "Incomplete"}
                                    </Badge>
                                  </td>
                                  <td className="py-3 px-4 text-right">
                                    <Button variant="ghost" size="sm" asChild>
                                      <Link href={`/admin/applications/${i}`}>
                                        <ArrowRight className="h-4 w-4" />
                                      </Link>
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Showing 5 of 245,678 applications</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/admin/applications">View All Applications</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="recent-users">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Users</CardTitle>
                      <CardDescription>Latest user registrations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-medium">User</th>
                                <th className="text-left py-3 px-4 font-medium">Email</th>
                                <th className="text-left py-3 px-4 font-medium">Registered On</th>
                                <th className="text-left py-3 px-4 font-medium">Status</th>
                                <th className="text-right py-3 px-4 font-medium">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="border-b">
                                  <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                      <Avatar className="h-8 w-8">
                                        <AvatarFallback>{["PK", "SM", "RJ", "AS", "NK"][i - 1]}</AvatarFallback>
                                      </Avatar>
                                      <p className="font-medium">
                                        {
                                          ["Priya Kapoor", "Suresh Mehta", "Raj Joshi", "Anita Singh", "Nikhil Kumar"][
                                            i - 1
                                          ]
                                        }
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-3 px-4 text-muted-foreground">{`user${i}@example.com`}</td>
                                  <td className="py-3 px-4 text-muted-foreground">
                                    {["10 Mar", "09 Mar", "08 Mar", "07 Mar", "06 Mar"][i - 1]} 2025
                                  </td>
                                  <td className="py-3 px-4">
                                    <Badge className={i === 3 ? "bg-yellow-500" : "bg-green-500"}>
                                      {i === 3 ? "Pending Verification" : "Active"}
                                    </Badge>
                                  </td>
                                  <td className="py-3 px-4 text-right">
                                    <Button variant="ghost" size="sm" asChild>
                                      <Link href={`/admin/users/${i}`}>
                                        <ArrowRight className="h-4 w-4" />
                                      </Link>
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Showing 5 of 1,250,000 users</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/admin/users">View All Users</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

