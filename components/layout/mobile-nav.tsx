"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Briefcase, FileText, Users, Settings } from "lucide-react"

export function MobileNav() {
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
      name: "Jobs",
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
      name: "More",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <nav className="grid h-16 grid-cols-5 items-center">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 text-xs",
              isActive(link.href)
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{link.name}</span>
          </Link>
        )
      })}
    </nav>
  )
} 