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
import { useParams } from "next/navigation"

interface EditJobPageProps {
  params: {
    id: string
  }
}

export default function EditJobPage({ params }: EditJobPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [jobStatus, setJobStatus] = useState("draft")

  // This would normally fetch the job data from an API
  const job = {
    id: params?.id || "",
    title: "Bank PO",
    department: "Banking",
    location: "All India",
    postedDate: "2023-04-01",
    lastDate: "2023-05-15",
    status: "Active",
    applications: "1,245",
    description: "Join as a Probationary Officer in leading banks across India...",
    requirements: [
      "Bachelor's degree with minimum 60%",
      "Age limit: 21-30 years",
      "Indian citizenship",
    ],
    salary: "₹40,000 - ₹60,000 per month",
    vacancies: 1500,
    qualification: "Graduate from any recognized University",
    experience: "No prior experience required",
    ageLimit: "21-30 years",
    selectionProcess: "Prelims, Mains, Interview",
  }

  if (!job.id) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="container py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Job Not Found</h1>
            <p className="text-muted-foreground">The job you are looking for does not exist.</p>
            <Link href="/admin/jobs" className="mt-4 inline-flex items-center text-sm font-medium text-red-600">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Jobs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Job updated successfully",
      description: "The job has been updated and changes are now live.",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-auto">
        <div className="container py-4">
          <div className="mb-4">
            <Link href={`/admin/jobs/${job.id}`} className="inline-flex items-center text-sm font-medium text-red-600">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Job Details
            </Link>
            <h1 className="text-3xl font-bold tracking-tight mt-2">Edit Job</h1>
            <p className="text-muted-foreground">Update the job posting details</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Update the basic details of the job posting</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" defaultValue={job.title} placeholder="e.g., UPSC Civil Services 2025" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" defaultValue={job.department} placeholder="e.g., Union Public Service Commission" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue={job.location} placeholder="e.g., All India" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vacancies">Number of Vacancies</Label>
                        <Input id="vacancies" type="number" defaultValue={job.vacancies} placeholder="e.g., 1200" required />
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
                        defaultValue={job.description}
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
                    <CardDescription>Update the eligibility criteria and requirements</CardDescription>
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
                        <Input id="age-min" type="number" defaultValue={21} placeholder="e.g., 21" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age-max">Maximum Age (Years)</Label>
                        <Input id="age-max" type="number" defaultValue={30} placeholder="e.g., 32" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Additional Requirements</Label>
                      <Textarea
                        id="requirements"
                        defaultValue={job.requirements.join("\n")}
                        placeholder="Enter any additional requirements or skills needed..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Application Details</CardTitle>
                    <CardDescription>Update application dates and fees</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Application Start Date</Label>
                        <Input id="start-date" type="date" defaultValue={job.postedDate} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="end-date">Application End Date</Label>
                        <Input id="end-date" type="date" defaultValue={job.lastDate} required />
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
                          <Label htmlFor="fee-sc">SC/ST</Label>
                          <Input id="fee-sc" type="number" placeholder="e.g., 0" required />
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
                    <CardDescription>Update the selection process stages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Selection Stages</Label>
                        <Button type="button" variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" /> Add Stage
                        </Button>
                      </div>

                      {job.selectionProcess.split(", ").map((stage, index) => (
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
                    <CardDescription>Update the documents required for application</CardDescription>
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
                    <CardDescription>Manage the job posting status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Current Status</Label>
                      <RadioGroup defaultValue={job.status.toLowerCase()} onValueChange={setJobStatus}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="draft" id="draft" />
                          <Label htmlFor="draft">Draft</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="active" id="active" />
                          <Label htmlFor="active">Active</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="closed" id="closed" />
                          <Label htmlFor="closed">Closed</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Visibility</Label>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="featured">Featured Job</Label>
                        <Switch id="featured" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="urgent">Urgent Hiring</Label>
                        <Switch id="urgent" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sliding-news">Show in Sliding News</Label>
                        <Switch id="sliding-news" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                      {isSubmitting ? "Saving Changes..." : "Save Changes"}
                    </Button>
                    <Button type="button" variant="outline" className="w-full">
                      Preview Changes
                    </Button>
                    <Button type="button" variant="destructive" className="w-full">
                      Delete Job
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 