"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, LogOut, Home, Briefcase, FileText, Users, Settings, TicketCheck, Files } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function AdminMobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const links = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: Home,
    },
    {
      name: "Manage Jobs",
      href: "/admin/jobs",
      icon: Briefcase,
    },
    {
      name: "Applications",
      href: "/admin/applications",
      icon: FileText,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Admit Cards",
      href: "/admin/admit-card",
      icon: TicketCheck,
    },
    {
      name: "Documents",
      href: "/admin/documents",
      icon: Files,
    },
    {
      name: "Results",
      href: "/admin/results",
      icon: FileText,
    },
    {
      name: "Settings",
      href: "/admin/settings",
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
          <Link href="/admin" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="text-xl font-bold text-red-600">Rojgaar</span>
            <span className="text-xl font-bold">Yatra</span>
            <span className="text-xl font-bold text-red-600">.com</span>
            <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded">Admin</span>
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
            <Link href="/" onClick={() => setOpen(false)}>
              <Home className="mr-2 h-4 w-4" />
              Back to Site
            </Link>
          </Button>
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

