import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminSidebar } from "@/components/mobile/admin-sidebar"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* MAIN HEADER WITH LOGO */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">
              Rojgaar Yatra
            </span>
          </Link>
          <span className="text-sm font-medium">[MAIN HEADER]</span>
        </div>

        {/* LEFT NAVIGATION MENU */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
          <span className="text-sm font-medium">[LEFT NAV MENU]</span>
          <Link
            href="/admin"
            className="transition-colors hover:text-foreground/80 text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/jobs"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Jobs
          </Link>
          <Link
            href="/admin/results"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Results
          </Link>
          <Link
            href="/admin/users"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Users
          </Link>
          <Link
            href="/admin/settings"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Settings
          </Link>
        </nav>

        {/* MOBILE SIDEBAR TOGGLE */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <span className="text-sm font-medium">[MOBILE TOGGLE]</span>
          <div className="flex md:hidden">
            <AdminSidebar />
          </div>
        </div>
      </div>
    </header>
  )
} 