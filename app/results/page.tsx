import { ArrowRight, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Check Your <span className="text-red-600">Results</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get instant access to your exam results and check your performance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="check" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="check">Check Result</TabsTrigger>
                <TabsTrigger value="latest">Latest Results</TabsTrigger>
                <TabsTrigger value="cutoff">Cutoff Marks</TabsTrigger>
              </TabsList>

              <TabsContent value="check" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Enter Your Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="exam">Select Exam</Label>
                            <select
                              id="exam"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="">Select an exam</option>
                              <option value="upsc-cse-2024">UPSC CSE 2024</option>
                              <option value="ssc-gd-2024">SSC GD 2024</option>
                              <option value="rbi-grade-b-2024">RBI Grade B 2024</option>
                              <option value="ibps-po-2024">IBPS PO 2024</option>
                              <option value="ssc-chsl-2024">SSC CHSL 2024</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="roll-number">Roll Number</Label>
                            <Input id="roll-number" placeholder="Enter your roll number" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="mt-8 p-6 border rounded-lg bg-card">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold">Sample Result</h3>
                    <p className="text-sm text-muted-foreground">This is a sample result for demonstration purposes</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="font-medium">Candidate Name</div>
                      <div>Rahul Sharma</div>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="font-medium">Roll Number</div>
                      <div>CSE2024123456</div>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b">
                      <div className="font-medium">Exam</div>
                      <div>UPSC CSE 2024 (Prelims)</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Paper 1 (GS)</div>
                        <div className="text-2xl font-bold text-red-600">89.5</div>
                        <div className="text-xs text-muted-foreground">Out of 200</div>
                      </div>

                      <div className="p-4 bg-muted rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Paper 2 (CSAT)</div>
                        <div className="text-2xl font-bold text-red-600">76.2</div>
                        <div className="text-xs text-muted-foreground">Out of 200</div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">Result Status</div>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">QUALIFIED FOR MAINS</div>
                    </div>

                    <div className="flex justify-center gap-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Print Result
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="latest" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Card
                          key={i}
                          className="overflow-hidden transition-all hover:shadow-md border-muted hover:border-red-200 dark:hover:border-red-900"
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-lg">
                                {
                                  [
                                    "UPSC CSE 2024",
                                    "SSC GD 2024",
                                    "RBI Grade B 2024",
                                    "IBPS PO 2024",
                                    "SSC CHSL 2024",
                                    "SBI PO 2024",
                                    "UPSC CAPF 2024",
                                    "RRB NTPC 2024",
                                  ][i - 1]
                                }
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <p className="text-xs text-muted-foreground">
                                  Released:{" "}
                                  {
                                    ["10 Feb", "05 Feb", "28 Jan", "25 Jan", "20 Jan", "15 Jan", "10 Jan", "05 Jan"][
                                      i - 1
                                    ]
                                  }{" "}
                                  2025
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {i < 4 && <Badge className="bg-green-500">New</Badge>}
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
              </TabsContent>

              <TabsContent value="cutoff" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cutoff Marks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cutoff-exam">Select Exam</Label>
                        <select
                          id="cutoff-exam"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an exam</option>
                          <option value="upsc-cse-2024">UPSC CSE 2024</option>
                          <option value="ssc-gd-2024">SSC GD 2024</option>
                          <option value="rbi-grade-b-2024">RBI Grade B 2024</option>
                          <option value="ibps-po-2024">IBPS PO 2024</option>
                          <option value="ssc-chsl-2024">SSC CHSL 2024</option>
                        </select>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-3 font-medium">UPSC CSE 2024 Prelims Cutoff Marks</div>
                        <div className="p-4">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 px-4 font-medium">Category</th>
                                <th className="text-center py-2 px-4 font-medium">Cutoff Marks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 px-4">General</td>
                                <td className="text-center py-2 px-4">98.66</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">EWS</td>
                                <td className="text-center py-2 px-4">90.17</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">OBC</td>
                                <td className="text-center py-2 px-4">91.34</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">SC</td>
                                <td className="text-center py-2 px-4">82.23</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">ST</td>
                                <td className="text-center py-2 px-4">77.08</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">PwD</td>
                                <td className="text-center py-2 px-4">71.42</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        <p>
                          Note: Candidates must score minimum qualifying marks in Paper-II (CSAT) which is 33% (66
                          marks).
                        </p>
                      </div>

                      <Button variant="outline" className="flex items-center gap-2 mx-auto">
                        <FileText className="h-4 w-4" />
                        Download Complete Cutoff PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

