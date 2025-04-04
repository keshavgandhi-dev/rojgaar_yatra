import Link from "next/link"
import { Search, Download, FileText, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PreviousPapersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Previous Year <span className="text-red-600">Question Papers</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Download previous year question papers for all major competitive exams
              </p>
              <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search papers by exam name..." className="pl-8 w-full" />
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter">Browse Question Papers</h2>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Exam Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="upsc">UPSC</SelectItem>
                    <SelectItem value="ssc">SSC</SelectItem>
                    <SelectItem value="banking">Banking</SelectItem>
                    <SelectItem value="railway">Railway</SelectItem>
                    <SelectItem value="state">State PSC</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="2024">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Tabs defaultValue="upsc" className="space-y-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="upsc">UPSC</TabsTrigger>
                <TabsTrigger value="ssc">SSC</TabsTrigger>
                <TabsTrigger value="banking">Banking</TabsTrigger>
                <TabsTrigger value="railway">Railway</TabsTrigger>
                <TabsTrigger value="state">State PSC</TabsTrigger>
              </TabsList>

              <TabsContent value="upsc" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "UPSC CSE Prelims 2024",
                      date: "May 26, 2024",
                      papers: ["GS Paper I", "CSAT Paper II"],
                      isNew: true,
                    },
                    {
                      title: "UPSC CSE Mains 2023",
                      date: "September 15-24, 2023",
                      papers: ["GS Papers I, II, III, IV", "Essay", "Optional Papers"],
                      isNew: false,
                    },
                    {
                      title: "UPSC CAPF 2024",
                      date: "August 4, 2024",
                      papers: ["Paper I", "Paper II"],
                      isNew: true,
                    },
                    {
                      title: "UPSC NDA & NA 2024",
                      date: "April 21, 2024",
                      papers: ["Mathematics", "General Ability Test"],
                      isNew: false,
                    },
                    {
                      title: "UPSC CDS 2024",
                      date: "February 4, 2024",
                      papers: ["English", "General Knowledge", "Mathematics"],
                      isNew: false,
                    },
                    {
                      title: "UPSC IES 2023",
                      date: "June 23, 2023",
                      papers: ["GS & Engineering Aptitude", "Technical Papers"],
                      isNew: false,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {item.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium">Available Papers:</span>
                            <ul className="mt-1 space-y-1">
                              {item.papers.map((paper, i) => (
                                <li key={i} className="flex items-center">
                                  <FileText className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                  {paper}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={`/previous-papers/upsc/${index + 1}`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ssc" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "SSC CGL Tier I 2024",
                      date: "July 15-25, 2024",
                      papers: [
                        "General Intelligence & Reasoning",
                        "General Awareness",
                        "Quantitative Aptitude",
                        "English Comprehension",
                      ],
                      isNew: true,
                    },
                    {
                      title: "SSC CGL Tier II 2023",
                      date: "October 10-12, 2023",
                      papers: ["Quantitative Abilities", "English Language", "Statistics", "General Studies"],
                      isNew: false,
                    },
                    {
                      title: "SSC CHSL Tier I 2024",
                      date: "March 1-10, 2024",
                      papers: [
                        "General Intelligence",
                        "English Language",
                        "Quantitative Aptitude",
                        "General Awareness",
                      ],
                      isNew: false,
                    },
                    {
                      title: "SSC MTS 2023",
                      date: "September 1-14, 2023",
                      papers: ["Paper I", "Paper II"],
                      isNew: false,
                    },
                    {
                      title: "SSC GD Constable 2023",
                      date: "February 10-28, 2023",
                      papers: ["Computer Based Examination"],
                      isNew: false,
                    },
                    {
                      title: "SSC CPO 2024",
                      date: "June 5-20, 2024",
                      papers: ["Paper I", "Paper II"],
                      isNew: true,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {item.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium">Available Papers:</span>
                            <ul className="mt-1 space-y-1">
                              {item.papers.map((paper, i) => (
                                <li key={i} className="flex items-center">
                                  <FileText className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                  {paper}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={`/previous-papers/ssc/${index + 1}`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="banking" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "IBPS PO Prelims 2024",
                      date: "October 12-19, 2024",
                      papers: ["English Language", "Quantitative Aptitude", "Reasoning Ability"],
                      isNew: true,
                    },
                    {
                      title: "IBPS PO Mains 2023",
                      date: "November 26, 2023",
                      papers: [
                        "Reasoning & Computer Aptitude",
                        "General/Economy/Banking Awareness",
                        "English Language",
                        "Data Analysis & Interpretation",
                      ],
                      isNew: false,
                    },
                    {
                      title: "SBI PO Prelims 2024",
                      date: "January 4-9, 2024",
                      papers: ["English Language", "Quantitative Aptitude", "Reasoning Ability"],
                      isNew: false,
                    },
                    {
                      title: "SBI PO Mains 2023",
                      date: "December 5, 2023",
                      papers: [
                        "Reasoning & Computer Aptitude",
                        "Data Analysis & Interpretation",
                        "General/Economy/Banking Awareness",
                        "English Language",
                      ],
                      isNew: false,
                    },
                    {
                      title: "RBI Grade B Phase I 2024",
                      date: "May 9, 2024",
                      papers: ["General Awareness", "English Language", "Quantitative Aptitude", "Reasoning"],
                      isNew: true,
                    },
                    {
                      title: "NABARD Grade A 2023",
                      date: "September 23, 2023",
                      papers: ["Phase I", "Phase II"],
                      isNew: false,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {item.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium">Available Papers:</span>
                            <ul className="mt-1 space-y-1">
                              {item.papers.map((paper, i) => (
                                <li key={i} className="flex items-center">
                                  <FileText className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                  {paper}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={`/previous-papers/banking/${index + 1}`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="railway" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "RRB NTPC CBT-1 2023",
                      date: "December 15-30, 2023",
                      papers: ["General Awareness", "Mathematics", "General Intelligence & Reasoning"],
                      isNew: false,
                    },
                    {
                      title: "RRB NTPC CBT-2 2024",
                      date: "February 10-28, 2024",
                      papers: ["General Awareness", "Mathematics", "General Intelligence & Reasoning"],
                      isNew: false,
                    },
                    {
                      title: "RRB Group D 2023",
                      date: "August 17-25, 2023",
                      papers: ["Computer Based Test"],
                      isNew: false,
                    },
                    {
                      title: "RRB ALP CBT-1 2024",
                      date: "May 10-20, 2024",
                      papers: [
                        "Mathematics",
                        "General Intelligence & Reasoning",
                        "General Science",
                        "General Awareness",
                      ],
                      isNew: true,
                    },
                    {
                      title: "RRB ALP CBT-2 2023",
                      date: "October 5-15, 2023",
                      papers: ["Part A", "Part B"],
                      isNew: false,
                    },
                    {
                      title: "RRB JE CBT-1 2024",
                      date: "April 12-30, 2024",
                      papers: [
                        "Mathematics",
                        "General Intelligence & Reasoning",
                        "General Awareness",
                        "General Science",
                      ],
                      isNew: true,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {item.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium">Available Papers:</span>
                            <ul className="mt-1 space-y-1">
                              {item.papers.map((paper, i) => (
                                <li key={i} className="flex items-center">
                                  <FileText className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                  {paper}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={`/previous-papers/railway/${index + 1}`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="state" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "UPPSC PCS Prelims 2024",
                      date: "March 5, 2024",
                      papers: ["General Studies I", "General Studies II (CSAT)"],
                      isNew: false,
                    },
                    {
                      title: "BPSC 69th Prelims 2024",
                      date: "September 30, 2024",
                      papers: ["General Studies"],
                      isNew: true,
                    },
                    {
                      title: "RPSC RAS Prelims 2023",
                      date: "October 1, 2023",
                      papers: ["General Knowledge & General Science", "General Aptitude Test"],
                      isNew: false,
                    },
                    {
                      title: "MPPSC State Service Prelims 2024",
                      date: "May 26, 2024",
                      papers: ["General Studies", "General Aptitude Test"],
                      isNew: true,
                    },
                    {
                      title: "TNPSC Group 1 Prelims 2023",
                      date: "November 19, 2023",
                      papers: ["General Studies"],
                      isNew: false,
                    },
                    {
                      title: "KPSC KAS Prelims 2024",
                      date: "February 3, 2024",
                      papers: ["General Studies Paper I", "General Studies Paper II"],
                      isNew: false,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {item.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium">Available Papers:</span>
                            <ul className="mt-1 space-y-1">
                              {item.papers.map((paper, i) => (
                                <li key={i} className="flex items-center">
                                  <FileText className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                  {paper}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href={`/previous-papers/state/${index + 1}`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download Papers
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Most Downloaded Papers</h2>
              <p className="text-muted-foreground mt-2">Popular question papers among our users</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "UPSC CSE Prelims 2023",
                  downloads: "245K+",
                  date: "May 28, 2023",
                },
                {
                  title: "SSC CGL Tier I 2023",
                  downloads: "198K+",
                  date: "July 14-27, 2023",
                },
                {
                  title: "IBPS PO Prelims 2023",
                  downloads: "156K+",
                  date: "October 7-14, 2023",
                },
                {
                  title: "RRB NTPC CBT-1 2022",
                  downloads: "132K+",
                  date: "December 28, 2022",
                },
              ].map((item, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-300">
                        {item.downloads} downloads
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="font-medium mb-4">{item.title}</h3>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="#">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">How to Use Previous Papers</h2>
              <p className="text-muted-foreground mt-2">Maximize your preparation with these tips</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Analyze Exam Pattern</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Study the pattern of questions, marking scheme, and difficulty level to understand what to expect in
                    the actual exam. Identify recurring topics and important areas that are frequently asked.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Practice Time Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Solve previous papers in a timed environment to improve your speed and accuracy. This will help you
                    manage time effectively during the actual exam and complete all questions within the allotted time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Identify Weak Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    After solving papers, analyze your performance to identify weak areas that need more attention.
                    Focus on improving these areas through targeted study and practice to boost your overall score.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-red-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Need More Practice Materials?</h2>
            <p className="max-w-[700px] mx-auto mb-6">
              Check out our mock tests and topic-wise practice questions to enhance your preparation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-red-50" asChild>
                <Link href="/mock-tests">Explore Mock Tests</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/study-material">Study Materials</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

