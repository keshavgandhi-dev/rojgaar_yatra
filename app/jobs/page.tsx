import Link from "next/link"
import { Filter, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Latest <span className="text-red-600">Job Opportunities</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find the perfect government job that matches your qualifications and career goals.
              </p>
              <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search jobs by title, location, qualification..."
                    className="pl-8 w-full h-12 rounded-lg"
                  />
                </div>
                <Button type="submit" className="bg-red-600 hover:bg-red-700 h-12 rounded-lg px-6">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Mobile Filter Button */}
              <div className="md:hidden w-full mb-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter Jobs
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>Filter Jobs</SheetTitle>
                      <SheetDescription>Narrow down your job search with these filters.</SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <MobileFilters />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden md:block w-[280px] shrink-0">
                <div className="sticky top-24 border rounded-lg p-6 bg-card">
                  <h3 className="font-medium text-lg mb-4 flex items-center">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filter Jobs
                  </h3>
                  <DesktopFilters />
                </div>
              </div>

              {/* Job Listings */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">Showing 1-10 of 235 jobs</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="deadline">Application Deadline</SelectItem>
                        <SelectItem value="vacancies">Most Vacancies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <JobListingCard key={i} index={i} />
                  ))}
                </div>

                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function JobListingCard({ index }: { index: number }) {
  const jobTitles = [
    "UPSC Civil Services 2025",
    "SSC CGL 2025",
    "IBPS PO 2025",
    "RRB NTPC 2025",
    "SBI PO 2025",
    "UPSC CAPF 2025",
    "IBPS Clerk 2025",
    "SSC CHSL 2025",
    "RBI Grade B 2025",
    "UPSC IES 2025",
  ]

  const departments = [
    "Union Public Service Commission",
    "Staff Selection Commission",
    "Institute of Banking Personnel Selection",
    "Railway Recruitment Board",
    "State Bank of India",
    "Union Public Service Commission",
    "Institute of Banking Personnel Selection",
    "Staff Selection Commission",
    "Reserve Bank of India",
    "Union Public Service Commission",
  ]

  const locations = [
    "All India",
    "All India",
    "All India",
    "All India",
    "All India",
    "All India",
    "All India",
    "All India",
    "All India",
    "All India",
  ]

  const qualifications = [
    "Graduate",
    "Graduate",
    "Graduate",
    "12th Pass",
    "Graduate",
    "Graduate",
    "Graduate",
    "12th Pass",
    "Graduate",
    "Engineering Graduate",
  ]

  const vacancies = [1200, 5000, 3500, 10000, 2000, 800, 7500, 4000, 900, 600]
  const lastDates = ["15 Apr", "30 Mar", "20 May", "10 Apr", "25 Mar", "05 May", "12 Apr", "18 Mar", "22 Apr", "30 Mar"]
  const fees = [100, 100, 175, 500, 750, 200, 175, 100, 850, 200]

  const i = index - 1

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-muted hover:border-red-200 dark:hover:border-red-900">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold hover:text-red-600 transition-colors">
                    <Link href={`/jobs/${index}`}>{jobTitles[i]}</Link>
                  </h3>
                  {index % 3 === 1 && <Badge className="bg-red-600">Featured</Badge>}
                  {index % 5 === 0 && <Badge className="bg-yellow-500">Urgent</Badge>}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{departments[i]}</p>
              </div>
              <div className="hidden md:block">
                <Badge variant="outline" className="text-xs">
                  {lastDates[i]} days left
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 text-sm mb-4">
              <div>
                <span className="font-medium text-muted-foreground">Location:</span> {locations[i]}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Qualification:</span> {qualifications[i]}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Vacancies:</span> {vacancies[i]}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Fee:</span> ₹{fees[i]}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="md:hidden">
                  {lastDates[i]} days left
                </Badge>
              </div>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href={`/jobs/${index}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function DesktopFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">Job Type</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="permanent" />
            <label htmlFor="permanent" className="text-sm">
              Permanent
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="contract" />
            <label htmlFor="contract" className="text-sm">
              Contract
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="temporary" />
            <label htmlFor="temporary" className="text-sm">
              Temporary
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-3">Department</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="upsc" />
            <label htmlFor="upsc" className="text-sm">
              UPSC
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ssc" />
            <label htmlFor="ssc" className="text-sm">
              SSC
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ibps" />
            <label htmlFor="ibps" className="text-sm">
              IBPS
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="rrb" />
            <label htmlFor="rrb" className="text-sm">
              Railway (RRB)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="state" />
            <label htmlFor="state" className="text-sm">
              State PSC
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-3">Qualification</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="10th" />
            <label htmlFor="10th" className="text-sm">
              10th Pass
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="12th" />
            <label htmlFor="12th" className="text-sm">
              12th Pass
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="graduate" />
            <label htmlFor="graduate" className="text-sm">
              Graduate
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="postgraduate" />
            <label htmlFor="postgraduate" className="text-sm">
              Post Graduate
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-3">Location</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="all-india" />
            <label htmlFor="all-india" className="text-sm">
              All India
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="delhi" />
            <label htmlFor="delhi" className="text-sm">
              Delhi
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mumbai" />
            <label htmlFor="mumbai" className="text-sm">
              Mumbai
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="bangalore" />
            <label htmlFor="bangalore" className="text-sm">
              Bangalore
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-3">Salary Range</h4>
        <Slider defaultValue={[20000, 100000]} min={0} max={200000} step={5000} />
        <div className="flex items-center justify-between mt-2 text-sm">
          <span>₹0</span>
          <span>₹2,00,000+</span>
        </div>
      </div>

      <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
    </div>
  )
}

function MobileFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">Job Type</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="m-permanent" />
            <label htmlFor="m-permanent" className="text-sm">
              Permanent
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-contract" />
            <label htmlFor="m-contract" className="text-sm">
              Contract
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-temporary" />
            <label htmlFor="m-temporary" className="text-sm">
              Temporary
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-3">Department</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="m-upsc" />
            <label htmlFor="m-upsc" className="text-sm">
              UPSC
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-ssc" />
            <label htmlFor="m-ssc" className="text-sm">
              SSC
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-ibps" />
            <label htmlFor="m-ibps" className="text-sm">
              IBPS
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-rrb" />
            <label htmlFor="m-rrb" className="text-sm">
              Railway (RRB)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-state" />
            <label htmlFor="m-state" className="text-sm">
              State PSC
            </label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium mb-3">Qualification</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="m-10th" />
            <label htmlFor="m-10th" className="text-sm">
              10th Pass
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-12th" />
            <label htmlFor="m-12th" className="text-sm">
              12th Pass
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-graduate" />
            <label htmlFor="m-graduate" className="text-sm">
              Graduate
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="m-postgraduate" />
            <label htmlFor="m-postgraduate" className="text-sm">
              Post Graduate
            </label>
          </div>
        </div>
      </div>

      <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
    </div>
  )
}

