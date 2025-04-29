import { Sidebar } from "@/components/desktop/layout/sidebar"
import { SiteHeader } from "@/components/desktop/layout/site-header"

export default function DesktopDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <SiteHeader />
        <main className="container mx-auto px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  )
} 