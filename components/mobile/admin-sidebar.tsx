"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Home, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  return (
    <SidebarProvider>
      <Sidebar className="w-[200px] md:w-[240px] lg:w-[280px] fixed h-screen overflow-y-auto">
        <SidebarHeader className="border-b p-3 md:p-4">
          <div className="flex items-center gap-2">
            <Link href="/admin/dashboard" className="flex items-center">
              <span className="text-base md:text-lg lg:text-xl font-bold text-red-600">Rojgaar</span>
              <span className="text-base md:text-lg lg:text-xl font-bold">Yatra</span>
              <span className="text-base md:text-lg lg:text-xl font-bold text-red-600">.com</span>
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2 md:p-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/dashboard")}>
                <Link href="/admin/dashboard" className="flex items-center gap-2 p-2 md:p-3">
                  <LayoutDashboard className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/jobs")}>
                <Link href="/admin/jobs" className="flex items-center gap-2 p-2 md:p-3">
                  <FileText className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Jobs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/applications")}>
                <Link href="/admin/applications" className="flex items-center gap-2 p-2 md:p-3">
                  <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Applications</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/users")}>
                <Link href="/admin/users" className="flex items-center gap-2 p-2 md:p-3">
                  <Users className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Users</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/settings")}>
                <Link href="/admin/settings" className="flex items-center gap-2 p-2 md:p-3">
                  <Settings className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-3 md:p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/" className="flex items-center gap-2 p-2 md:p-3">
                  <Home className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Back to Site</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="ghost" className="w-full justify-start gap-2 p-2 md:p-3">
                  <LogOut className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="text-sm md:text-base">Logout</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

