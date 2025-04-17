import Link from "next/link"
import { Briefcase, FileCheck, FileText, BookOpen, KeyRound } from "lucide-react"

export function BottomNavigation() {
  return (
    <div className="sm:hidden sticky top-14 z-40 bg-red-600 dark:bg-red-800">
      <div className="container px-2 py-1">
        <div className="flex items-center justify-between overflow-x-auto gap-1 no-scrollbar">
          <Link href="/jobs" className="flex flex-col items-center min-w-[50px]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Briefcase className="h-3 w-3 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-0.5">Jobs</span>
          </Link>
          <Link href="/results" className="flex flex-col items-center min-w-[50px]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <FileCheck className="h-3 w-3 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-0.5">Results</span>
          </Link>
          <Link href="/admit-card" className="flex flex-col items-center min-w-[50px]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-0.5">Admit Card</span>
          </Link>
          <Link href="/answer-key" className="flex flex-col items-center min-w-[50px]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <KeyRound className="h-3 w-3 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-0.5">Answer Key</span>
          </Link>
          <Link href="/syllabus" className="flex flex-col items-center min-w-[50px]">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="h-3 w-3 text-white" />
            </div>
            <span className="text-[10px] font-medium text-white mt-0.5">Syllabus</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 