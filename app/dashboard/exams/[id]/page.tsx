import Link from "next/link"
import { Calendar, Clock, MapPin, Download, ArrowLeft, FileText, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ExamDetailsPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  // Sample data based on ID
  const examData = {
    title:
      id <= 3
        ? ["UPSC Prelims 2025", "SSC CGL Tier I 2025", "IBPS PO Prelims 2025"][id - 1]
        : ["SSC CHSL 2024", "IBPS Clerk 2024"][id - 4],
    date: id <= 3 ? ["15 Apr 2025", "30 Apr 2025", "20 Apr 2025"][id - 1] : ["15 Feb 2025", "10 Jan 2025"][id - 4],
    time:
      id <= 3
        ? ["09:30 AM - 12:30 PM", "10:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"][id - 1]
        : ["09:30 AM - 12:30 PM", "10:00 AM - 12:00 PM"][id - 4],
    reportingTime: id <= 3 ? ["08:30 AM", "09:00 AM", "01:00 PM"][id - 1] : ["08:30 AM", "09:00 AM"][id - 4],
    venue:
      id <= 3
        ? [
            "Examination Center, Karol Bagh, Delhi",
            "Examination Hall, Andheri, Mumbai",
            "Test Center, Salt Lake, Kolkata",
          ][id - 1]
        : ["Examination Center, Karol Bagh, Delhi", "Examination Hall, Andheri, Mumbai"][id - 4],
    status: id <= 3 ? "Upcoming" : "Completed",
    resultStatus: id === 4 ? "Declared" : id === 5 ? "Awaited" : "Pending",
    rollNumber: `RJ${id}2025${id * 1000}`,
    applicationNumber: `APP${id}2025${id * 10000}`,
  }

  const isPast = id > 3

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Button variant="outline" size="sm" className="mb-2" asChild>
            <Link href="/dashboard/exams">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Exams
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{examData.title}</h1>
          <p className="text-muted-foreground mt-1">Exam Details and Instructions</p>
        </div>
        {!isPast && (
          <Button className="bg-red-600 hover:bg-red-700" asChild>
            <Link href={`/admit-card/${id}`}>
              <Download className="h-4 w-4 mr-2" />
              Download Admit Card
            </Link>
          </Button>
        )}
        {isPast && examData.resultStatus === "Declared" && (
          <Button className="bg-green-600 hover:bg-green-700" asChild>
            <Link href={`/dashboard/results/1`}>
              <FileText className="h-4 w-4 mr-2" />
              View Result
            </Link>
          </Button>
        )}
      </div>

      {!isPast && (
        <Alert className="bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            Please arrive at the examination center at least 1 hour before the exam start time. Carry your admit card
            and a valid photo ID proof.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle>Exam Information</CardTitle>
            <CardDescription>Details about your examination</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Exam Name</p>
                <p className="font-medium">{examData.title}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Roll Number</p>
                <p className="font-medium">{examData.rollNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Application Number</p>
                <p className="font-medium">{examData.applicationNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Exam Status</p>
                <Badge
                  variant="outline"
                  className={
                    isPast
                      ? "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      : "bg-red-50 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
                  }
                >
                  {examData.status}
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Exam Date</p>
                  <p className="text-sm text-muted-foreground">{examData.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Exam Time</p>
                  <p className="text-sm text-muted-foreground">{examData.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Reporting Time</p>
                  <p className="text-sm text-muted-foreground">{examData.reportingTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Venue</p>
                  <p className="text-sm text-muted-foreground">{examData.venue}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-950">
          <CardHeader>
            <CardTitle>Exam Day Requirements</CardTitle>
            <CardDescription>Items to bring with you</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Printed Admit Card</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Original ID Proof (Aadhar/PAN/Voter ID)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>2 Passport Size Photographs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Black/Blue Ballpoint Pens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Transparent Water Bottle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Simple Wristwatch (Non-Smart)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Exam Pattern</CardTitle>
          <CardDescription>Structure and marking scheme</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>No. of Questions</TableHead>
                  <TableHead>Marks per Question</TableHead>
                  <TableHead>Total Marks</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {id === 1 ? (
                  // UPSC Prelims
                  <>
                    <TableRow>
                      <TableCell className="font-medium">General Studies Paper I</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>200</TableCell>
                      <TableCell>2 hours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CSAT Paper II</TableCell>
                      <TableCell>80</TableCell>
                      <TableCell>2.5</TableCell>
                      <TableCell>200</TableCell>
                      <TableCell>2 hours</TableCell>
                    </TableRow>
                  </>
                ) : id === 2 ? (
                  // SSC CGL
                  <>
                    <TableRow>
                      <TableCell className="font-medium">General Intelligence & Reasoning</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>50</TableCell>
                      <TableCell rowSpan={4}>2 hours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">General Awareness</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Quantitative Aptitude</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">English Comprehension</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>50</TableCell>
                    </TableRow>
                  </>
                ) : (
                  // IBPS PO
                  <>
                    <TableRow>
                      <TableCell className="font-medium">English Language</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell rowSpan={5}>1 hour</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Quantitative Aptitude</TableCell>
                      <TableCell>35</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>35</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Reasoning Ability</TableCell>
                      <TableCell>35</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>35</TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-gray-950">
        <CardHeader>
          <CardTitle>Important Instructions</CardTitle>
          <CardDescription>Please read carefully</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>
                Candidates must reach the examination venue at least 1 hour before the commencement of the examination.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>Electronic devices including mobile phones, calculators, and smart watches are strictly prohibited.</p>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>Candidates must bring their admit card and a valid photo ID proof to the examination center.</p>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>
                No candidate will be allowed to leave the examination hall before the completion of the examination.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>
                Candidates are advised to visit the examination center a day before to familiarize themselves with the
                location.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p>Any violation of examination rules may lead to cancellation of candidature.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

