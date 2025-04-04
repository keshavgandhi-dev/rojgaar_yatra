"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User } from "lucide-react"
import { Home, Briefcase, FileText, BookOpen, Ticket, Key, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const links = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Latest Jobs",
      href: "/jobs",
      icon: Briefcase,
    },
    {
      name: "Results",
      href: "/results",
      icon: FileText,
    },
    {
      name: "Syllabus",
      href: "/syllabus",
      icon: BookOpen,
    },
    {
      name: "Admit Card",
      href: "/admit-card",
      icon: Ticket,
    },
    {
      name: "Answer Key",
      href: "/answer-key",
      icon: Key,
    },
    {
      name: "Contact Us",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <div className="relative">
      <button
        className="flex flex-col justify-center items-center w-5 h-5 mr-2 md:hidden z-[9999] relative"
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
      >
        <span 
          className={cn(
            "block w-5 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-300 ease-in-out origin-center",
            open ? "rotate-45 translate-y-1.5" : ""
          )}
        ></span>
        <span 
          className={cn(
            "block w-5 h-0.5 bg-black dark:bg-white rounded-full mt-1 transition-all duration-300 ease-in-out",
            open ? "opacity-0" : ""
          )}
        ></span>
        <span 
          className={cn(
            "block w-5 h-0.5 bg-black dark:bg-white rounded-full mt-1 transition-all duration-300 ease-in-out origin-center",
            open ? "-rotate-45 -translate-y-1.5" : ""
          )}
        ></span>
      </button>

      <div 
        className={cn(
          "fixed top-0 left-0 w-[260px] h-full bg-black text-white z-10 transition-transform duration-300 ease-in-out shadow-lg",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-[60px]"></div> {/* Exact header height spacer */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "text-red-500 bg-gray-900"
                      : "text-gray-300 hover:text-white hover:bg-gray-900"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start h-10 text-base border-gray-700 text-white hover:bg-gray-900" asChild>
                <Link href="/auth/signin" onClick={() => setOpen(false)}>
                  <User className="mr-2 h-5 w-5" />
                  Sign In
                </Link>
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 h-10 text-base" asChild>
                <Link href="/auth/signup" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

