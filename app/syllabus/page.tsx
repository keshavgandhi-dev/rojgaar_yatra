import { ArrowRight, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function SyllabusPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-2 pb-4 sm:py-8 md:py-12 bg-muted/30">
          <div className="container px-3 sm:px-4">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Exam <span className="text-red-600">Syllabus</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                Access detailed syllabus and exam patterns for various competitive exams.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-8 md:py-12">
          <div className="container px-3 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                  title: "UPSC Civil Services",
                  description: "Prelims, Mains, and Interview syllabus for UPSC CSE",
                  papers: 2,
                  subjects: 9,
                  icon: <BookOpen className="h-6 w-6" />,
                },
                    {
                      title: "SSC CGL",
                  description: "Tier I, II, III, and IV syllabus for SSC CGL",
                  papers: 4,
                  subjects: 4,
                  icon: <BookOpen className="h-6 w-6" />,
                    },
                    {
                  title: "IBPS PO",
                  description: "Prelims and Mains syllabus for IBPS PO",
                  papers: 2,
                  subjects: 5,
                  icon: <BookOpen className="h-6 w-6" />,
                },
                    {
                  title: "RRB NTPC",
                  description: "CBT I and II syllabus for RRB NTPC",
                  papers: 2,
                  subjects: 4,
                  icon: <BookOpen className="h-6 w-6" />,
                    },
                    {
                  title: "SSC CHSL",
                  description: "Tier I and II syllabus for SSC CHSL",
                  papers: 2,
                  subjects: 4,
                  icon: <BookOpen className="h-6 w-6" />,
                    },
                    {
                      title: "IBPS Clerk",
                  description: "Prelims and Mains syllabus for IBPS Clerk",
                  papers: 2,
                  subjects: 5,
                  icon: <BookOpen className="h-6 w-6" />,
                    },
              ].map((exam, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg sm:text-xl">{exam.title}</CardTitle>
                      <div className="text-muted-foreground group-hover:text-red-600 transition-colors">
                        {exam.icon}
                      </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground">{exam.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          {exam.papers} Papers
                        </Badge>
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          {exam.subjects} Subjects
                        </Badge>
                        </div>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2 group-hover:bg-red-600 group-hover:text-white transition-colors">
                              <FileText className="h-4 w-4" />
                        View Syllabus
                          </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-8 md:py-12 bg-muted/30">
          <div className="container px-3 sm:px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Exam Pattern Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 sm:p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2 text-sm sm:text-base">Understanding Exam Patterns</h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
                        <li>Each exam has a specific pattern and marking scheme</li>
                        <li>Negative marking is applicable in most competitive exams</li>
                        <li>Time management is crucial for success</li>
                        <li>Understanding the weightage of each section helps in preparation</li>
                  </ul>
                    </div>

                    <div className="p-3 sm:p-4 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2 text-sm sm:text-base">Preparation Tips</h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
                        <li>Start with understanding the complete syllabus</li>
                        <li>Create a study plan based on the exam pattern</li>
                        <li>Focus on high-weightage topics first</li>
                        <li>Practice previous year question papers</li>
                        <li>Take regular mock tests to assess preparation</li>
                  </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

