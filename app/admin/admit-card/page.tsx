import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, Download, Upload, Filter, MoreHorizontal, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdmitCardPage() {
  return (
    <div className="px-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admit Card Management</h1>
          <p className="text-sm text-muted-foreground">Manage and generate admit cards for candidates</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" asChild>
          <Link href="/admin/admit-card/generate">
            <FileText className="mr-2 h-4 w-4" />
            Generate Admit Cards
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
            <TabsTrigger value="generated" className="text-sm">Generated</TabsTrigger>
            <TabsTrigger value="pending" className="text-sm">Pending</TabsTrigger>
          </TabsList>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search admit cards..." className="pl-8 text-sm" />
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
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="text-sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-medium text-sm">Candidate</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Exam</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Generated On</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-sm">U{i}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">Candidate {i}</div>
                              <div className="text-xs text-muted-foreground">candidate{i}@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">Exam {i}</td>
                        <td className="py-3 px-4">
                          <Badge className={`text-xs ${i % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {i % 2 === 0 ? 'Generated' : 'Pending'}
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
                                View Admit Card
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
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
            <p className="text-sm text-muted-foreground">Showing 1-5 of 25 admit cards</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-sm">Previous</Button>
              <Button variant="outline" size="sm" className="text-sm">Next</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="generated">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Generated Admit Cards</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show all generated admit cards.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Pending Admit Cards</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show all pending admit cards.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 