import Link from "next/link"
import { FileText, Download, Eye, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Results</h1>
        <p className="text-muted-foreground mt-1">View your examination results and performance</p>
      </div>

      <Tabs defaultValue="declared" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="declared">Declared Results</TabsTrigger>
          <TabsTrigger value="awaited">Awaited Results</TabsTrigger>
        </TabsList>

        <TabsContent value="declared" className="space-y-4">
          <Card className="overflow-hidden border-l-4 border-l-green-600 bg-white dark:bg-gray-950">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">SSC CHSL 2024</h3>
                    <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                      Qualified
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Result Declared: 15 Feb 2025 | Exam Date: 10 Jan 2025
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">Your Score</p>
                      <p className="text-xl font-bold">
                        156 <span className="text-sm font-normal text-muted-foreground">/ 200</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">Cut-off Score</p>
                      <p className="text-xl font-bold">
                        135 <span className="text-sm font-normal text-muted-foreground">/ 200</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">Percentile</p>
                      <p className="text-xl font-bold">92.5%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>General Knowledge</span>
                        <span>42/50</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Reasoning</span>
                        <span>38/50</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Quantitative Aptitude</span>
                        <span>35/50</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>English</span>
                        <span>41/50</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                    <Link href="/dashboard/results/1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" asChild>
                    <Link href="/dashboard/results/1/download">
                      <Download className="h-4 w-4 mr-2" />
                      Download Result
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-l-4 border-l-red-600 bg-white dark:bg-gray-950">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">IBPS Clerk 2023</h3>
                    <Badge className="bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
                      Not Qualified
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Result Declared: 10 Dec 2024 | Exam Date: 15 Nov 2024
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">Your Score</p>
                      <p className="text-xl font-bold">
                        118 <span className="text-sm font-normal text-muted-foreground">/ 200</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">Cut-off Score</p>
                      <p className="text-xl font-bold">
                        125 <span className="text-sm font-normal text-muted-foreground">/ 200</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">Percentile</p>
                      <p className="text-xl font-bold">68.2%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>General Knowledge</span>
                        <span>32/50</span>
                      </div>
                      <Progress value={64} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Reasoning</span>
                        <span>28/50</span>
                      </div>
                      <Progress value={56} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Quantitative Aptitude</span>
                        <span>30/50</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>English</span>
                        <span>28/50</span>
                      </div>
                      <Progress value={56} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                    <Link href="/dashboard/results/2">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" asChild>
                    <Link href="/dashboard/results/2/download">
                      <Download className="h-4 w-4 mr-2" />
                      Download Result
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="awaited" className="space-y-4">
          {[1, 2].map((i) => (
            <Card key={i} className="overflow-hidden border-l-4 border-l-yellow-600 bg-white dark:bg-gray-950">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{["UPSC Prelims 2025", "SSC CGL Tier I 2025"][i - 1]}</h3>
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800">
                        Result Awaited
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Exam Date: {["15 Apr", "30 Apr"][i - 1]} 2025</p>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      <span>Expected Result Date: {["15 May", "30 May"][i - 1]} 2025</span>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/exams/${i}`}>
                        <FileText className="h-4 w-4 mr-2" />
                        View Exam Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

