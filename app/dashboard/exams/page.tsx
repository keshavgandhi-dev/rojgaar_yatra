import Link from "next/link"
import { Calendar, Clock, MapPin, Download, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Exams</h1>
        <p className="text-muted-foreground mt-1">Manage your upcoming and past examinations</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
          <TabsTrigger value="past">Past Exams</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden border-l-4 border-l-red-600 bg-white dark:bg-gray-950">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">
                        {["UPSC Prelims 2025", "SSC CGL Tier I 2025", "IBPS PO Prelims 2025"][i - 1]}
                      </h3>
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
                      >
                        {["10", "25", "15"][i - 1]} days left
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Exam Date: {["15 Apr", "30 Apr", "20 Apr"][i - 1]} 2025
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{["09:30 AM - 12:30 PM", "10:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"][i - 1]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{["Delhi", "Mumbai", "Kolkata"][i - 1]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Reporting Time: {["08:30 AM", "09:00 AM", "01:00 PM"][i - 1]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="sm:w-auto" asChild>
                      <Link href={`/dashboard/exams/${i}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 sm:w-auto" asChild>
                      <Link href={`/admit-card/${i}`}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Admit Card
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {[1, 2].map((i) => (
            <Card key={i} className="overflow-hidden border-l-4 border-l-gray-400 bg-white dark:bg-gray-950">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{["SSC CHSL 2024", "IBPS Clerk 2024"][i - 1]}</h3>
                      <Badge
                        variant="outline"
                        className="bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      >
                        Completed
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Exam Date: {["15 Feb", "10 Jan"][i - 1]} 2025</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{["09:30 AM - 12:30 PM", "10:00 AM - 12:00 PM"][i - 1]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{["Delhi", "Mumbai"][i - 1]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Result: {["Declared", "Awaited"][i - 1]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="sm:w-auto" asChild>
                      <Link href={`/dashboard/exams/${i + 3}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    {i === 1 && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 sm:w-auto" asChild>
                        <Link href={`/dashboard/results/1`}>
                          <ArrowRight className="h-4 w-4 mr-2" />
                          View Result
                        </Link>
                      </Button>
                    )}
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

