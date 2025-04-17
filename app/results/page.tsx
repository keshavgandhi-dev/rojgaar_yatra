import { ArrowRight, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-2 pb-4 sm:py-8 md:py-12 bg-muted/30">
          <div className="container px-3 sm:px-4">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Check Your <span className="text-red-600">Results</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                Get instant access to your exam results and check your performance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-8 md:py-12">
          <div className="container px-3 sm:px-4">
            <Tabs defaultValue="check" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="check">Check Result</TabsTrigger>
                <TabsTrigger value="latest">Latest Results</TabsTrigger>
                <TabsTrigger value="cutoff">Cutoff Marks</TabsTrigger>
              </TabsList>

              <TabsContent value="check" className="mt-4 sm:mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enter Your Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="space-y-2 sm:space-y-4">
                          <div className="space-y-2">
                          <Label htmlFor="roll-number">Registration/Roll Number</Label>
                          <Input id="roll-number" placeholder="Enter your registration or roll number" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      </div>

                      <Button className="w-full bg-red-600 hover:bg-red-700">Check Result</Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 sm:mt-8 p-4 sm:p-6 border rounded-lg bg-card">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold">Sample Result</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">This is a sample result for demonstration purposes</p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="font-medium text-sm sm:text-base">Candidate Name</div>
                      <div className="text-sm sm:text-base">Rahul Sharma</div>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="font-medium text-sm sm:text-base">Roll Number</div>
                      <div className="text-sm sm:text-base">CSE2024123456</div>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="font-medium text-sm sm:text-base">Exam</div>
                      <div className="text-sm sm:text-base">UPSC CSE 2024 (Prelims)</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 bg-muted rounded-lg text-center">
                        <div className="text-xs sm:text-sm text-muted-foreground">Paper 1 (GS)</div>
                        <div className="text-xl sm:text-2xl font-bold text-red-600">89.5</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">Out of 200</div>
                      </div>

                      <div className="p-3 sm:p-4 bg-muted rounded-lg text-center">
                        <div className="text-xs sm:text-sm text-muted-foreground">Paper 2 (CSAT)</div>
                        <div className="text-xl sm:text-2xl font-bold text-red-600">76.2</div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground">Out of 200</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="latest" className="mt-4 sm:mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Add latest results cards here */}
                    </div>
              </TabsContent>

              <TabsContent value="cutoff" className="mt-4 sm:mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Add cutoff marks cards here */}
                    </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

