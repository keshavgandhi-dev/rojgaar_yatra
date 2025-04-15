"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Filter, MoreHorizontal, Search, Trash, UserPlus, Users, CheckCircle, XCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Mock user data
  const users = [
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      status: "active",
      role: "user",
      registeredOn: "10 Mar 2025",
      applications: 5,
      verified: true,
    },
    {
      id: "2",
      name: "Priya Patel",
      email: "priya@example.com",
      status: "active",
      role: "user",
      registeredOn: "08 Mar 2025",
      applications: 3,
      verified: true,
    },
    {
      id: "3",
      name: "Amit Kumar",
      email: "amit@example.com",
      status: "pending",
      role: "user",
      registeredOn: "05 Mar 2025",
      applications: 0,
      verified: false,
    },
    {
      id: "4",
      name: "Sneha Gupta",
      email: "sneha@example.com",
      status: "active",
      role: "user",
      registeredOn: "01 Mar 2025",
      applications: 2,
      verified: true,
    },
    {
      id: "5",
      name: "Vikram Singh",
      email: "vikram@example.com",
      status: "inactive",
      role: "user",
      registeredOn: "25 Feb 2025",
      applications: 1,
      verified: true,
    },
    {
      id: "6",
      name: "Neha Verma",
      email: "neha@example.com",
      status: "active",
      role: "user",
      registeredOn: "20 Feb 2025",
      applications: 4,
      verified: true,
    },
    {
      id: "7",
      name: "Rajesh Khanna",
      email: "rajesh@example.com",
      status: "blocked",
      role: "user",
      registeredOn: "15 Feb 2025",
      applications: 0,
      verified: true,
    },
    {
      id: "8",
      name: "Anita Singh",
      email: "anita@example.com",
      status: "pending",
      role: "user",
      registeredOn: "10 Feb 2025",
      applications: 0,
      verified: false,
    },
  ]

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map((user) => user.id))
    }
  }

  const handleDeleteSelected = () => {
    // In a real app, you would delete the selected users here
    console.log("Deleting users:", selectedUsers)
    setSelectedUsers([])
    setIsDeleteDialogOpen(false)
  }

  // Status badge color mapping
  const statusColors = {
    active: "bg-green-500",
    pending: "bg-yellow-500",
    inactive: "bg-gray-500",
    blocked: "bg-red-500",
  }

  return (
    <div className="px-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-sm text-muted-foreground">Manage users and their permissions</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" asChild>
          <Link href="/admin/users/new">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all-users">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all-users" className="text-sm">All Users</TabsTrigger>
            <TabsTrigger value="active" className="text-sm">Active</TabsTrigger>
            <TabsTrigger value="pending" className="text-sm">Pending</TabsTrigger>
            <TabsTrigger value="blocked" className="text-sm">Blocked</TabsTrigger>
          </TabsList>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search users..." className="pl-8 text-sm" />
          </div>
        </div>

        <TabsContent value="all-users" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="select-all"
                    checked={selectedUsers.length === users.length && users.length > 0}
                    onCheckedChange={toggleSelectAll}
                  />
                  <Label htmlFor="select-all" className="text-sm font-medium">
                    Select All
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  {selectedUsers.length > 0 && (
                    <>
                      <span className="text-sm text-muted-foreground">{selectedUsers.length} selected</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsDeleteDialogOpen(true)}
                        className="text-destructive hover:text-destructive text-sm"
                      >
                        <Trash className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                      <Button variant="outline" size="sm" className="text-sm">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                    </>
                  )}

                  <Button variant="outline" size="sm" className="text-sm">
                    <Filter className="h-4 w-4 mr-1" />
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
                      <th className="w-[40px] text-left py-3 px-4 font-medium text-sm"></th>
                      <th className="text-left py-3 px-4 font-medium text-sm">User</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Registered On</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Applications</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Verified</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={() => toggleUserSelection(user.id)}
                          />
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-sm">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{user.name}</div>
                              <div className="text-xs text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={`text-xs ${statusColors[user.status as keyof typeof statusColors]}`}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground text-sm">{user.registeredOn}</td>
                        <td className="py-3 px-4 text-sm">{user.applications}</td>
                        <td className="py-3 px-4">
                          {user.verified ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-yellow-500" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-sm">
                              <DropdownMenuLabel className="text-sm">Actions</DropdownMenuLabel>
                              <DropdownMenuItem asChild className="text-sm">
                                <Link href={`/admin/users/${user.id}`}>View Details</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="text-sm">
                                <Link href={`/admin/users/${user.id}/edit`}>Edit User</Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {user.status === "active" ? (
                                <DropdownMenuItem className="text-sm text-yellow-600">Deactivate User</DropdownMenuItem>
                              ) : user.status === "inactive" || user.status === "pending" ? (
                                <DropdownMenuItem className="text-sm text-green-600">Activate User</DropdownMenuItem>
                              ) : null}
                              {user.status !== "blocked" ? (
                                <DropdownMenuItem className="text-sm text-red-600">Block User</DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem className="text-sm text-green-600">Unblock User</DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-sm text-destructive">Delete User</DropdownMenuItem>
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
            <p className="text-sm text-muted-foreground">Showing 1-8 of 1,250 users</p>
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

        <TabsContent value="active">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Active Users</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show only active users.</p>
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
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Pending Users</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This tab will show only pending users awaiting verification.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blocked">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Blocked Users</h3>
                  <p className="text-sm text-muted-foreground mb-4">This tab will show only blocked users.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">User Statistics</CardTitle>
            <CardDescription className="text-sm">Overview of user data</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Users</span>
                <span className="font-bold text-sm">1,250</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Users</span>
                <span className="font-bold text-sm">1,120</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pending Verification</span>
                <span className="font-bold text-sm">85</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Blocked Users</span>
                <span className="font-bold text-sm">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">New Users (This Month)</span>
                <span className="font-bold text-sm">124</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Recent Registrations</CardTitle>
            <CardDescription className="text-sm">Latest user sign-ups</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {users.slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-sm">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.registeredOn}</div>
                    </div>
                  </div>
                  <Badge className={`text-xs ${statusColors[user.status as keyof typeof statusColors]}`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription className="text-sm">Common user management tasks</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm" asChild>
                <Link href="/admin/users/new">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add New User
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <Mail className="mr-2 h-4 w-4" />
                Send Bulk Email
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                Verify Pending Users
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <Users className="mr-2 h-4 w-4" />
                Export User Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg">Delete Users</DialogTitle>
            <DialogDescription className="text-sm">
              Are you sure you want to delete {selectedUsers.length} selected users? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} className="text-sm">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteSelected} className="text-sm">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

