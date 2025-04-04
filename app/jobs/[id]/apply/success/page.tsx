"use client"

import { use, useEffect } from "react"
import Link from "next/link"
import { CheckCircle2, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    </div>
  )
}

