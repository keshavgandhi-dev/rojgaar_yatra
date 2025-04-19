"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Users,
  Settings,
  SquareUser,
  TicketCheck,
  Files,
} from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  
  const links = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Jobs",
      href: "/admin/jobs",
      icon: Briefcase,
    },
    {
      title: "Applications",
      href: "/admin/applications",
      icon: FileText,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Admit Cards",
      href: "/admin/admit-card",
      icon: TicketCheck,
    },
    {
      title: "Documents",
      href: "/admin/documents",
      icon: Files,
    },
    {
      title: "Results",
      href: "/admin/results",
      icon: FileText,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="w-[240px] lg:w-[280px] h-screen border-r overflow-y-auto bg-background">
      <div className="flex flex-col h-full">
        <div className="h-14 flex items-center border-b px-4">
          <Link href="/admin" className="flex items-center space-x-1">
            <span className="text-xl font-bold text-red-600">Rojgaar</span>
            <span className="text-xl font-bold">Yatra</span>
            <span className="text-xl font-bold text-red-600">.com</span>
            <span className="text-xl font-bold text-foreground ml-1">Admin</span>
          </Link>
        </div>

        <div className="flex-1 py-4 px-3">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50 hover:text-accent-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <SquareUser className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@rojgaaryatra.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

