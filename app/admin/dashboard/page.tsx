import { DashboardCard } from "@/components/ui/dashboard-card"
import { Briefcase, FileText, GraduationCap, Users, Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your admin portal</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Users"
          value="12,345"
          description="Active users on the platform"
          icon={Users}
          trend="up"
          trendValue="12%"
        />
        <DashboardCard
          title="Total Jobs"
          value="1,234"
          description="Active job listings"
          icon={Briefcase}
          trend="up"
          trendValue="5%"
        />
        <DashboardCard
          title="Applications"
          value="45,678"
          description="Total applications received"
          icon={FileText}
          trend="up"
          trendValue="8%"
        />
        <DashboardCard
          title="Exams"
          value="567"
          description="Upcoming and active exams"
          icon={GraduationCap}
          trend="neutral"
          trendValue="0%"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>User Registration Trends</CardTitle>
            <CardDescription>New user registrations over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Chart visualization goes here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>Latest users who joined the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">User Name {i}</p>
                    <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{i} min ago</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Popular Job Categories</CardTitle>
            <CardDescription>Most viewed job categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Banking</p>
                  <p className="text-sm text-muted-foreground">45%</p>
                </div>
                <Progress value={45} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Railway</p>
                  <p className="text-sm text-muted-foreground">32%</p>
                </div>
                <Progress value={32} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Teaching</p>
                  <p className="text-sm text-muted-foreground">28%</p>
                </div>
                <Progress value={28} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Defense</p>
                  <p className="text-sm text-muted-foreground">15%</p>
                </div>
                <Progress value={15} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Civil Services</p>
                  <p className="text-sm text-muted-foreground">10%</p>
                </div>
                <Progress value={10} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used admin actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-2">
              <Button variant="outline" className="h-20 flex flex-col gap-1 items-center justify-center">
                <Briefcase className="h-5 w-5" />
                <span className="text-xs">Add Job</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-1 items-center justify-center">
                <FileText className="h-5 w-5" />
                <span className="text-xs">Add Result</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-1 items-center justify-center">
                <Award className="h-5 w-5" />
                <span className="text-xs">Add Admit Card</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-1 items-center justify-center">
                <CheckCircle className="h-5 w-5" />
                <span className="text-xs">Add Answer Key</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Server Load</p>
                  <p className="text-sm text-green-500">Normal</p>
                </div>
                <Progress value={35} className="bg-green-100 [&>div]:bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Database</p>
                  <p className="text-sm text-green-500">Healthy</p>
                </div>
                <Progress value={25} className="bg-green-100 [&>div]:bg-green-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Storage</p>
                  <p className="text-sm text-amber-500">Moderate</p>
                </div>
                <Progress value={65} className="bg-amber-100 [&>div]:bg-amber-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">API Requests</p>
                  <p className="text-sm text-green-500">Normal</p>
                </div>
                <Progress value={42} className="bg-green-100 [&>div]:bg-green-500" />
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  View Detailed Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

