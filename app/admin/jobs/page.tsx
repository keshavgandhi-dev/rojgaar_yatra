import { Button } from "@/components/ui/button"
import { Plus, FileEdit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Column definition for the jobs table
const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Job Title",
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "postedDate",
    header: "Posted Date",
  },
  {
    accessorKey: "lastDate",
    header: "Last Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string

      return (
        <Badge
          variant={
            status === "Active"
              ? "success"
              : status === "Closed"
                ? "destructive"
                : status === "Draft"
                  ? "outline"
                  : "default"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "applications",
    header: "Applications",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const job = row.original

      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/admin/jobs/${row.getValue("id")}`}>
              <Eye className="h-4 w-4" />
              <span className="sr-only">View</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/admin/jobs/${row.getValue("id")}/edit`}>
              <FileEdit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      )
    },
  },
]

// Sample data for the jobs table
const data = [
  {
    id: "JOB001",
    title: "Bank PO",
    department: "Banking",
    location: "All India",
    postedDate: "2023-04-01",
    lastDate: "2023-05-15",
    status: "Active",
    applications: "1,245",
  },
  {
    id: "JOB002",
    title: "Railway Group D",
    department: "Railway",
    location: "All India",
    postedDate: "2023-03-15",
    lastDate: "2023-04-30",
    status: "Active",
    applications: "5,678",
  },
  {
    id: "JOB003",
    title: "SSC CGL",
    department: "Staff Selection Commission",
    location: "All India",
    postedDate: "2023-02-20",
    lastDate: "2023-03-31",
    status: "Closed",
    applications: "10,234",
  },
  {
    id: "JOB004",
    title: "UPSC Civil Services",
    department: "UPSC",
    location: "All India",
    postedDate: "2023-03-01",
    lastDate: "2023-04-15",
    status: "Active",
    applications: "8,765",
  },
  {
    id: "JOB005",
    title: "State PSC",
    department: "State Public Service Commission",
    location: "Uttar Pradesh",
    postedDate: "2023-03-10",
    lastDate: "2023-04-20",
    status: "Active",
    applications: "3,456",
  },
  {
    id: "JOB006",
    title: "Teacher Recruitment",
    department: "Education",
    location: "Delhi",
    postedDate: "2023-02-15",
    lastDate: "2023-03-25",
    status: "Closed",
    applications: "7,890",
  },
  {
    id: "JOB007",
    title: "Police Constable",
    department: "Home Affairs",
    location: "Maharashtra",
    postedDate: "2023-03-20",
    lastDate: "2023-05-01",
    status: "Active",
    applications: "12,345",
  },
  {
    id: "JOB008",
    title: "Forest Officer",
    department: "Environment",
    location: "All India",
    postedDate: "2023-04-05",
    lastDate: "2023-05-20",
    status: "Active",
    applications: "2,345",
  },
  {
    id: "JOB009",
    title: "Income Tax Officer",
    department: "Finance",
    location: "All India",
    postedDate: "2023-03-25",
    lastDate: "2023-05-10",
    status: "Active",
    applications: "4,567",
  },
  {
    id: "JOB010",
    title: "Junior Engineer",
    department: "Public Works",
    location: "Gujarat",
    postedDate: "2023-02-28",
    lastDate: "2023-04-10",
    status: "Closed",
    applications: "6,789",
  },
]

export default function AdminJobsPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jobs Management</h1>
          <p className="text-muted-foreground">Manage all job listings on the platform</p>
        </div>
        <Button asChild>
          <Link href="/admin/jobs/new">
            <Plus className="mr-2 h-4 w-4" /> Add New Job
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">789</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Closed Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">445</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,678</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>\

