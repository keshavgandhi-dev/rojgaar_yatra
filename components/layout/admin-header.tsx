import Link from "next/link"
import { AdminMobileNav } from "@/components/layout/admin-mobile-nav"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <AdminMobileNav />
          <Link href="/admin" className="flex items-center">
            <span className="text-xl font-bold text-red-600">Rojgaar</span>
            <span className="text-xl font-bold">Yatra</span>
            <span className="text-xl font-bold text-red-600">.com</span>
            <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded">Admin</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

