import Link from "next/link"
import { ArrowLeft, Download, FileText, CheckCircle, XCircle, AlertCircle, BarChart, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ResultDetailsPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  // Sample data based on ID
  const resultData = {
    title: id === 1 ? "SSC CHSL 2024" : "IBPS Clerk 2023",
    date: id === 1 ? "15 Feb 2025" : "10 Dec 2024",
    examDate: id === 1 ? "10 Jan 2025" : "15 Nov 2024",
    status: id === 1 ? "Qualified" : "Not Qualified",
    score: id === 1 ? 156 : 118,
    totalMarks: 200,
    cutoff: id === 1 ? 135 : 125,
    percentile: id === 1 ? 92.5 : 68.2,
    rank: id === 1 ? 1245 : 8976,
    totalCandidates: 150000,
    sections: [
      {
        name: "General Knowledge",
        score: id === 1 ? 42 : 32,
        total: 50,
        percentage: id === 1 ? 84 : 64,
      },
      {
        name: "Reasoning",
        score: id === 1 ? 38 : 28,
        total: 50,
        percentage: id === 1 ? 76 : 56,
      },
      {
        name: "Quantitative Aptitude",
        score: id === 1 ? 35 : 30,
        total: 50,
        percentage: id === 1 ? 70 : 60,
      },
      {
        name: "English",
        score: id === 1 ? 41 : 28,
        total: 50,
        percentage: id === 1 ? 82 : 56,
      },
    ],
    rollNumber: `RJ${id}2025${id * 1000}`,
    applicationNumber: `APP${id}2025${id * 10000}`,
  }

  const isQualified = resultData.status === "Qualified"

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Button variant="outline" size="sm" className="mb-2" asChild>
            <Link href="/dashboard/results">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Results
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{resultData.title} Result</h1>
          <p className="text-muted-foreground mt-1">Detailed performance analysis</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" asChild>
          <Link href={`/dashboard/results/${id}/download`}>
            <Download className="h-4 w-4 mr-2" />
            Download Result
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-white dark:bg-gray-950">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Result Summary</CardTitle>
              <Badge
                className={
                  isQualified
                    ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                    : "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
                }
              >
                {resultData.status}
              </Badge>
            </div>
            <CardDescription>
              Result Declared: {resultData.date} | Exam Date: {resultData.examDate}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-red-100 dark:bg-red-900/30 p-2 mb-2">
                  <FileText className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-sm text-muted-foreground">Your Score</p>
                <p className="text-2xl font-bold">{resultData.score}</p>
                <p className="text-sm text-muted-foreground">out of {resultData.totalMarks}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2 mb-2">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-muted-foreground">Your Rank</p>
                <p className="text-2xl font-bold">{resultData.rank}</p>
                <p className="text-sm text-muted-foreground">out of {resultData.totalCandidates}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-2 mb-2">
                  <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm text-muted-foreground">Percentile</p>
                <p className="text-2xl font-bold">{resultData.percentile}%</p>
                <p className="text-sm text-muted-foreground">Cut-off: {resultData.cutoff}</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Section-wise Performance</h3>
              <div className="space-y-4">
                {resultData.sections.map((section, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{section.name}</span>
                        <span className="text-sm text-muted-foreground">
                          ({section.score}/{section.total})
                        </span>
                      </div>
                      <span className="text-sm font-medium">{section.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <Progress value={section.percentage} className="h-2" />
                      </div>
                      <div className="w-6">
                        {section.percentage >= 70 ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : section.percentage >= 50 ? (
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle>Candidate Details</CardTitle>
            <CardDescription>Your examination information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p className="font-medium">Rahul Sharma</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Roll Number</p>
                <p className="font-medium">{resultData.rollNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Application Number</p>
                <p className="font-medium">{resultData.applicationNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Category</p>
                <p className="font-medium">General</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Exam Center</p>
                <p className="font-medium">Delhi</p>
              </div>
            </div>

            <Separator />

            {isQualified ? (
              <div className="rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-400">Congratulations!</h4>
                    <p className="text-sm text-green-700 dark:text-green-500 mt-1">
                      You have qualified for the next round. Please check your email for further instructions.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800 dark:text-red-400">Not Qualified</h4>
                    <p className="text-sm text-red-700 dark:text-red-500 mt-1">
                      Unfortunately, you did not qualify for the next round. Keep practicing and try again.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Detailed Score Analysis</CardTitle>
          <CardDescription>Question-wise breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Correct</TableHead>
                  <TableHead>Incorrect</TableHead>
                  <TableHead>Not Attempted</TableHead>
                  <TableHead>Marks Obtained</TableHead>
                  <TableHead>Total Marks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultData.sections.map((section, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{section.name}</TableCell>
                    <TableCell className="text-green-600 dark:text-green-400">
                      {section.score - (id === 1 ? index : index + 2)}
                    </TableCell>
                    <TableCell className="text-red-600 dark:text-red-400">{id === 1 ? index + 3 : index + 8}</TableCell>
                    <TableCell>
                      {50 - (section.score - (id === 1 ? index : index + 2)) - (id === 1 ? index + 3 : index + 8)}
                    </TableCell>
                    <TableCell>{section.score}</TableCell>
                    <TableCell>{section.total}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50">
                  <TableCell className="font-bold">Total</TableCell>
                  <TableCell className="text-green-600 dark:text-green-400 font-bold">
                    {resultData.sections.reduce((acc, section) => acc + (section.score - (id === 1 ? 1 : 3)), 0)}
                  </TableCell>
                  <TableCell className="text-red-600 dark:text-red-400 font-bold">
                    {resultData.sections.reduce((acc, section, index) => acc + (id === 1 ? index + 3 : index + 8), 0)}
                  </TableCell>
                  <TableCell className="font-bold">
                    {200 -
                      resultData.sections.reduce((acc, section) => acc + (section.score - (id === 1 ? 1 : 3)), 0) -
                      resultData.sections.reduce((acc, section, index) => acc + (id === 1 ? index + 3 : index + 8), 0)}
                  </TableCell>
                  <TableCell className="font-bold">{resultData.score}</TableCell>
                  <TableCell className="font-bold">{resultData.totalMarks}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>What to do after your result</CardDescription>
        </CardHeader>
        <CardContent>
          {isQualified ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Check Your Email</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    You will receive an email with instructions for the next round. Make sure to check your spam folder.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Prepare for Mains Examination</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Start preparing for the Mains examination. Check our study materials section for resources.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Download Your Admit Card</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Admit cards for the next round will be available from 10 Mar 2025. Keep checking your dashboard.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Analyze Your Performance</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Review your section-wise performance to identify areas for improvement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Explore Study Resources</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check our study materials and mock tests to better prepare for your next attempt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Apply for Upcoming Exams</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check our jobs section for upcoming examination notifications and apply early.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/study-material">
                <FileText className="h-4 w-4 mr-2" />
                Study Materials
              </Link>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/mock-tests">
                <BarChart className="h-4 w-4 mr-2" />
                Mock Tests
              </Link>
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 flex-1" asChild>
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

