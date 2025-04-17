"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { TestimonialCard } from "@/components/testimonial-card"
import { FAQSection } from "@/components/faq-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <>
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-2 pb-4 sm:py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white dark:from-muted/50 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-3 sm:px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-4">
            <div className="space-y-0">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <span className="text-red-600 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent animate-gradient dark:text-red-500 dark:bg-none">India's No.1</span>
              </h1>
              <TypewriterEffect words={["Job Portal", "Sarkari Result Hub", "Exam Guide", "Career Builder"]} />
            </div>
            <p className="max-w-[700px] text-gray-600 text-sm sm:text-base md:text-xl px-2 dark:text-gray-300">
              Your one-stop destination for all government job updates, results, admit cards, and more.
            </p>
            <div className="w-full max-w-xl flex flex-col sm:flex-row gap-1.5 px-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search jobs by title, location, qualification..."
                  className="pl-8 h-9 text-sm border-gray-200 focus:border-red-500 focus:ring-red-500 bg-white dark:bg-muted/30 dark:border-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
              <Button type="submit" className="h-9 text-sm bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md dark:bg-red-800 dark:hover:bg-red-700 dark:shadow-none transition-all hover:scale-[1.02]">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-3 border-t border-b border-gray-100 dark:border-gray-800 dark:bg-muted/30 relative hidden sm:block">
        <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-800/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-2 relative z-10">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-1 max-w-lg">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-muted/30 dark:to-muted/30 p-2 rounded-md shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between h-full">
                  <div className="flex flex-col mr-2">
                    <AnimatedCounter from={0} to={45678} className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100" />
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium">Registered Users</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-600/20 dark:bg-red-800/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-muted/30 dark:to-muted/30 p-2 rounded-md shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between h-full">
                  <div className="flex flex-col mr-2">
                    <AnimatedCounter from={0} to={28456} className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100" />
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium">Total Jobs</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-600/20 dark:bg-red-800/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-muted/30 dark:to-muted/30 p-2 rounded-md shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between h-full">
                  <div className="flex flex-col mr-2">
                    <AnimatedCounter from={0} to={32845} className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100" />
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium">Successful Candidates</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-600/20 dark:bg-red-800/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Sections */}
      <section className="py-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-muted/30 dark:via-background dark:to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-800/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-2 relative z-10">
          {/* Mobile Only Heading */}
          <div className="block md:hidden">
            <h2 className="text-2xl font-bold tracking-tighter text-center mb-4 text-gray-800 dark:text-gray-100 relative">
              Quick Access
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></span>
            </h2>
          </div>
          {/* Desktop Only Heading */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold tracking-tighter text-center mb-4 text-gray-800 dark:text-gray-100 relative">
              Quick Access
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Latest Jobs */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-white/80 dark:bg-muted/30 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-3 dark:bg-red-800">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base font-bold">Latest Jobs</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">New Updates</span>
                  </CardTitle>
              </CardHeader>
                <CardContent className="pt-3 px-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">UPSC</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">UPSC Civil Services 2025</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Last Date: 15 Apr 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">1200 Vacancies</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">SSC</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">SSC CGL 2025</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Last Date: 30 Mar 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">5000 Vacancies</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Banking</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">IBPS PO 2025</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Last Date: 20 May 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">3500 Vacancies</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Railway</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">RRB NTPC 2025</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Last Date: 10 Apr 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">10000 Vacancies</div>
                    </Link>
                  </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3 h-8 text-xs hover:bg-red-600 hover:text-white transition-colors border-gray-300 dark:border-gray-700 dark:bg-muted/30 dark:text-gray-100 dark:hover:bg-red-800 dark:hover:text-white" asChild>
                  <Link href="/jobs">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>
            </div>

            {/* Admit Cards */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-white/80 dark:bg-muted/30 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-3 dark:bg-red-800">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base font-bold">Admit Cards</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">New Updates</span>
                  </CardTitle>
              </CardHeader>
                <CardContent className="pt-3 px-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">SSC</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">SSC CHSL 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Exam Date: 15 Mar 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Download: 01 Mar 2025</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">RRB</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">RRB NTPC 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Exam Date: 25 Mar 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Download: 10 Mar 2025</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">UPSC</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">UPSC CSE 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Exam Date: 05 Apr 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Download: 20 Mar 2025</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Banking</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">IBPS PO 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Exam Date: 10 Apr 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Download: 25 Mar 2025</div>
                    </Link>
                  </div>
                </div>
                  <Button variant="outline" className="w-full mt-3 h-8 text-xs hover:bg-red-600 hover:text-white transition-colors border-gray-300 dark:border-gray-700 dark:bg-muted/30 dark:text-gray-100 dark:hover:bg-red-800 dark:hover:text-white" asChild>
                  <Link href="/admit-card">View All Admit Cards</Link>
                </Button>
              </CardContent>
            </Card>
            </div>

            {/* Results */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-white/80 dark:bg-muted/30 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-3 dark:bg-red-800">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base font-bold">Results</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">New Updates</span>
                  </CardTitle>
              </CardHeader>
                <CardContent className="pt-3 px-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">UPSC</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">UPSC CSE 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 10 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Cutoff: 950</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">SSC</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">SSC GD 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 05 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Cutoff: 85%</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Banking</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">IBPS Clerk 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 01 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Cutoff: 80%</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Railway</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">RRB NTPC 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 28 Jan 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Cutoff: 75%</div>
                    </Link>
                  </div>
                </div>
                  <Button variant="outline" className="w-full mt-3 h-8 text-xs hover:bg-red-600 hover:text-white transition-colors border-gray-300 dark:border-gray-700 dark:bg-muted/30 dark:text-gray-100 dark:hover:bg-red-800 dark:hover:text-white" asChild>
                  <Link href="/results">View All Results</Link>
                </Button>
              </CardContent>
            </Card>
            </div>

            {/* Answer Keys */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-white/80 dark:bg-muted/30 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-3 dark:bg-red-800">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base font-bold">Answer Keys</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">New Updates</span>
                  </CardTitle>
              </CardHeader>
                <CardContent className="pt-3 px-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">SSC</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">SSC CGL 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 28 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Objection: 05 Mar 2025</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Banking</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">IBPS PO 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 25 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Objection: 02 Mar 2025</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Railway</Badge>
                          <Badge variant="outline" className="bg-green-100/80 text-green-700 text-[10px] px-2 py-0.5 border-green-300/50 dark:bg-green-900/50 dark:text-green-100 dark:border-green-800/50 backdrop-blur-sm">New</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">RRB NTPC 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 20 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Objection: 27 Feb 2025</div>
                    </Link>
                  </div>
                    <div className="bg-white/50 dark:bg-muted/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-2.5 transition-all hover:border-red-500/50 hover:shadow-md dark:hover:border-red-600/50 hover:scale-[1.02]">
                    <Link href="#" className="block">
                        <div className="flex justify-between items-start mb-1.5">
                          <Badge variant="outline" className="bg-gray-100/80 text-gray-700 text-[10px] px-2 py-0.5 border-gray-300/50 dark:bg-gray-800/50 dark:text-gray-100 dark:border-gray-700/50 backdrop-blur-sm">Banking</Badge>
                          <Badge variant="outline" className="bg-red-100/80 text-red-700 text-[10px] px-2 py-0.5 border-red-300/50 dark:bg-red-900/50 dark:text-red-100 dark:border-red-800/50 backdrop-blur-sm">Closing Soon</Badge>
                      </div>
                      <div className="font-medium text-xs hover:text-red-600 transition-colors dark:text-gray-100 dark:hover:text-red-400">SBI Clerk 2024</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Released: 15 Feb 2025</div>
                        <div className="text-[10px] text-red-600 font-medium mt-1 dark:text-red-400">Objection: 22 Feb 2025</div>
                    </Link>
                  </div>
                </div>
                  <Button variant="outline" className="w-full mt-3 h-8 text-xs hover:bg-red-600 hover:text-white transition-colors border-gray-300 dark:border-gray-700 dark:bg-muted/30 dark:text-gray-100 dark:hover:bg-red-800 dark:hover:text-white" asChild>
                  <Link href="/answer-key">View All Answer Keys</Link>
                </Button>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-4 md:py-6 bg-gradient-to-b from-gray-50 to-white dark:from-muted/30 dark:to-black relative">
        <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-800/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <motion.h2 
              className="text-4xl font-bold tracking-tighter sm:text-5xl mb-1 text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Success <span className="text-red-600 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent animate-gradient dark:text-red-500 dark:bg-none">Stories</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 max-w-[700px] mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Real stories from candidates who found their dream government jobs through RojgaarYatra
            </motion.p>
          </motion.div>
          
          {/* Success rates in a single row with website's color scheme */}
          <motion.div
            className="grid grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { value: "85%", label: "Success Rate" },
              { value: "12K+", label: "Placements" },
              { value: "4.7/5", label: "User Rating" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 p-2 rounded-lg shadow-md border border-red-500 dark:border-red-700"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-2xl font-bold text-white text-center">
                  {stat.value}
                </div>
                <div className="text-sm text-red-100 dark:text-red-200 text-center font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <TestimonialCard
              name="Rahul Sharma"
              role="UPSC Civil Services"
              testimonial="RojgaarYatra was instrumental in my UPSC journey. The timely updates, study materials, and mock tests helped me secure AIR 45 in my very first attempt."
              image="/placeholder.svg?height=100&width=100"
              index={0}
            />
            <TestimonialCard
              name="Priya Patel"
              role="SSC CGL"
              testimonial="I had been trying for SSC for 3 years with no success. After using RojgaarYatra's resources and guidance, I finally cleared the exam with a top rank."
              image="/placeholder.svg?height=100&width=100"
              index={1}
            />
            <TestimonialCard
              name="Amit Kumar"
              role="Bank PO"
              testimonial="The application process for banking exams used to confuse me. RojgaarYatra simplified everything and their study material was spot on for the actual exam pattern."
              image="/placeholder.svg?height=100&width=100"
              index={2}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                variant="outline" 
                className="h-11 px-6 text-base font-medium bg-gradient-to-r from-red-600 to-red-700 text-white border-none hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View More Success Stories
              </Button>
            </motion.div>
            
            <div className="mt-4 flex justify-center items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img 
                      src={`/placeholder.svg?height=32&width=32&text=${i}`} 
                      alt={`User ${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">+2,845 more success stories</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 md:py-6 bg-gradient-to-b from-gray-50 to-white dark:from-muted/30 dark:to-background relative">
        <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-800/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 text-gray-800 dark:text-gray-100">
              Frequently Asked <span className="text-red-600 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent animate-gradient dark:text-red-500 dark:bg-none">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-[700px] mx-auto">
              Find answers to common questions about government jobs and our platform
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <FAQSection />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-4 md:py-6 bg-gradient-to-r from-red-600 to-red-700 text-white dark:bg-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl mb-2"
          >
            Ready to Start Your Career Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] mx-auto mb-4 text-red-50 dark:text-red-100"
          >
            Join thousands of successful candidates who found their dream government job through RojgaarYatra.com
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button size="default" variant="outline" className="h-9 px-6 text-base font-medium bg-white text-red-600 hover:bg-red-50 border-white dark:bg-white dark:text-red-600 dark:hover:bg-red-50 hover:scale-105 transition-transform">
              Register Now
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

