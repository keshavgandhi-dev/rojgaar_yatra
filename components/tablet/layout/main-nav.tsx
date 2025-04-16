import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, FileText, BookOpen, Ticket, Key, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  const links = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Latest Jobs",
      href: "/jobs",
      icon: Briefcase,
    },
    {
      name: "Results",
      href: "/results",
      icon: FileText,
    },
    {
      name: "Syllabus",
      href: "/syllabus",
      icon: BookOpen,
    },
    {
      name: "Admit Card",
      href: "/admit-card",
      icon: Ticket,
    },
    {
      name: "Answer Key",
      href: "/answer-key",
      icon: Key,
    },
    {
      name: "Contact Us",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <nav className={cn("hidden sm:flex items-center gap-1 lg:gap-2", className)} {...props}>
      {links.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          className={cn(
            "flex items-center gap-1 px-2 py-1.5 text-sm font-medium rounded-md transition-colors",
            isActive(link.href) 
              ? "text-red-600 bg-red-50 dark:bg-red-900/20" 
              : "text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          )}
        >
          <link.icon className="h-4 w-4" />
          <span>{link.name}</span>
        </Link>
      ))}
    </nav>
  )
}

