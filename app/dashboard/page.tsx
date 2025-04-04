import Link from "next/link"
import {
  Bell,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Home,
  Settings,
  User,
  X,
  AlertCircle,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-red-600">Rojgaar</span>
              <span className="text-xl font-bold">Yatra</span>
              <span className="text-xl font-bold text-red-600">.com</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
            </Button>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Rahul Sharma</p>
                <p className="text-xs text-muted-foreground">rahul@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/30">
          <div className="flex flex-col gap-1 p-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/applications"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Briefcase className="h-4 w-4" />
              My Applications
            </Link>
            <Link
              href="/dashboard/exams"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Calendar className="h-4 w-4" />
              My Exams
            </Link>
            <Link
              href="/dashboard/results"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Results
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <User className="h-4 w-4" />
              My Profile
            </Link>
            <Link
              href="/dashboard/settings"
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
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, Rahul!</h1>
              <p className="text-muted-foreground">Here's what's happening with your job applications.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Total Applications</span>
                  </div>
                  <div className="mt-3 text-3xl font-bold">12</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Pending</span>
                  </div>
                  <div className="mt-3 text-3xl font-bold">3</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Shortlisted</span>
                  </div>
                  <div className="mt-3 text-3xl font-bold">7</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <X className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Rejected</span>
                  </div>
                  <div className="mt-3 text-3xl font-bold">2</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Notice</AlertTitle>
                <AlertDescription>
                  UPSC Civil Services 2025 application deadline is approaching. Complete your application before April
                  15, 2025.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="applications">
                <TabsList className="mb-4">
                  <TabsTrigger value="applications">Recent Applications</TabsTrigger>
                  <TabsTrigger value="exams">Upcoming Exams</TabsTrigger>
                  <TabsTrigger value="results">Recent Results</TabsTrigger>
                </TabsList>

                <TabsContent value="applications">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-lg">
                                {["UPSC Civil Services 2025", "SSC CGL 2025", "IBPS PO 2025"][i - 1]}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Applied on: {["10 Mar", "05 Mar", "28 Feb"][i - 1]} 2025
                              </p>
                            </div>
                            <Badge className={i === 1 ? "bg-yellow-500" : i === 2 ? "bg-green-500" : "bg-blue-500"}>
                              {i === 1 ? "Pending" : i === 2 ? "Shortlisted" : "Under Review"}
                            </Badge>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>Application Progress</span>
                              <span>{["60%", "100%", "80%"][i - 1]}</span>
                            </div>
                            <Progress value={[60, 100, 80][i - 1]} className="h-2" />
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/dashboard/applications/${i}`}>View Details</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="exams">
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-lg">
                                {["UPSC Prelims 2025", "SSC CGL Tier I 2025"][i - 1]}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Exam Date: {["15 Apr", "30 Apr"][i - 1]} 2025
                              </p>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                            >
                              {["10", "25"][i - 1]} days left
                            </Badge>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Reporting Time:</span> {["08:30 AM", "09:00 AM"][i - 1]}
                            </div>
                            <div>
                              <span className="font-medium">Venue:</span> {["Delhi", "Mumbai"][i - 1]}
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/dashboard/exams/${i}`}>View Details</Link>
                            </Button>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                              <Link href={`/admit-card/${i}`}>Download Admit Card</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="results">
                  <div className="space-y-4">
                    {[1].map((i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-lg">SSC CHSL 2024</h3>
                              <p className="text-sm text-muted-foreground">Result Declared: 15 Feb 2025</p>
                            </div>
                            <Badge className="bg-green-500">Qualified</Badge>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Score:</span> 156/200
                            </div>
                            <div>
                              <span className="font-medium">Percentile:</span> 92.5
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="/dashboard/results/1">View Details</Link>
                            </Button>
                            <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                              <Link href="/dashboard/results/1/download">Download Result</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Jobs</CardTitle>
                  <CardDescription>Based on your profile and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-medium">{["RBI Grade B 2025", "SBI PO 2025", "UPSC CAPF 2025"][i - 1]}</h4>
                        <p className="text-sm text-muted-foreground">
                          Last Date: {["22 Apr", "15 May", "30 May"][i - 1]} 2025
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                        <Link href={`/jobs/${i + 3}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/jobs">View All Jobs</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Resources</CardTitle>
                  <CardDescription>Recommended materials for your exams</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0">
                      <div className="rounded-md bg-muted p-2">
                        {
                          [
                            <BookOpen className="h-4 w-4" key={1} />,
                            <FileText className="h-4 w-4" key={2} />,
                            <Award className="h-4 w-4" key={3} />,
                          ][i - 1]
                        }
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {["UPSC Study Material", "SSC Previous Papers", "Mock Test Series"][i - 1]}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {
                            ["Complete syllabus coverage", "Last 5 years solved papers", "Topic-wise practice tests"][
                              i - 1
                            ]
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/study-material">View All Resources</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

