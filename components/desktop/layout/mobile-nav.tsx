import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import { Home, Briefcase, FileText, BookOpen, Ticket, Key, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="sm:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="text-xl font-bold text-red-600">Rojgaar</span>
            <span className="text-xl font-bold">Yatra</span>
            <span className="text-xl font-bold text-red-600">.com</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-2 mt-8 px-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
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
        <div className="flex flex-col gap-2 mt-6 px-7">
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/auth/signin" onClick={() => setOpen(false)}>
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </Button>
          <Button className="bg-red-600 hover:bg-red-700" asChild>
            <Link href="/auth/signup" onClick={() => setOpen(false)}>
              Sign Up
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
} 