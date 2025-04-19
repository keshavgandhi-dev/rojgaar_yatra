"use client"

import * as React from "react"
import {
  BarChart,
  FileText,
  LineChart,
  PieChart,
  Plus,
  Search,
  Users,
  Briefcase,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  Settings,
  Home,
  BookOpen,
  Ticket,
  Key,
  Phone,
  FileCheck,
  KeyRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function AdminDashboardPage() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const links = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Latest Jobs",
      href: "/jobs",
      icon: Briefcase,
    },
    {
      name: "Results",
      href: "/results",
      icon: FileText,
    },
    {
      name: "Syllabus",
      href: "/syllabus",
      icon: BookOpen,
    },
    {
      name: "Admit Card",
      href: "/admit-card",
      icon: Ticket,
    },
    {
      name: "Answer Key",
      href: "/answer-key",
      icon: Key,
    },
    {
      name: "Contact Us",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <div className="space-y-5 max-w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold mt-0.5">1,250,000</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                <Users className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center text-xs">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">12%</span>
              <span className="ml-1 text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                <p className="text-2xl font-bold mt-0.5">2,500</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center text-xs">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">8%</span>
              <span className="ml-1 text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Applications</p>
                <p className="text-2xl font-bold mt-0.5">45,678</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center text-xs">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">15%</span>
              <span className="ml-1 text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold mt-0.5">₹12.5M</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <BarChart className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center text-xs">
              <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">20%</span>
              <span className="ml-1 text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Deadlines */}
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-base">Upcoming Deadlines</CardTitle>
            <CardDescription>Job applications closing soon</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "UPSC Civil Services 2025",
                date: "15 Apr 2025",
                applicants: 45892,
                urgent: true,
              },
              {
                title: "SSC CGL 2025",
                date: "30 Mar 2025",
                applicants: 28567,
                urgent: false,
              },
              {
                title: "IBPS PO 2025",
                date: "20 May 2025",
                applicants: 15234,
                urgent: false,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-lg ${item.urgent ? 'bg-red-50' : 'bg-blue-50'} flex items-center justify-center`}>
                    <Calendar className={`h-5 w-5 ${item.urgent ? 'text-red-600' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {item.applicants.toLocaleString()} applicants
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant={item.urgent ? "destructive" : "secondary"} className="text-xs">
                  {item.urgent ? 'Urgent' : 'Upcoming'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-base">Recent Activities</CardTitle>
            <CardDescription>Latest system updates</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: "New job posted",
                description: "UPSC Civil Services 2025 has been published",
                time: "2 hours ago",
                icon: Plus,
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                title: "Application approved",
                description: "Rahul Sharma's application was approved",
                time: "4 hours ago",
                icon: CheckCircle2,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                title: "System notification",
                description: "Monthly analytics report is ready",
                time: "6 hours ago",
                icon: Bell,
                color: "text-yellow-600",
                bg: "bg-yellow-50",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className={`h-8 w-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Jobs Table */}
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <CardTitle>Recently Added Jobs</CardTitle>
            <CardDescription>Latest job postings on the platform</CardDescription>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search jobs..." className="pl-8 w-full md:w-[200px]" />
            </div>
            <Button className="bg-red-600 hover:bg-red-700 whitespace-nowrap" asChild>
              <Link href="/admin/jobs/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Job
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[700px]">
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
                        {["UPSC Civil Services 2025", "SSC CGL 2025", "IBPS PO 2025", "RRB NTPC 2025", "SBI PO 2025"][i - 1]}
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
        <CardFooter className="flex flex-wrap justify-between gap-3">
          <p className="text-sm text-muted-foreground">Showing 5 of 1,543 jobs</p>
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/jobs">View All Jobs</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

