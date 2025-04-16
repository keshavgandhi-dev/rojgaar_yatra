"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

const personalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  pincode: z.string().min(6, { message: "Pincode must be at least 6 digits." }),
})

const educationSchema = z.object({
  highestQualification: z.string().min(1, { message: "Please select your highest qualification." }),
  university: z.string().min(2, { message: "University name must be at least 2 characters." }),
  yearOfPassing: z.string().min(4, { message: "Please enter a valid year." }),
  percentage: z.string().min(1, { message: "Please enter your percentage." }),
})

const experienceSchema = z.object({
  hasExperience: z.boolean(),
  yearsOfExperience: z.string().optional(),
  currentCompany: z.string().optional(),
  currentDesignation: z.string().optional(),
  currentSalary: z.string().optional(),
})

const documentSchema = z.object({
  resume: z.string().min(1, { message: "Please upload your resume." }),
  photo: z.string().min(1, { message: "Please upload your photo." }),
  idProof: z.string().min(1, { message: "Please upload your ID proof." }),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

type FormStep = "personal" | "education" | "experience" | "documents" | "review" | "payment"

export function ApplicationForm({ jobId, jobTitle }: { jobId: string, jobTitle: string }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<FormStep>("personal")
  const [formData, setFormData] = useState({
    personal: {},
    education: {},
    experience: {},
    documents: {},
  })

  // Personal Info Form
  const personalForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    },
  })

  // Education Form
  const educationForm = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      highestQualification: "",
      university: "",
      yearOfPassing: "",
      percentage: "",
    },
  })

  // Experience Form
  const experienceForm = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      hasExperience: false,
      yearsOfExperience: "",
      currentCompany: "",
      currentDesignation: "",
      currentSalary: "",
    },
  })

  // Documents Form
  const documentsForm = useForm<z.infer<typeof documentSchema>>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      resume: "",
      photo: "",
      idProof: "",
      agreeToTerms: false,
    },
  })

  const onPersonalSubmit = (data: z.infer<typeof personalInfoSchema>) => {
    setFormData(prev => ({ ...prev, personal: data }))
    setCurrentStep("education")
  }

  const onEducationSubmit = (data: z.infer<typeof educationSchema>) => {
    setFormData(prev => ({ ...prev, education: data }))
    setCurrentStep("experience")
  }

  const onExperienceSubmit = (data: z.infer<typeof experienceSchema>) => {
    setFormData(prev => ({ ...prev, experience: data }))
    setCurrentStep("documents")
  }

  const onDocumentsSubmit = (data: z.infer<typeof documentSchema>) => {
    setFormData(prev => ({ ...prev, documents: data }))
    setCurrentStep("review")
  }

  const handleSubmitApplication = () => {
    // In a real application, you would submit the form data to your backend here
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully. Proceeding to payment...",
    })
    
    // Redirect to payment page
    setCurrentStep("payment")
  }

  const handlePayment = () => {
    // In a real application, you would handle payment processing here
    toast({
      title: "Payment Successful",
      description: "Your payment has been processed successfully.",
    })
    
    // Redirect to success page
    router.push(`/jobs/${jobId}/apply/success`)
  }

  return (
    <div className="container max-w-3xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Application for {jobTitle}</CardTitle>
          <CardDescription>
            Please fill out all the required information to apply for this position.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={currentStep} className="w-full">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="personal" disabled={currentStep !== "personal"}>Personal</TabsTrigger>
              <TabsTrigger value="education" disabled={currentStep !== "education"}>Education</TabsTrigger>
              <TabsTrigger value="experience" disabled={currentStep !== "experience"}>Experience</TabsTrigger>
              <TabsTrigger value="documents" disabled={currentStep !== "documents"}>Documents</TabsTrigger>
              <TabsTrigger value="review" disabled={currentStep !== "review" && currentStep !== "payment"}>Review</TabsTrigger>
            </TabsList>
            
            {/* Personal Information */}
            <TabsContent value="personal">
              <Form {...personalForm}>
                <form onSubmit={personalForm.handleSubmit(onPersonalSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={personalForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={personalForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={personalForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={personalForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={personalForm.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Mumbai" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={personalForm.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input placeholder="Maharashtra" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={personalForm.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pincode</FormLabel>
                          <FormControl>
                            <Input placeholder="400001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Next: Education Details</Button>
                </form>
              </Form>
            </TabsContent>
            
            {/* Education */}
            <TabsContent value="education">
              <Form {...educationForm}>
                <form onSubmit={educationForm.handleSubmit(onEducationSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={educationForm.control}
                      name="highestQualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Highest Qualification</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select qualification" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="10th">10th</SelectItem>
                              <SelectItem value="12th">12th</SelectItem>
                              <SelectItem value="diploma">Diploma</SelectItem>
                              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                              <SelectItem value="master">Master's Degree</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={educationForm.control}
                      name="university"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>University/Board</FormLabel>
                          <FormControl>
                            <Input placeholder="Delhi University" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={educationForm.control}
                      name="yearOfPassing"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Passing</FormLabel>
                          <FormControl>
                            <Input placeholder="2022" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={educationForm.control}
                      name="percentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Percentage/CGPA</FormLabel>
                          <FormControl>
                            <Input placeholder="85%" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("personal")}>
                      Back
                    </Button>
                    <Button type="submit">Next: Experience Details</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            
            {/* Experience */}
            <TabsContent value="experience">
              <Form {...experienceForm}>
                <form onSubmit={experienceForm.handleSubmit(onExperienceSubmit)} className="space-y-6">
                  <FormField
                    control={experienceForm.control}
                    name="hasExperience"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Do you have any work experience?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => field.onChange(value === "true")}
                            defaultValue={field.value ? "true" : "false"}
                            className="flex flex-row space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="true" id="experience-yes" />
                              <Label htmlFor="experience-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="false" id="experience-no" />
                              <Label htmlFor="experience-no">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {experienceForm.watch("hasExperience") && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={experienceForm.control}
                        name="yearsOfExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years of Experience</FormLabel>
                            <FormControl>
                              <Input placeholder="2 years" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="currentCompany"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current/Last Company</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC Corp" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="currentDesignation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current/Last Designation</FormLabel>
                            <FormControl>
                              <Input placeholder="Software Engineer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={experienceForm.control}
                        name="currentSalary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current/Last Salary (per annum)</FormLabel>
                            <FormControl>
                              <Input placeholder="₹600,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("education")}>
                      Back
                    </Button>
                    <Button type="submit">Next: Document Upload</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            
            {/* Documents */}
            <TabsContent value="documents">
              <Form {...documentsForm}>
                <form onSubmit={documentsForm.handleSubmit(onDocumentsSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <FormField
                      control={documentsForm.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume/CV (PDF only)</FormLabel>
                          <FormControl>
                            <Input type="file" accept=".pdf" onChange={(e) => field.onChange(e.target.value)} />
                          </FormControl>
                          <FormDescription>
                            Upload your latest resume in PDF format (max 2MB)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={documentsForm.control}
                      name="photo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passport Size Photo</FormLabel>
                          <FormControl>
                            <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.value)} />
                          </FormControl>
                          <FormDescription>
                            Upload a recent passport size photo (JPEG/PNG, max 1MB)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={documentsForm.control}
                      name="idProof"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID Proof</FormLabel>
                          <FormControl>
                            <Input type="file" accept=".pdf,image/*" onChange={(e) => field.onChange(e.target.value)} />
                          </FormControl>
                          <FormDescription>
                            Upload a valid ID proof (Aadhar/PAN/Voter ID) (PDF/JPEG/PNG, max 1MB)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={documentsForm.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the terms and conditions
                            </FormLabel>
                            <FormDescription>
                              By checking this box, you agree to our Terms of Service and Privacy Policy.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setCurrentStep("experience")}>
                      Back
                    </Button>
                    <Button type="submit">Review Application</Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            
            {/* Review */}
            <TabsContent value="review">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Review Your Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Please review your application details before submitting.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Personal Information</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {Object.entries(formData.personal).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-sm font-medium capitalize">{key}: </span>
                          <span className="text-sm">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Education Details</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {Object.entries(formData.education).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                          <span className="text-sm">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Experience Details</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {Object.entries(formData.experience).map(([key, value]) => {
                        if (key === "hasExperience") {
                          return (
                            <div key={key} className="col-span-2">
                              <span className="text-sm font-medium">Has Experience: </span>
                              <span className="text-sm">{value ? "Yes" : "No"}</span>
                            </div>
                          )
                        }
                        
                        if (value) {
                          return (
                            <div key={key}>
                              <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                              <span className="text-sm">{value as string}</span>
                            </div>
                          )
                        }
                        
                        return null
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Documents</h4>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      <div>
                        <span className="text-sm font-medium">Resume: </span>
                        <span className="text-sm">Uploaded</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Photo: </span>
                        <span className="text-sm">Uploaded</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">ID Proof: </span>
                        <span className="text-sm">Uploaded</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setCurrentStep("documents")}>
                    Back
                  </Button>
                  <Button onClick={handleSubmitApplication}>Submit Application & Proceed to Payment</Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Payment */}
            <TabsContent value="payment">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Payment Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Please complete the payment to finalize your application.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Application Fee</span>
                    <span>₹500.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">GST (18%)</span>
                    <span>₹90.00</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-bold">
                    <span>Total Amount</span>
                    <span>₹590.00</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <RadioGroup defaultValue="card" className="space-y-2">
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="card" id="payment-card" />
                        <Label htmlFor="payment-card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="upi" id="payment-upi" />
                        <Label htmlFor="payment-upi">UPI</Label>
                      </div\

