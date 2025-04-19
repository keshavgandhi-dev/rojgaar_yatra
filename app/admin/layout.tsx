"use client"

import { ReactNode } from "react"
import * as React from "react"

import { AdminSidebar } from "@/components/layout/admin-sidebar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Desktop Sidebar - only visible on desktop */}
        <div className="hidden md:block fixed left-0 top-0 w-64 h-screen border-r overflow-y-auto">
          <AdminSidebar />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 overflow-y-auto">
          <div className="container py-6 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

