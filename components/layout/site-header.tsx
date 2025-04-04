"use client"

import Link from "next/link"
import { User, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Logo } from "@/components/logo"
import NewsMarquee from "@/components/news-marquee"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <header 
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md dark:shadow-gray-900/20" 
            : "bg-background"
        }`}
      >
        <div className="container flex h-12 items-center justify-between px-2">
          <div className="flex items-center gap-1">
            <MobileNav />
            <Logo />
          </div>

          {/* Desktop Navigation - Hidden on mobile when scrolled */}
          <MainNav className={isScrolled ? "hidden md:flex" : ""} />

          <div className="flex items-center gap-1">
            {/* Search Icon - Shows when scrolled */}
            {isScrolled && (
              <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-9 w-9 rounded-full bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="h-auto pt-16 bg-background">
                  <SheetHeader className="border-b pb-2">
                    <SheetTitle>Search</SheetTitle>
                  </SheetHeader>
                  <div className="relative mt-4">
                    <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                    <Input 
                      placeholder="Search jobs, results, admit cards..." 
                      className="pl-8"
                      autoFocus
                    />
                  </div>
                </SheetContent>
              </Sheet>
            )}
            
            <ModeToggle />
            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
              <Link href="/auth/signin">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
            <Button size="sm" className="hidden sm:flex bg-red-600 hover:bg-red-700" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="container px-2 my-1.5">
        <NewsMarquee />
      </div>
    </>
  )
}

