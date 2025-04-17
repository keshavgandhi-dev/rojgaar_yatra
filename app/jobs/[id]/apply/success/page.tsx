"use client"

import { use, useEffect } from "react"
import Link from "next/link"
import { CheckCircle2, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Card as RelatedCard, CardContent as RelatedCardContent, CardDescription, CardHeader as RelatedCardHeader, CardTitle as RelatedCardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function PaymentSuccessPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const jobId = Number.parseInt(resolvedParams.id)

  // Mock job data based on ID
  const job = {
    title:
      jobId === 1
        ? "UPSC Civil Services 2025"
        : jobId === 2
          ? "SSC CGL 2025"
          : jobId === 3
            ? "IBPS PO 2025"
            : "Government Job Position",
    department:
      jobId === 1
        ? "Union Public Service Commission"
        : jobId === 2
          ? "Staff Selection Commission"
          : jobId === 3
            ? "Institute of Banking Personnel Selection"
            : "Government Department",
  }

  // Generate stable IDs based on jobId
  const applicationId = `APP${jobId}${String(jobId).padStart(6, '0')}`
  const transactionId = `TXN${jobId}${String(jobId).padStart(8, '0')}`

  // Confetti effect on page load
  useEffect(() => {
    const confetti = async () => {
      const { default: confetti } = await import("canvas-confetti")

      // Fire confetti
      const count = 200
      const defaults = {
        origin: { y: 0.7 },
        zIndex: 1000,
      }

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        })
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      })
      fire(0.2, {
        spread: 60,
      })
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      })
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      })
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      })
    }

    confetti()
  }, [])

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-muted/30 py-12">
        <div className="container">
          <div className="max-w-md w-full mx-auto">
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Application Submitted Successfully!</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Your application for {job.title} has been submitted successfully.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Application ID</p>
                      <p className="font-medium">{applicationId}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Transaction ID</p>
                      <p className="font-medium">{transactionId}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent to your registered email address with all the details.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Please keep your application ID safe for future reference.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full">
                      <Link href={`/jobs/${jobId}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        View Application Details
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Application Form
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Jobs Section */}
        <div className="bg-gray-50 dark:bg-gray-900 py-12 mt-12">
          <div className="container px-4">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Similar Jobs You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((job) => (
                <RelatedCard key={job} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <RelatedCardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <RelatedCardTitle className="text-lg font-bold">UPSC Civil Services 2025</RelatedCardTitle>
                        <CardDescription className="mt-1">Union Public Service Commission</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                        New
                      </Badge>
                    </div>
                  </RelatedCardHeader>
                  <RelatedCardContent className="p-4 pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last Date:</span>
                        <span className="font-medium">15 Apr 2025</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Vacancies:</span>
                        <span className="font-medium">1200</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Age Limit:</span>
                        <span className="font-medium">21-32 years</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Qualification:</span>
                        <span className="font-medium">Graduation</span>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transition-all duration-300">
                        Apply Now
                      </Button>
                    </div>
                  </RelatedCardContent>
                </RelatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

