"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Home,
  Settings,
  User,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import MobileDashboardLayout from "./mobile/layout"
import DesktopDashboardLayout from "./desktop/layout"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
  { name: "Applications", href: "/dashboard/applications", icon: FileText },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="hidden md:block">
        <DesktopDashboardLayout>{children}</DesktopDashboardLayout>
      </div>
      <div className="block md:hidden">
        <MobileDashboardLayout>{children}</MobileDashboardLayout>
      </div>
    </>
  )
}

