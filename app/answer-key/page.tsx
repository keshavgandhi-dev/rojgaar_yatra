import { ArrowRight, Calendar, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AnswerKeyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download <span className="text-red-600">Answer Keys</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Access official answer keys for various competitive exams and check your answers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Search Answer Key</CardTitle>
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
                          <option value="upsc-cse-2024">UPSC CSE 2024 (Prelims)</option>
                          <option value="ssc-gd-2024">SSC GD 2024</option>
                          <option value="ssc-chsl-2024">SSC CHSL 2024</option>
                          <option value="ibps-po-2024">IBPS PO 2024</option>
                          <option value="rrb-ntpc-2024">RRB NTPC 2024</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="paper">Select Paper</Label>
                        <select
                          id="paper"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select paper</option>
                          <option value="paper-1">Paper 1 (General Studies)</option>
                          <option value="paper-2">Paper 2 (CSAT)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="set">Select Set/Series</Label>
                        <select
                          id="set"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select set/series</option>
                          <option value="set-a">Set A</option>
                          <option value="set-b">Set B</option>
                          <option value="set-c">Set C</option>
                          <option value="set-d">Set D</option>
                        </select>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">Search Answer Key</Button>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Latest Answer Keys</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <Card
                          key={i}
                          className="overflow-hidden transition-all hover:shadow-md border-muted hover:border-red-200 dark:hover:border-red-900"
                        >
                          <CardContent className="p-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-lg">
                                {["UPSC CSE 2024 (Prelims)", "SSC GD 2024", "SSC CHSL 2024", "IBPS PO 2024"][i - 1]}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <p className="text-xs text-muted-foreground">
                                  Released: {["15 Feb", "10 Feb", "05 Feb", "01 Feb"][i - 1]} 2025
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {i < 3 && <Badge className="bg-green-500">New</Badge>}
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
                    <CardTitle>Objection Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-medium mb-2">Objection Process</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Candidates can raise objections against the provisional answer key within the specified time
                          frame.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          <li>Login to the official website using your credentials</li>
                          <li>Select the question(s) you want to challenge</li>
                          <li>Provide a clear explanation and supporting references</li>
                          <li>Pay the required fee per objection</li>
                          <li>Submit your objections before the deadline</li>
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <FileText className="h-4 w-4" />
                        Check Objection Status
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Answer Key */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Sample Answer Key</h2>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <CardTitle>UPSC CSE 2024 (Prelims) - Paper 1</CardTitle>
                    <Badge className="self-start md:self-auto">Set A</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">Q. No.</TableHead>
                          <TableHead className="w-[80px]">Answer</TableHead>
                          <TableHead>Question</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{i}</TableCell>
                            <TableCell className="font-medium">
                              {["A", "B", "C", "D", "A", "C", "B", "D", "A", "C"][i - 1]}
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              Sample question {i} for UPSC CSE 2024 Prelims examination...
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex justify-center mt-6 gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      View Full Answer Key
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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

