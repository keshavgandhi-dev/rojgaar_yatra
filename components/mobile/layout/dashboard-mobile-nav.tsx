"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, LogOut, Home, Briefcase, Calendar, FileText, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function DashboardMobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "My Applications",
      href: "/dashboard/applications",
      icon: Briefcase,
    },
    {
      name: "My Exams",
      href: "/dashboard/exams",
      icon: Calendar,
    },
    {
      name: "Results",
      href: "/dashboard/results",
      icon: FileText,
    },
    {
      name: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="text-xl font-bold text-red-600">Rojgaar</span>
            <span className="text-xl font-bold">Yatra</span>
            <span className="text-xl font-bold text-red-600">.com</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-2 mt-8 px-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                isActive(link.href) ? "bg-red-600 text-white" : "hover:bg-muted",
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 mt-6 px-7 border-t pt-4">
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/auth/signin" onClick={() => setOpen(false)}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

