"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Bell, Briefcase, Calendar, Camera, FileText, Home, Pencil, Save, Settings, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    dob: "1995-05-15",
    gender: "male",
    address: "123 Main Street",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    qualification: "B.Tech",
    university: "Delhi University",
    passingYear: "2020",
    percentage: "85",
    skills: "Communication, Leadership, Problem Solving",
    about:
      "Experienced professional with a strong background in technology and management. Looking for opportunities in government sector.",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // In a real app, you would save the data to the server here
    setIsEditing(false)
  }

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
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
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
              className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium"
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
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
                <p className="text-muted-foreground">Manage your personal information and preferences</p>
              </div>
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className={isEditing ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {isEditing ? (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                      <AvatarFallback className="text-2xl">RS</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <h2 className="text-xl font-bold">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-sm text-muted-foreground">{profileData.email}</p>
                  <p className="text-sm text-muted-foreground">{profileData.phone}</p>

                  <div className="mt-6 w-full">
                    <h3 className="font-medium text-sm mb-2 text-left">Profile Completion</h3>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-[85%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">85% Complete</p>
                  </div>

                  <div className="mt-6 w-full">
                    <h3 className="font-medium text-sm mb-2 text-left">Account Status</h3>
                    <Badge className="bg-green-500 w-full">Verified</Badge>
                  </div>

                  <div className="mt-6 w-full">
                    <h3 className="font-medium text-sm mb-2 text-left">Member Since</h3>
                    <p className="text-sm">March 10, 2023</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal">
                    <TabsList className="mb-4">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="education">Education</TabsTrigger>
                      <TabsTrigger value="additional">Additional</TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            disabled={true} // Email cannot be changed
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="dob" className="text-sm font-medium">
                            Date of Birth
                          </label>
                          <Input
                            id="dob"
                            name="dob"
                            type="date"
                            value={profileData.dob}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="gender" className="text-sm font-medium">
                            Gender
                          </label>
                          <Select
                            value={profileData.gender}
                            onValueChange={(value) => handleSelectChange("gender", value)}
                            disabled={!isEditing}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label htmlFor="address" className="text-sm font-medium">
                            Address
                          </label>
                          <Input
                            id="address"
                            name="address"
                            value={profileData.address}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="city" className="text-sm font-medium">
                            City
                          </label>
                          <Input
                            id="city"
                            name="city"
                            value={profileData.city}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="state" className="text-sm font-medium">
                            State
                          </label>
                          <Input
                            id="state"
                            name="state"
                            value={profileData.state}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="pincode" className="text-sm font-medium">
                            Pincode
                          </label>
                          <Input
                            id="pincode"
                            name="pincode"
                            value={profileData.pincode}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="education">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="qualification" className="text-sm font-medium">
                            Highest Qualification
                          </label>
                          <Select
                            value={profileData.qualification}
                            onValueChange={(value) => handleSelectChange("qualification", value)}
                            disabled={!isEditing}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10th">10th</SelectItem>
                              <SelectItem value="12th">12th</SelectItem>
                              <SelectItem value="Diploma">Diploma</SelectItem>
                              <SelectItem value="B.A.">B.A.</SelectItem>
                              <SelectItem value="B.Com">B.Com</SelectItem>
                              <SelectItem value="B.Sc">B.Sc</SelectItem>
                              <SelectItem value="B.Tech">B.Tech</SelectItem>
                              <SelectItem value="M.A.">M.A.</SelectItem>
                              <SelectItem value="M.Com">M.Com</SelectItem>
                              <SelectItem value="M.Sc">M.Sc</SelectItem>
                              <SelectItem value="M.Tech">M.Tech</SelectItem>
                              <SelectItem value="PhD">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="university" className="text-sm font-medium">
                            University/Board
                          </label>
                          <Input
                            id="university"
                            name="university"
                            value={profileData.university}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="passingYear" className="text-sm font-medium">
                            Passing Year
                          </label>
                          <Select
                            value={profileData.passingYear}
                            onValueChange={(value) => handleSelectChange("passingYear", value)}
                            disabled={!isEditing}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 15 }, (_, i) => (
                                <SelectItem key={i} value={(2025 - i).toString()}>
                                  {2025 - i}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="percentage" className="text-sm font-medium">
                            Percentage/CGPA
                          </label>
                          <Input
                            id="percentage"
                            name="percentage"
                            value={profileData.percentage}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="font-medium text-sm mb-2">Documents</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-sm">Degree Certificate</p>
                                <p className="text-xs text-muted-foreground">Uploaded on 15 Mar 2023</p>
                              </div>
                            </div>
                            {isEditing && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-sm">Mark Sheet</p>
                                <p className="text-xs text-muted-foreground">Uploaded on 15 Mar 2023</p>
                              </div>
                            </div>
                            {isEditing && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          {isEditing && (
                            <Button variant="outline" className="w-full">
                              Upload Document
                            </Button>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="additional">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="skills" className="text-sm font-medium">
                            Skills
                          </label>
                          <Input
                            id="skills"
                            name="skills"
                            value={profileData.skills}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            placeholder="Enter skills separated by commas"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="about" className="text-sm font-medium">
                            About Me
                          </label>
                          <Textarea
                            id="about"
                            name="about"
                            value={profileData.about}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            placeholder="Tell us about yourself"
                            className="min-h-[150px]"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-end">
                  {isEditing && (
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-700" onClick={handleSave}>
                        Save Changes
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

