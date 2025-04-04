import Link from "next/link"
import { Search, Download, FileText, BookOpen, Video, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function StudyMaterialPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Study <span className="text-red-600">Materials</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive study resources for all competitive exams
              </p>
              <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search study materials by topic or exam..."
                    className="pl-8 w-full"
                  />
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
                  <TabsTrigger value="all">All Materials</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="books">Books</TabsTrigger>
                  <TabsTrigger value="videos">Video Lectures</TabsTrigger>
                  <TabsTrigger value="pdfs">PDFs</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Indian Polity Complete Notes",
                      description:
                        "Comprehensive notes covering the entire Indian Polity syllabus for UPSC and State PSCs",
                      type: "notes",
                      pages: 250,
                      isNew: true,
                      isFree: false,
                    },
                    {
                      title: "Modern Indian History",
                      description: "Detailed study material on Modern Indian History from 1857 to Independence",
                      type: "notes",
                      pages: 180,
                      isNew: false,
                      isFree: true,
                    },
                    {
                      title: "Quantitative Aptitude Formulas",
                      description: "Quick reference guide for all important formulas for competitive exams",
                      type: "pdfs",
                      pages: 45,
                      isNew: false,
                      isFree: true,
                    },
                    {
                      title: "Indian Economy Crash Course",
                      description: "Video lectures covering all important topics of Indian Economy",
                      type: "videos",
                      duration: "8 hours",
                      isNew: true,
                      isFree: false,
                    },
                    {
                      title: "Geography of India",
                      description: "Complete study material on Physical, Economic and Human Geography of India",
                      type: "notes",
                      pages: 200,
                      isNew: false,
                      isFree: false,
                    },
                    {
                      title: "General Science for Competitive Exams",
                      description: "Simplified notes on Physics, Chemistry and Biology for all competitive exams",
                      type: "notes",
                      pages: 220,
                      isNew: true,
                      isFree: false,
                    },
                    {
                      title: "Reasoning & Logical Ability",
                      description: "Practice material for verbal and non-verbal reasoning",
                      type: "pdfs",
                      pages: 150,
                      isNew: false,
                      isFree: true,
                    },
                    {
                      title: "English Grammar & Vocabulary",
                      description: "Comprehensive guide for improving English language skills",
                      type: "books",
                      pages: 180,
                      isNew: false,
                      isFree: false,
                    },
                    {
                      title: "Current Affairs Monthly Digest",
                      description: "Monthly compilation of important current affairs for competitive exams",
                      type: "pdfs",
                      pages: 60,
                      isNew: true,
                      isFree: true,
                    },
                  ].map((material, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2" variant={material.type === "notes" ? "default" : "outline"}>
                              {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                            </Badge>
                            {material.isNew && <Badge className="ml-2 bg-green-500">New</Badge>}
                            {material.isFree && <Badge className="ml-2 bg-blue-500">Free</Badge>}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <CardDescription>{material.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm">
                          {material.type === "videos" ? (
                            <div className="flex items-center">
                              <Video className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>Duration: {material.duration}</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{material.pages} Pages</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                          <Link href={`/study-material/${material.type}/${index + 1}`}>
                            {material.isFree ? "Download Now" : "View Details"}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Similar content for other tabs (Notes, Books, Videos, PDFs, Courses) */}
              {/* For brevity, I'm not duplicating all the tab contents */}
            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Popular Study Materials</h2>
              <p className="text-muted-foreground mt-2">Most downloaded resources by our users</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Indian Polity by Laxmikant",
                  downloads: "350K+",
                  type: "Book Summary",
                  icon: BookOpen,
                },
                {
                  title: "Quantitative Aptitude Formulas",
                  downloads: "280K+",
                  type: "Quick Reference",
                  icon: FileText,
                },
                {
                  title: "Current Affairs 2025",
                  downloads: "210K+",
                  type: "Monthly PDF",
                  icon: FileText,
                },
                {
                  title: "General Science Notes",
                  downloads: "175K+",
                  type: "Comprehensive Notes",
                  icon: BookOpen,
                },
              ].map((item, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.downloads} downloads</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="#">
                        <Download className="mr-2 h-4 w-4" />
                        Download
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
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Study Packages</h2>
              <p className="text-muted-foreground mt-2">
                Comprehensive study material packages for complete preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>UPSC CSE Complete Package</CardTitle>
                  <CardDescription>All-in-one study material for Civil Services Exam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₹2,999</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Complete Subject-wise Notes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Previous Year Question Papers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Monthly Current Affairs Updates</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Video Lectures on Important Topics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Mock Test Series</span>
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
                    <CardTitle>SSC Complete Package</CardTitle>
                    <Badge className="bg-red-600">Popular</Badge>
                  </div>
                  <CardDescription>Comprehensive material for all SSC exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₹1,999</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Subject-wise Study Material</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Previous Year Question Papers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Topic-wise Practice Questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Video Lectures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Mock Test Series</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Buy Now</Button>
                </CardFooter>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Banking Exams Package</CardTitle>
                  <CardDescription>Complete study material for banking exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">₹1,799</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Section-wise Study Material</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Previous Year Question Papers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Banking Awareness Notes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Video Lectures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Mock Test Series</span>
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
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Need Personalized Guidance?</h2>
            <p className="max-w-[700px] mx-auto mb-6">
              Join our mentorship program and get personalized guidance from experienced mentors
            </p>
            <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-red-50" asChild>
              <Link href="/mentorship">Explore Mentorship Program</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

