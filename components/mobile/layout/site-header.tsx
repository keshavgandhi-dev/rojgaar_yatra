"use client"

import Link from "next/link"
import { Briefcase, FileCheck, FileText, BookOpen, KeyRound, Phone } from "lucide-react"
import NewsMarquee from "@/components/news-marquee"

export function SiteHeader() {
  return (
    <div className="md:hidden">
      {/* Quick Navigation Menu */}
      <nav className="sticky top-0 z-40 w-full bg-red-600 dark:bg-red-800">
        <div className="container flex items-center justify-between overflow-x-auto no-scrollbar px-2 py-2">
          <Link href="/jobs" className="flex flex-col items-center min-w-[14%]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-1">Jobs</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <Link href="/results" className="flex flex-col items-center min-w-[14%]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <FileCheck className="h-4 w-4 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-1">Results</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <Link href="/admit-card" className="flex flex-col items-center min-w-[14%]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-1">Admit Card</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <Link href="/answer-key" className="flex flex-col items-center min-w-[14%]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <KeyRound className="h-4 w-4 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-1">Answer Key</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <Link href="/syllabus" className="flex flex-col items-center min-w-[14%]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-1">Syllabus</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <Link href="/contact" className="flex flex-col items-center min-w-[14%]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-1">Contact Us</span>
          </Link>
        </div>
      </nav>

      {/* News Marquee */}
      <div className="sticky top-[3.5rem] z-30 w-full">
        <div className="container px-2 py-2">
          <NewsMarquee />
        </div>
      </div>
    </div>
  )
} 