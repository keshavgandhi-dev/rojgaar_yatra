"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Upload,
  AlertCircle,
  Calendar,
  User,
  Mail,
  Phone,
  Home,
  CreditCard,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { use } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { SiteHeader } from "@/components/mobile/layout/site-header"
import { Badge } from "@/components/ui/badge"

export default function JobApplicationPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const jobId = Number.parseInt(resolvedParams.id)
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "Rahul",
    lastName: "Sharma",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    email: "rahul@example.com",
    phone: "9876543210",
    address: "",
    state: "",
    district: "",
    city: "",
    pincode: "",

    // Qualification Details
    qualification: "",
    passingYear: "",
    university: "",
    percentage: "",
    additionalCertifications: "",

    // Document Upload
    aadhaarCard: null,
    photograph: null,
    signature: null,
    degreeCertificate: null,
    categoryCertificate: null,

    // Payment Details
    category: "general",
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    upiId: "",
  })

  // Mock job data based on ID
  const job = {
    title:
      jobId === 1
        ? "UPSC Civil Services 2025"
        : jobId === 2
          ? "SSC CGL 2025"
          : jobId === 3
            ? "IBPS PO 2025"
            : "Government Job Position",
    department:
      jobId === 1
        ? "Union Public Service Commission"
        : jobId === 2
          ? "Staff Selection Commission"
          : jobId === 3
            ? "Institute of Banking Personnel Selection"
            : "Government Department",
    applicationFee:
      jobId === 1
        ? { general: 100, sc: 0, st: 0, obc: 100, ews: 100, pwd: 0 }
        : jobId === 2
          ? { general: 100, sc: 0, st: 0, obc: 100, ews: 100, pwd: 0 }
          : jobId === 3
            ? { general: 175, sc: 175, st: 175, obc: 175, ews: 175, pwd: 175 }
            : { general: 100, sc: 0, st: 0, obc: 100, ews: 100, pwd: 0 },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Move to next step or complete
    if (step < 5) {
      nextStep()
    } else {
      // Redirect to success page
      window.location.href = `/jobs/${jobId}/apply/success`
    }

    setIsLoading(false)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motherName">Mother's Name</Label>
                <Input
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  className="flex gap-4"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">An OTP will be sent to verify your mobile number</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Address Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <Home className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                      <SelectItem value="uttarpradesh">Uttar Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Select value={formData.district} onValueChange={(value) => handleSelectChange("district", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central">Central Delhi</SelectItem>
                      <SelectItem value="north">North Delhi</SelectItem>
                      <SelectItem value="south">South Delhi</SelectItem>
                      <SelectItem value="east">East Delhi</SelectItem>
                      <SelectItem value="west">West Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} required />
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualification">Highest Qualification</Label>
                <Select
                  value={formData.qualification}
                  onValueChange={(value) => handleSelectChange("qualification", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">10th</SelectItem>
                    <SelectItem value="12th">12th</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="ba">B.A.</SelectItem>
                    <SelectItem value="bcom">B.Com</SelectItem>
                    <SelectItem value="bsc">B.Sc</SelectItem>
                    <SelectItem value="btech">B.Tech</SelectItem>
                    <SelectItem value="ma">M.A.</SelectItem>
                    <SelectItem value="mcom">M.Com</SelectItem>
                    <SelectItem value="msc">M.Sc</SelectItem>
                    <SelectItem value="mtech">M.Tech</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passingYear">Passing Year</Label>
                <Select
                  value={formData.passingYear}
                  onValueChange={(value) => handleSelectChange("passingYear", value)}
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
                <Label htmlFor="university">University/Board</Label>
                <Input
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="percentage">CGPA/Percentage</Label>
                <Input
                  id="percentage"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="additionalCertifications">Additional Certifications (Optional)</Label>
                <Input
                  id="additionalCertifications"
                  name="additionalCertifications"
                  value={formData.additionalCertifications}
                  onChange={handleInputChange}
                  placeholder="e.g., GATE, NET, etc."
                />
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Please ensure all educational details are accurate. You will be required to upload supporting documents
                in the next step.
              </AlertDescription>
            </Alert>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Document Requirements</AlertTitle>
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>All documents must be in JPG, PNG, or PDF format</li>
                  <li>Maximum file size: 2MB per document</li>
                  <li>Ensure documents are clearly visible and not blurred</li>
                  <li>Photograph should be recent and passport-sized (3.5cm x 4.5cm)</li>
                  <li>Signature should be on white paper with black ink (3.5cm x 1.5cm)</li>
                </ul>
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="aadhaarCard">Aadhaar Card</Label>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
                    {formData.aadhaarCard ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="h-6 w-6 mr-2" />
                        <span>File uploaded</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileText className="h-10 w-10 mb-2" />
                        <span>No file chosen</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Label
                      htmlFor="aadhaarCard"
                      className="cursor-pointer flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      Choose File
                    </Label>
                    <Input
                      id="aadhaarCard"
                      name="aadhaarCard"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="photograph">Photograph</Label>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
                    {formData.photograph ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="h-6 w-6 mr-2" />
                        <span>File uploaded</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <User className="h-10 w-10 mb-2" />
                        <span>No file chosen</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Label
                      htmlFor="photograph"
                      className="cursor-pointer flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      Choose File
                    </Label>
                    <Input
                      id="photograph"
                      name="photograph"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signature">Signature</Label>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
                    {formData.signature ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="h-6 w-6 mr-2" />
                        <span>File uploaded</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileText className="h-10 w-10 mb-2" />
                        <span>No file chosen</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Label
                      htmlFor="signature"
                      className="cursor-pointer flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      Choose File
                    </Label>
                    <Input
                      id="signature"
                      name="signature"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="degreeCertificate">Degree Certificate</Label>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
                    {formData.degreeCertificate ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="h-6 w-6 mr-2" />
                        <span>File uploaded</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileText className="h-10 w-10 mb-2" />
                        <span>No file chosen</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Label
                      htmlFor="degreeCertificate"
                      className="cursor-pointer flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      Choose File
                    </Label>
                    <Input
                      id="degreeCertificate"
                      name="degreeCertificate"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="categoryCertificate">Category Certificate (if applicable)</Label>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
                    {formData.categoryCertificate ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="h-6 w-6 mr-2" />
                        <span>File uploaded</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileText className="h-10 w-10 mb-2" />
                        <span>No file chosen (Optional)</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <Label
                      htmlFor="categoryCertificate"
                      className="cursor-pointer flex items-center justify-center gap-2 text-sm font-medium h-9 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      Choose File
                    </Label>
                    <Input
                      id="categoryCertificate"
                      name="categoryCertificate"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Application Fee</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                      <SelectItem value="pwd">PwD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Fee Amount</p>
                    <p className="text-2xl font-bold">
                      ₹{job.applicationFee[formData.category as keyof typeof job.applicationFee]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Payment Method</h3>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-red-200 dark:hover:border-red-900">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                    <CreditCard className="h-5 w-5" />
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-red-200 dark:hover:border-red-900">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="cursor-pointer">
                    UPI
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-red-200 dark:hover:border-red-900">
                  <RadioGroupItem value="netbanking" id="netbanking" />
                  <Label htmlFor="netbanking" className="cursor-pointer">
                    Net Banking
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="space-y-4 border rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Expiry Date</Label>
                    <Input
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCvv">CVV</Label>
                    <Input
                      id="cardCvv"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod === "upi" && (
              <div className="space-y-4 border rounded-lg p-6">
                <div className="space-y-2">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input
                    id="upiId"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    placeholder="name@upi"
                    required
                  />
                </div>
              </div>
            )}

            {formData.paymentMethod === "netbanking" && (
              <div className="space-y-4 border rounded-lg p-6">
                <div className="space-y-2">
                  <Label htmlFor="bank">Select Bank</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sbi">State Bank of India</SelectItem>
                      <SelectItem value="hdfc">HDFC Bank</SelectItem>
                      <SelectItem value="icici">ICICI Bank</SelectItem>
                      <SelectItem value="axis">Axis Bank</SelectItem>
                      <SelectItem value="pnb">Punjab National Bank</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Secure Payment</AlertTitle>
              <AlertDescription>
                Your payment information is secure. We use industry-standard encryption to protect your data.
              </AlertDescription>
            </Alert>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <Alert className="bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-900">
              <Check className="h-4 w-4" />
              <AlertTitle>Application Ready for Submission</AlertTitle>
              <AlertDescription>
                Please review your application details before final submission. Once submitted, you cannot make changes.
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                    </div>
                    <div>
                      <span className="font-medium">Father's Name:</span> {formData.fatherName || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">Mother's Name:</span> {formData.motherName || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">Date of Birth:</span> {formData.dob || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">Gender:</span> {formData.gender || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> {formData.email}
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> {formData.phone}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Address:</span> {formData.address || "Not provided"},{" "}
                      {formData.city || ""}, {formData.state || ""}, {formData.pincode || ""}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Qualification Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Highest Qualification:</span>{" "}
                      {formData.qualification || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">Passing Year:</span> {formData.passingYear || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">University/Board:</span> {formData.university || "Not provided"}
                    </div>
                    <div>
                      <span className="font-medium">Percentage/CGPA:</span> {formData.percentage || "Not provided"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Aadhaar Card:</span>{" "}
                      {formData.aadhaarCard ? "Uploaded" : "Not uploaded"}
                    </div>
                    <div>
                      <span className="font-medium">Photograph:</span>{" "}
                      {formData.photograph ? "Uploaded" : "Not uploaded"}
                    </div>
                    <div>
                      <span className="font-medium">Signature:</span> {formData.signature ? "Uploaded" : "Not uploaded"}
                    </div>
                    <div>
                      <span className="font-medium">Degree Certificate:</span>{" "}
                      {formData.degreeCertificate ? "Uploaded" : "Not uploaded"}
                    </div>
                    <div>
                      <span className="font-medium">Category Certificate:</span>{" "}
                      {formData.categoryCertificate ? "Uploaded" : "Not uploaded"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Category:</span> {formData.category.toUpperCase()}
                    </div>
                    <div>
                      <span className="font-medium">Fee Amount:</span> ₹
                      {job.applicationFee[formData.category as keyof typeof job.applicationFee]}
                    </div>
                    <div>
                      <span className="font-medium">Payment Method:</span>{" "}
                      {formData.paymentMethod === "card"
                        ? "Credit/Debit Card"
                        : formData.paymentMethod === "upi"
                          ? "UPI"
                          : "Net Banking"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="declaration" className="rounded border-gray-300" required />
                <label htmlFor="declaration" className="text-sm">
                  I hereby declare that all the information provided by me is true to the best of my knowledge. I
                  understand that any false information may result in rejection of my application.
                </label>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-8">
        <div className="container px-4">
          <div className="mb-8">
            <Link 
              href={`/jobs/${jobId}`} 
              className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors group"
            >
              <ArrowLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Job Details
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {job.title}
            </h1>
            <p className="text-muted-foreground mt-1">{job.department}</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Application Progress
              </h2>
              <span className="text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
                Step {step}/5
              </span>
            </div>
            <div className="relative">
              <Progress value={step * 20} className="h-2 bg-gray-100 dark:bg-gray-800" />
              <div className="absolute inset-0 flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-5 w-5 rounded-full border-2 transition-all duration-300 ${
                      step >= s
                        ? "border-red-600 bg-red-600 scale-110"
                        : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-5 text-xs font-medium">
              <div className={`text-center ${step >= 1 ? "text-red-600" : "text-gray-500 dark:text-gray-400"}`}>
                Personal
              </div>
              <div className={`text-center ${step >= 2 ? "text-red-600" : "text-gray-500 dark:text-gray-400"}`}>
                Qualification
              </div>
              <div className={`text-center ${step >= 3 ? "text-red-600" : "text-gray-500 dark:text-gray-400"}`}>
                Documents
              </div>
              <div className={`text-center ${step >= 4 ? "text-red-600" : "text-gray-500 dark:text-gray-400"}`}>
                Payment
              </div>
              <div className={`text-center ${step >= 5 ? "text-red-600" : "text-gray-500 dark:text-gray-400"}`}>
                Review
              </div>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-xl dark:shadow-none overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
              <CardTitle className="text-xl font-bold">
                {step === 1 && "Personal Details"}
                {step === 2 && "Qualification Details"}
                {step === 3 && "Document Upload"}
                {step === 4 && "Payment"}
                {step === 5 && "Review & Submit"}
              </CardTitle>
              <CardDescription className="text-red-100/90 mt-1">
                {step === 1 && "Provide your personal and contact information"}
                {step === 2 && "Enter your educational qualifications"}
                {step === 3 && "Upload required documents"}
                {step === 4 && "Complete payment of application fee"}
                {step === 5 && "Review your application before final submission"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 bg-white dark:bg-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderStepContent()}

                <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep} 
                      className="w-full sm:w-auto border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-800 dark:hover:border-red-700 dark:hover:bg-red-950 transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                  )}
                  {step < 5 ? (
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto ml-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Next
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto ml-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Jobs Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container px-4">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Similar Jobs You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((job) => (
              <Card key={job} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-bold">UPSC Civil Services 2025</CardTitle>
                      <CardDescription className="mt-1">Union Public Service Commission</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      New
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Date:</span>
                      <span className="font-medium">15 Apr 2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Vacancies:</span>
                      <span className="font-medium">1200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Age Limit:</span>
                      <span className="font-medium">21-32 years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Qualification:</span>
                      <span className="font-medium">Graduation</span>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

