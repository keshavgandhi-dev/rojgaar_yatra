"use client"

import { SiteHeader } from "@/components/mobile/layout/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Calendar, Users, Clock, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  return (
    <>
      <SiteHeader />
      
      <main className="container px-3 py-4">
        {/* Search Section */}
        <section className="mb-4">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <Input
                type="search"
                placeholder="Search jobs by title, location, qualification..."
                className="pl-9 h-10 text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
              />
            </div>
            <Button className="h-10 text-sm bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white">
              Search Jobs
            </Button>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Filters</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              All Jobs
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              UPSC
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              SSC
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              Banking
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              Railway
            </Button>
          </div>
        </section>

        {/* Jobs Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1-10 of 50+ jobs</p>
        </div>

        {/* Jobs List */}
        <section>
          <div className="space-y-3">
            {/* Job Card 1 */}
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">UPSC Civil Services 2025</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="bg-red-50 text-red-700 text-[10px] px-2 py-0.5 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">UPSC</Badge>
                      <Badge variant="outline" className="bg-red-50 text-red-700 text-[10px] px-2 py-0.5 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">Closing Soon</Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">New</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>Last Date: 15 Apr 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="h-3 w-3" />
                    <span>1200 Vacancies</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Clock className="h-3 w-3" />
                    <span>Age Limit: 21-32 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <GraduationCap className="h-3 w-3" />
                    <span>Qualification: Graduation</span>
                  </div>
                  <Button className="w-full h-9 text-sm bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white" asChild>
                    <Link href="/jobs/upsc-civil-services-2025">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Card 2 */}
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">SSC CGL 2025</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="bg-red-50 text-red-700 text-[10px] px-2 py-0.5 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">SSC</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">New</Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">New</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>Last Date: 30 Mar 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="h-3 w-3" />
                    <span>5000 Vacancies</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Clock className="h-3 w-3" />
                    <span>Age Limit: 18-32 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <GraduationCap className="h-3 w-3" />
                    <span>Qualification: Graduation</span>
                  </div>
                  <Button className="w-full h-9 text-sm bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white" asChild>
                    <Link href="/jobs/ssc-cgl-2025">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Card 3 */}
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">IBPS PO 2025</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="bg-red-50 text-red-700 text-[10px] px-2 py-0.5 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">Banking</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">New</Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">New</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>Last Date: 20 May 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="h-3 w-3" />
                    <span>3500 Vacancies</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Clock className="h-3 w-3" />
                    <span>Age Limit: 20-30 Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <GraduationCap className="h-3 w-3" />
                    <span>Qualification: Graduation</span>
                  </div>
                  <Button className="w-full h-9 text-sm bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white" asChild>
                    <Link href="/jobs/ibps-po-2025">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pagination */}
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" className="h-8 text-xs">
              <ChevronLeft className="h-3 w-3 mr-1" />
              Previous
            </Button>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="h-8 w-8 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">1</Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-xs">2</Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-xs">3</Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-xs">4</Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-xs">5</Button>
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              Next
              <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

