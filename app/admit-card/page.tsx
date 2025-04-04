import { ArrowRight, Calendar, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

export default function AdmitCardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download Your <span className="text-red-600">Admit Card</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Access your exam hall ticket and important exam instructions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Download Admit Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="exam">Select Exam</Label>
                        <select
                          id="exam"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an exam</option>
                          <option value="ssc-chsl-2024">SSC CHSL 2024</option>
                          <option value="rrb-ntpc-2024">RRB NTPC 2024</option>
                          <option value="ibps-clerk-2024">IBPS Clerk 2024</option>
                          <option value="upsc-cse-2025">UPSC CSE 2025 (Prelims)</option>
                          <option value="ssc-cgl-2025">SSC CGL 2025 (Tier I)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="roll-number">Registration/Roll Number</Label>
                        <Input id="roll-number" placeholder="Enter your registration or roll number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="captcha">Enter Captcha</Label>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <Input id="captcha" placeholder="Enter captcha" />
                          </div>
                          <div className="h-10 w-24 bg-muted flex items-center justify-center rounded-md text-sm font-bold tracking-widest">
                            B3K7M9
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">Download Admit Card</Button>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Latest Admit Cards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <Card
                          key={i}
                          className="overflow-hidden transition-all hover:shadow-md border-muted hover:border-red-200 dark:hover:border-red-900"
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-lg">
                                {["SSC CHSL 2024", "RRB NTPC 2024", "IBPS Clerk 2024"][i - 1]}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <p className="text-xs text-muted-foreground">
                                  Exam Date: {["15 Mar", "25 Mar", "10 Apr"][i - 1]} 2025
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {i < 3 && <Badge className="bg-yellow-500">Urgent</Badge>}
                              <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0">
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Exam Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium mb-2">Important Instructions</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          <li>Candidates must carry their Admit Card and a valid Photo ID proof to the exam center.</li>
                          <li>Reach the exam center at least 1 hour before the exam time.</li>
                          <li>
                            Electronic devices including mobile phones, calculators, etc. are not allowed in the exam
                            hall.
                          </li>
                          <li>Candidates should follow all COVID-19 protocols as per the guidelines.</li>
                          <li>Candidates are advised to check the exam center location a day before the exam.</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium mb-2">Documents to Carry</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          <li>Admit Card (2 copies)</li>
                          <li>Valid Photo ID (Aadhar Card/Voter ID/Driving License/Passport)</li>
                          <li>2 Passport size photographs (same as uploaded in application)</li>
                          <li>Black/Blue ballpoint pen</li>
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <FileText className="h-4 w-4" />
                        Download Complete Guidelines
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Admit Card */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Sample Admit Card</h2>

              <Card className="border-2 border-dashed border-muted-foreground/20 p-1">
                <CardContent className="p-6 space-y-6">
                  <div className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground">
                        Logo
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Staff Selection Commission</h3>
                        <p className="text-sm text-muted-foreground">
                          Combined Higher Secondary Level Examination 2024
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-bold">ADMIT CARD</h4>
                      <p className="text-xs text-muted-foreground">Tier-I Examination</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Roll Number:</div>
                        <div>1234567890</div>

                        <div className="font-medium">Candidate Name:</div>
                        <div>Rahul Sharma</div>

                        <div className="font-medium">Father's Name:</div>
                        <div>Rajesh Sharma</div>

                        <div className="font-medium">Date of Birth:</div>
                        <div>15-05-1998</div>

                        <div className="font-medium">Category:</div>
                        <div>General</div>

                        <div className="font-medium">Gender:</div>
                        <div>Male</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-32 w-24 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground">
                        Photo
                      </div>
                      <div className="h-12 w-24 bg-muted mt-2 rounded-md flex items-center justify-center text-xs text-muted-foreground">
                        Signature
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold mb-2">Examination Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="font-medium">Exam Date:</div>
                      <div>15-03-2025</div>

                      <div className="font-medium">Reporting Time:</div>
                      <div>08:30 AM</div>

                      <div className="font-medium">Exam Time:</div>
                      <div>10:00 AM - 12:00 PM</div>

                      <div className="font-medium">Venue:</div>
                      <div>SSC Examination Center, New Delhi</div>

                      <div className="font-medium">Address:</div>
                      <div>123, Exam Center Road, New Delhi - 110001</div>
                    </div>
                  </div>

                  <div className="border-t pt-4 text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Important Instructions:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Candidates must carry this Admit Card and a valid Photo ID proof to the exam center.</li>
                      <li>Reach the exam center at least 1 hour before the exam time.</li>
                      <li>
                        Electronic devices including mobile phones, calculators, etc. are not allowed in the exam hall.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center mt-6">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Sample Admit Card
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

