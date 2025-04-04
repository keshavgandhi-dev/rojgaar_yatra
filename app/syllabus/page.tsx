import Link from "next/link"
import { Search, Download, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SyllabusPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Exam <span className="text-red-600">Syllabus</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive syllabus for all major competitive exams in India
              </p>
              <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search syllabus by exam name..." className="pl-8 w-full" />
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
            <Tabs defaultValue="upsc" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger value="upsc">UPSC</TabsTrigger>
                  <TabsTrigger value="ssc">SSC</TabsTrigger>
                  <TabsTrigger value="banking">Banking</TabsTrigger>
                  <TabsTrigger value="railway">Railway</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upsc" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "UPSC Civil Services Examination",
                      description: "Syllabus for Prelims, Mains and Interview",
                      updated: "Jan 2025",
                      isNew: true,
                    },
                    {
                      title: "UPSC CAPF",
                      description: "Central Armed Police Forces Examination Syllabus",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                    {
                      title: "UPSC NDA & NA",
                      description: "National Defence Academy & Naval Academy Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                    {
                      title: "UPSC CDS",
                      description: "Combined Defence Services Examination",
                      updated: "Nov 2024",
                      isNew: false,
                    },
                    {
                      title: "UPSC IES",
                      description: "Indian Engineering Services Examination",
                      updated: "Jan 2025",
                      isNew: false,
                    },
                    {
                      title: "UPSC SCRA",
                      description: "Special Class Railway Apprentices Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Updated: {item.updated}</span>
                          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                            <Link href={`/syllabus/upsc/${index + 1}`}>
                              <FileText className="h-4 w-4" />
                              View
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
                      title: "SSC CGL",
                      description: "Combined Graduate Level Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                    {
                      title: "SSC CHSL",
                      description: "Combined Higher Secondary Level Examination",
                      updated: "Jan 2025",
                      isNew: false,
                    },
                    {
                      title: "SSC GD Constable",
                      description: "General Duty Constable Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                    {
                      title: "SSC MTS",
                      description: "Multi Tasking Staff Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                    {
                      title: "SSC CPO",
                      description: "Central Police Organization Examination",
                      updated: "Jan 2025",
                      isNew: false,
                    },
                    {
                      title: "SSC JE",
                      description: "Junior Engineer Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Updated: {item.updated}</span>
                          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                            <Link href={`/syllabus/ssc/${index + 1}`}>
                              <FileText className="h-4 w-4" />
                              View
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
                      title: "IBPS PO",
                      description: "Probationary Officer Examination",
                      updated: "Jan 2025",
                      isNew: true,
                    },
                    {
                      title: "IBPS Clerk",
                      description: "Clerical Cadre Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                    {
                      title: "SBI PO",
                      description: "State Bank of India Probationary Officer Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                    {
                      title: "SBI Clerk",
                      description: "State Bank of India Clerical Cadre Examination",
                      updated: "Jan 2025",
                      isNew: false,
                    },
                    {
                      title: "RBI Grade B",
                      description: "Reserve Bank of India Officer Grade B Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                    {
                      title: "NABARD Grade A & B",
                      description: "National Bank for Agriculture and Rural Development Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Updated: {item.updated}</span>
                          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                            <Link href={`/syllabus/banking/${index + 1}`}>
                              <FileText className="h-4 w-4" />
                              View
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
                      title: "RRB NTPC",
                      description: "Non-Technical Popular Categories Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                    {
                      title: "RRB Group D",
                      description: "Level 1 Posts Examination",
                      updated: "Jan 2025",
                      isNew: false,
                    },
                    {
                      title: "RRB ALP",
                      description: "Assistant Loco Pilot & Technician Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                    {
                      title: "RRB JE",
                      description: "Junior Engineer Examination",
                      updated: "Feb 2025",
                      isNew: true,
                    },
                    {
                      title: "RRB SSE",
                      description: "Senior Section Engineer Examination",
                      updated: "Jan 2025",
                      isNew: false,
                    },
                    {
                      title: "RRB Paramedical",
                      description: "Paramedical Categories Examination",
                      updated: "Dec 2024",
                      isNew: false,
                    },
                  ].map((item, index) => (
                    <Card key={index} className="transition-all hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          {item.isNew && <Badge className="bg-green-500">New</Badge>}
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Updated: {item.updated}</span>
                          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                            <Link href={`/syllabus/railway/${index + 1}`}>
                              <FileText className="h-4 w-4" />
                              View
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
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Popular Syllabus Downloads</h2>
              <p className="text-muted-foreground mt-2">Most downloaded syllabus by our users</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "UPSC CSE Prelims",
                  downloads: "125K+",
                  icon: BookOpen,
                },
                {
                  title: "SSC CGL Tier I & II",
                  downloads: "98K+",
                  icon: BookOpen,
                },
                {
                  title: "IBPS PO Prelims",
                  downloads: "87K+",
                  icon: BookOpen,
                },
                {
                  title: "RRB NTPC CBT 1",
                  downloads: "76K+",
                  icon: BookOpen,
                },
              ].map((item, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.downloads} downloads</p>
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
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Syllabus Study Resources</h2>
              <p className="text-muted-foreground mt-2">Additional resources to help you prepare better</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Topic-wise Study Material</CardTitle>
                  <CardDescription>Comprehensive study material organized by topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        Indian Polity & Constitution
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        Indian & World Geography
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        Indian & World History
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        Economics & Finance
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        General Science
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Previous Year Papers</CardTitle>
                  <CardDescription>Analyze past exam patterns and questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        UPSC CSE (2020-2024)
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        SSC CGL (2020-2024)
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        IBPS PO (2020-2024)
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        RRB NTPC (2020-2024)
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        View All Papers
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mock Tests</CardTitle>
                  <CardDescription>Practice with exam-like questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        UPSC CSE Prelims Mock Tests
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        SSC CGL Tier I Mock Tests
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        Banking Exams Mock Tests
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        Railway Exams Mock Tests
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <Link href="#" className="text-sm hover:text-red-600 transition-colors">
                        View All Mock Tests
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-red-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Need Help with Exam Preparation?</h2>
            <p className="max-w-[700px] mx-auto mb-6">
              Join our premium coaching programs and get expert guidance for your exam preparation
            </p>
            <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-red-50" asChild>
              <Link href="/coaching">Explore Coaching Programs</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

