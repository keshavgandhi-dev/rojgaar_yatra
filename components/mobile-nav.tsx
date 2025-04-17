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
            "block w-5 h-0.5 bg-white sm:bg-black dark:bg-white rounded-full transition-all duration-300 ease-in-out origin-center",
            open ? "rotate-45 translate-y-1" : ""
          )}
        ></span>
        <span 
          className={cn(
            "block w-5 h-0.5 bg-white sm:bg-black dark:bg-white rounded-full mt-1 transition-all duration-300 ease-in-out origin-center",
            open ? "-rotate-45 -translate-y-1" : ""
          )}
        ></span>
      </button>

      <div 
        className={cn(
          "fixed top-[80px] left-0 w-[260px] h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-y-auto bg-red-600 text-white z-10 transition-transform duration-300 ease-in-out shadow-lg",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 py-2">
            <div className="space-y-0.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-white bg-red-700"
                      : "text-white hover:bg-red-700"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </nav>
          
          <div className="p-3 border-t border-red-500">
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start h-9 text-sm border-red-500 text-white hover:bg-red-700 hover:text-white" asChild>
                <Link href="/auth/signin" onClick={() => setOpen(false)}>
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <Button className="bg-red-700 hover:bg-red-800 h-9 text-sm text-white" asChild>
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

