"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Calendar, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"

export default function NewJobPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [jobStatus, setJobStatus] = useState("draft")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Job created successfully",
      description: "The job has been created and is now available in the system.",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/admin" className="flex items-center">
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

      <main className="flex-1 overflow-auto">
        <div className="container py-6">
          <div className="mb-8">
            <Link href="/admin/jobs" className="inline-flex items-center text-sm font-medium text-red-600 mb-2">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Jobs
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Create New Job</h1>
            <p className="text-muted-foreground">Add a new job posting to the platform</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Enter the basic details of the job posting</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" placeholder="e.g., UPSC Civil Services 2025" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" placeholder="e.g., Union Public Service Commission" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="e.g., All India" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vacancies">Number of Vacancies</Label>
                        <Input id="vacancies" type="number" placeholder="e.g., 1200" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="job-type">Job Type</Label>
                        <Select defaultValue="permanent">
                          <SelectTrigger id="job-type">
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="permanent">Permanent</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Job Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Enter detailed job description..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility & Requirements</CardTitle>
                    <CardDescription>Specify the eligibility criteria and requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="qualification">Minimum Qualification</Label>
                        <Select defaultValue="graduate">
                          <SelectTrigger id="qualification">
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10th">10th Pass</SelectItem>
                            <SelectItem value="12th">12th Pass</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="postgraduate">Post Graduate</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Required</Label>
                        <Select defaultValue="0">
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">No Experience</SelectItem>
                            <SelectItem value="1">1 Year</SelectItem>
                            <SelectItem value="2">2 Years</SelectItem>
                            <SelectItem value="3">3 Years</SelectItem>
                            <SelectItem value="5">5+ Years</SelectItem>
                            <SelectItem value="10">10+ Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age-min">Minimum Age (Years)</Label>
                        <Input id="age-min" type="number" placeholder="e.g., 21" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age-max">Maximum Age (Years)</Label>
                        <Input id="age-max" type="number" placeholder="e.g., 32" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Additional Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Enter any additional requirements or skills needed..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Application Details</CardTitle>
                    <CardDescription>Set application dates and fees</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Application Start Date</Label>
                        <Input id="start-date" type="date" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="end-date">Application End Date</Label>
                        <Input id="end-date" type="date" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="exam-date">Exam Date (Tentative)</Label>
                        <Input id="exam-date" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="result-date">Result Date (Tentative)</Label>
                        <Input id="result-date" type="date" />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <Label className="mb-2 block">Application Fee</Label>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 items-center">
                          <Label htmlFor="fee-general">General</Label>
                          <Input id="fee-general" type="number" placeholder="e.g., 100" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                          <Label htmlFor="fee-obc">OBC</Label>
                          <Input id="fee-obc" type="number" placeholder="e.g., 100" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                          <Label htmlFor="fee-sc">SC</Label>
                          <Input id="fee-sc" type="number" placeholder="e.g., 0" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                          <Label htmlFor="fee-st">ST</Label>
                          <Input id="fee-st" type="number" placeholder="e.g., 0" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                          <Label htmlFor="fee-pwd">PwD</Label>
                          <Input id="fee-pwd" type="number" placeholder="e.g., 0" required />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Selection Process</CardTitle>
                    <CardDescription>Define the selection process stages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Selection Stages</Label>
                        <Button type="button" variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" /> Add Stage
                        </Button>
                      </div>

                      {["Prelims", "Mains", "Interview"].map((stage, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-sm font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <Input defaultValue={stage} className="h-9" />
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Documents Required</CardTitle>
                    <CardDescription>Specify the documents required for application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Required Documents</Label>
                        <Button type="button" variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" /> Add Document
                        </Button>
                      </div>

                      {["Resume/CV", "Photo", "ID Proof", "Degree Certificate", "Experience Certificate"].map(
                        (doc, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                            <div className="flex-1">
                              <Input defaultValue={doc} className="h-9" />
                            </div>
                            <div className="flex items-center gap-2">
                              <Label htmlFor={`required-${index}`} className="text-sm">
                                Required
                              </Label>
                              <Switch id={`required-${index}`} defaultChecked={index < 3} />
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Status</CardTitle>
                    <CardDescription>Control the visibility of this job</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="draft" onValueChange={setJobStatus}>
                      <div className="flex items-center space-x-2 space-y-0">
                        <RadioGroupItem value="draft" id="draft" />
                        <Label htmlFor="draft">Draft</Label>
                      </div>
                      <div className="flex items-center space-x-2 space-y-0">
                        <RadioGroupItem value="published" id="published" />
                        <Label htmlFor="published">Published</Label>
                      </div>
                      <div className="flex items-center space-x-2 space-y-0">
                        <RadioGroupItem value="archived" id="archived" />
                        <Label htmlFor="archived">Archived</Label>
                      </div>
                    </RadioGroup>

                    <div className="mt-4 text-sm text-muted-foreground">
                      {jobStatus === "draft" && "This job will be saved but not visible to users."}
                      {jobStatus === "published" && "This job will be visible to all users."}
                      {jobStatus === "archived" && "This job will be archived and not visible to users."}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Featured Job</CardTitle>
                    <CardDescription>Make this job stand out</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Switch id="featured" />
                      <Label htmlFor="featured">Mark as Featured</Label>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Featured jobs appear at the top of search results and on the homepage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Control how users are notified</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="email-notification" defaultChecked />
                      <Label htmlFor="email-notification">Send Email Notification</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="sms-notification" />
                      <Label htmlFor="sms-notification">Send SMS Notification</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="push-notification" defaultChecked />
                      <Label htmlFor="push-notification">Send Push Notification</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Publish Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="publish-date">Publish Date</Label>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <Input id="publish-date" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="publish-time">Publish Time</Label>
                      <Input id="publish-time" type="time" />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-2">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Job"}
                  </Button>
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                  <Button type="button" variant="ghost" className="text-muted-foreground">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

