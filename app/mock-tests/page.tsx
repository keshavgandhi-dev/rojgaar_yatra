import Link from "next/link"
import { Search, Clock, Calendar, BookOpen, CheckCircle, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function MockTestsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Online <span className="text-red-600">Mock Tests</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Practice with exam-like questions and boost your preparation
              </p>
              <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search mock tests by exam name..." className="pl-8 w-full" />
                </div>
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  <TabsTrigger value="all">All Tests</TabsTrigger>
                  <TabsTrigger value="upsc">UPSC</TabsTrigger>
                  <TabsTrigger value="ssc">SSC</TabsTrigger>
                  <TabsTrigger value="banking">Banking</TabsTrigger>
                  <TabsTrigger value="railway">Railway</TabsTrigger>
                  <TabsTrigger value="state">State PSC</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "UPSC CSE Prelims Full Mock Test",
                      questions: 100,
                      time: 120,
                      difficulty: "Medium",
                      category: "UPSC",
                      isNew: true,
                      isFree: false,
                    },
                    {
                      title: "SSC CGL Tier I Complete Mock",
                      questions: 100,
                      time: 60,
                      difficulty: "Medium",
                      category: "SSC",
                      isNew: false,
                      isFree: true,
                    },
                    {
                      title: "IBPS PO Prelims Mock Test",
                      questions: 100,
                      time: 60,
                      difficulty: "Hard",
                      category: "Banking",
                      isNew: true,
                      isFree: false,
                    },
                    {
                      title: "RRB NTPC CBT-1 Full Mock",
                      questions: 100,
                      time: 90,
                      difficulty: "Medium",
                      category: "Railway",
                      isNew: false,
                      isFree: true,
                    },
                    {
                      title: "UPSC CSE Prelims - Indian Polity",
                      questions: 50,
                      time: 60,
                      difficulty: "Hard",
                      category: "UPSC",
                      isNew: false,
                      isFree: false,
                    },
                    {
                      title: "SSC CHSL Tier I Mock Test",
                      questions: 100,
                      time: 60,
                      difficulty: "Easy",
                      category: "SSC",
                      isNew: true,
                      isFree: true,
                    },
                    {
                      title: "SBI PO Prelims Mock Test",
                      questions: 100,
                      time: 60,
                      difficulty: "Medium",
                      category: "Banking",
                      isNew: false,
                      isFree: false,
                    },
                    {
                      title: "UPPSC PCS Prelims Mock Test",
                      questions: 150,
                      time: 120,
                      difficulty: "Hard",
                      category: "State PSC",
                      isNew: true,
                      isFree: false,
                    },
                    {
                      title: "RRB Group D Full Mock Test",
                      questions: 100,
                      time: 90,
                      difficulty: "Medium",
                      category: "Railway",
                      isNew: false,
                      isFree: true,
                    },
                  ].map((test, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2" variant={test.category === "UPSC" ? "default" : "outline"}>
                              {test.category}
                            </Badge>
                            {test.isNew && <Badge className="ml-2 bg-green-500">New</Badge>}
                            {test.isFree && <Badge className="ml-2 bg-blue-500">Free</Badge>}
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              test.difficulty === "Easy"
                                ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                                : test.difficulty === "Medium"
                                  ? "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                                  : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                            }
                          >
                            {test.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{test.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{test.questions} Questions</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{test.time} Minutes</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                          <Link href={`/mock-tests/${index + 1}`}>Start Test</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Similar content for other tabs (UPSC, SSC, Banking, Railway, State PSC) */}
              {/* For brevity, I'm not duplicating all the tab contents */}
            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Your Test Performance</h2>
              <p className="text-muted-foreground mt-2">Track your progress across different exams</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tests Attempted</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">Last test: 2 days ago</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Average Score</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold">68%</div>
                  <div className="mt-2">
                    <Progress value={68} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Highest Score</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold">85%</div>
                  <p className="text-sm text-muted-foreground">UPSC CSE Prelims Mock</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Time Spent</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold">18h</div>
                  <p className="text-sm text-muted-foreground">Total practice time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Recent Test Results</h2>
              <p className="text-muted-foreground mt-2">Your performance in recent mock tests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "UPSC CSE Prelims Full Mock Test",
                  date: "May 10, 2025",
                  score: 72,
                  time: 115,
                  correct: 72,
                  incorrect: 24,
                  skipped: 4,
                },
                {
                  title: "SSC CGL Tier I Complete Mock",
                  date: "May 5, 2025",
                  score: 65,
                  time: 58,
                  correct: 65,
                  incorrect: 30,
                  skipped: 5,
                },
                {
                  title: "IBPS PO Prelims Mock Test",
                  date: "April 28, 2025",
                  score: 78,
                  time: 55,
                  correct: 78,
                  incorrect: 18,
                  skipped: 4,
                },
                {
                  title: "RRB NTPC CBT-1 Full Mock",
                  date: "April 20, 2025",
                  score: 68,
                  time: 85,
                  correct: 68,
                  incorrect: 28,
                  skipped: 4,
                },
              ].map((result, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className={
                          result.score >= 75
                            ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                            : result.score >= 60
                              ? "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                              : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                        }
                      >
                        {result.score}%
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {result.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex flex-col items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                          <span className="text-green-600 dark:text-green-400 font-medium">{result.correct}</span>
                          <span className="text-xs text-muted-foreground">Correct</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                          <span className="text-red-600 dark:text-red-400 font-medium">{result.incorrect}</span>
                          <span className="text-xs text-muted-foreground">Incorrect</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-900/20 rounded-md">
                          <span className="text-gray-600 dark:text-gray-400 font-medium">{result.skipped}</span>
                          <span className="text-xs text-muted-foreground">Skipped</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Time Taken: {result.time} mins</span>
                        <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                          <Link href={`/mock-tests/results/${index + 1}`}>
                            <BarChart className="h-4 w-4" />
                            View Analysis
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Test Series Packages</h2>
              <p className="text-muted-foreground mt-2">Comprehensive test series for complete exam preparation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>UPSC CSE Test Series</CardTitle>
                  <CardDescription>Complete preparation for Civil Services Exam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₹1,999</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">15 Full-length Mock Tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">30 Subject-wise Tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Detailed Performance Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Previous Year Questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">1 Year Validity</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Buy Now</Button>
                </CardFooter>
              </Card>

              <Card className="transition-all hover:shadow-lg border-red-200 dark:border-red-900">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>SSC Complete Test Series</CardTitle>
                    <Badge className="bg-red-600">Popular</Badge>
                  </div>
                  <CardDescription>For SSC CGL, CHSL, MTS & other exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₹1,499</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">20 Full-length Mock Tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">40 Section-wise Tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Detailed Performance Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Previous Year Questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">1 Year Validity</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Buy Now</Button>
                </CardFooter>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Banking Exams Test Series</CardTitle>
                  <CardDescription>For IBPS, SBI, RBI & other banking exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₹1,299</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">25 Full-length Mock Tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">50 Section-wise Tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Detailed Performance Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Previous Year Questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">1 Year Validity</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Buy Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-red-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Test Your Knowledge?</h2>
            <p className="max-w-[700px] mx-auto mb-6">
              Start practicing with our free mock tests and improve your exam scores
            </p>
            <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-red-50" asChild>
              <Link href="/mock-tests/free">Try Free Mock Tests</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

