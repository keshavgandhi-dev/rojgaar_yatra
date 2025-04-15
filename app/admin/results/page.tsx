import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, Upload, Filter, MoreHorizontal, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function ResultsPage() {
  return (
    <div className="px-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Results Management</h1>
          <p className="text-sm text-muted-foreground">Upload and manage exam results</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Upload className="mr-2 h-4 w-4" />
              Upload Results
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-lg">Upload Results</DialogTitle>
              <DialogDescription className="text-sm">
                Upload exam results in CSV format. Make sure the file follows the required format.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="file" className="text-sm">CSV File</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="file"
                    type="file"
                    accept=".csv"
                    className="text-sm"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Supported format: CSV (Max size: 5MB)
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="exam" className="text-sm">Select Exam</Label>
                <select
                  id="exam"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select an exam</option>
                  <option value="exam1">Exam 1</option>
                  <option value="exam2">Exam 2</option>
                  <option value="exam3">Exam 3</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-red-600 hover:bg-red-700 text-sm">
                Upload Results
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
            <TabsTrigger value="published" className="text-sm">Published</TabsTrigger>
            <TabsTrigger value="draft" className="text-sm">Draft</TabsTrigger>
          </TabsList>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search results..." className="pl-8 text-sm" />
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-medium text-sm">Exam</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Total Candidates</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Published On</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-sm">Exam {i}</div>
                          <div className="text-xs text-muted-foreground">2024-03-{i}</div>
                        </td>
                        <td className="py-3 px-4 text-sm">{i * 100}</td>
                        <td className="py-3 px-4">
                          <Badge className={`text-xs ${i % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {i % 2 === 0 ? 'Published' : 'Draft'}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">2024-03-{i}</td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-sm">
                              <DropdownMenuLabel className="text-sm">Actions</DropdownMenuLabel>
                              <DropdownMenuItem className="text-sm">
                                <FileText className="h-4 w-4 mr-2" />
                                View Results
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-sm">
                                <Upload className="h-4 w-4 mr-2" />
                                Update Results
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-sm text-red-600">
                                <XCircle className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
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
            <p className="text-sm text-muted-foreground">Showing 1-5 of 25 results</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-sm">Previous</Button>
              <Button variant="outline" size="sm" className="text-sm">Next</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Published Results</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show all published results.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Draft Results</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show all draft results.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 