import { MobileNav } from "@/components/mobile/layout/mobile-nav"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function MobileDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <MobileNav />
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  )
} 