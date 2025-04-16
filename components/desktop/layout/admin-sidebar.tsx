"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Briefcase, FileText, Home, LogOut, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function AdminSidebar() {
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
      name: "Manage Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Admit Card",
      href: "/admin/admit-card",
      icon: FileText,
    },
    {
      name: "Upload Results",
      href: "/admin/results",
      icon: FileText,
    },
    {
      name: "Upload Documents",
      href: "/admin/documents",
      icon: FileText,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="hidden md:flex w-52 flex-col border-r bg-muted/30 h-screen sticky top-0">
      <div className="flex flex-col h-full">
        <nav className="flex-1 p-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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

        <div className="p-3 border-t">
          <Button variant="ghost" className="w-full justify-start text-sm" asChild>
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Back to Site
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm mt-2" asChild>
            <Link href="/auth/signin">
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

