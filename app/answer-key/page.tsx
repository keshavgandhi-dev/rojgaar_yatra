import { ArrowRight, Calendar, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function AnswerKeyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-2 pb-4 sm:py-8 md:py-12 bg-muted/30">
          <div className="container px-3 sm:px-4">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Download <span className="text-red-600">Answer Keys</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                Access official answer keys and submit objections for various exams.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-8 md:py-12">
          <div className="container px-3 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Download Answer Key</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2 sm:space-y-4">
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
                            A7X9P2
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">Download Answer Key</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Objection Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 sm:p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2 text-sm sm:text-base">Important Instructions</h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
                        <li>Objections must be submitted within the specified time period.</li>
                        <li>Each objection must be supported with proper reasoning and references.</li>
                        <li>Multiple objections can be submitted for different questions.</li>
                        <li>Objections submitted after the deadline will not be considered.</li>
                        <li>Keep a copy of your objection submission for future reference.</li>
                      </ul>
                    </div>

                    <div className="p-3 sm:p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2 text-sm sm:text-base">Required Information</h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
                        <li>Question number and paper set</li>
                        <li>Your proposed answer</li>
                        <li>Supporting reference (if any)</li>
                        <li>Detailed explanation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">When are answer keys usually released?</h3>
                    <p className="text-muted-foreground">
                      Answer keys are typically released within 7-14 days after the examination. The exact date varies
                      depending on the exam conducting body.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">How can I challenge the answer key?</h3>
                    <p className="text-muted-foreground">
                      You can challenge the answer key by logging into the official website of the exam conducting body,
                      selecting the question(s) you want to challenge, providing a clear explanation with supporting
                      references, and paying the required fee per objection.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Is there a fee for challenging the answer key?</h3>
                    <p className="text-muted-foreground">
                      Yes, most exam conducting bodies charge a fee per question challenged. The fee is usually refunded
                      if your challenge is accepted.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">
                      How long does it take to release the final answer key?
                    </h3>
                    <p className="text-muted-foreground">
                      The final answer key is usually released within 2-4 weeks after the objection period ends. This
                      time is used to review all objections and make necessary corrections.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

