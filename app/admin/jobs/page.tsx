import { Button } from "@/components/ui/button"
import { Plus, FileEdit, Trash2, Eye, Search } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Row, ColumnDef } from "@tanstack/react-table"
import { Job } from "@/types/job"

// Column definition for the jobs table
const columns: ColumnDef<Job>[] = [
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
    id: "status",
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<Job> }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant="outline">
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
    cell: ({ row }: { row: Row<Job> }) => {
      const job = row.original

      return (
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/jobs/${job.id}`}
            className="text-gray-600 hover:text-gray-900"
          >
              <Eye className="h-4 w-4" />
            </Link>
          <Link
            href={`/admin/jobs/${job.id}/edit`}
            className="text-gray-600 hover:text-gray-900"
          >
              <FileEdit className="h-4 w-4" />
            </Link>
          <button className="text-red-600 hover:text-red-900">
            <Trash2 className="h-4 w-4" />
          </button>
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
    <div className="px-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Jobs Management</h1>
          <p className="text-sm text-muted-foreground">Manage and monitor all job postings</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" asChild>
          <Link href="/admin/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Job
          </Link>
        </Button>
      </div>

        <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs..." className="pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          </CardHeader>
          <CardContent>
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 text-sm font-medium">Job Title</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Department</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Location</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Posted Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Last Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Applications</th>
                    <th className="text-right py-3 px-4 text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((job) => (
                    <tr key={job.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <div className="font-medium">{job.title}</div>
                        <div className="text-xs text-muted-foreground">{job.id}</div>
                      </td>
                      <td className="py-3 px-4 text-sm">{job.department}</td>
                      <td className="py-3 px-4 text-sm">{job.location}</td>
                      <td className="py-3 px-4 text-sm">{job.postedDate}</td>
                      <td className="py-3 px-4 text-sm">{job.lastDate}</td>
                      <td className="py-3 px-4">
                        <Badge variant={job.status === "Active" ? "default" : "destructive"}>
                          {job.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">{job.applications}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/jobs/${job.id}`}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            href={`/admin/jobs/${job.id}/edit`}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <FileEdit className="h-4 w-4" />
                          </Link>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">Showing 10 of 100 jobs</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
          </CardContent>
        </Card>
    </div>
  )
}

