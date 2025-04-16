import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Briefcase, FileText, Download, BookOpen, GraduationCap } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-muted/30 dark:to-background border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/30 dark:bg-grid-gray-800/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">About RojgaarYatra</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              India's leading platform for government job notifications, results, admit cards, and exam preparation
              resources.
            </p>
            <div className="flex space-x-3">
              <div className="transform transition-transform duration-300 hover:-translate-y-1">
                <Link
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
              <div className="transform transition-transform duration-300 hover:-translate-y-1">
                <Link
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
              <div className="transform transition-transform duration-300 hover:-translate-y-1">
                <Link
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
              <div className="transform transition-transform duration-300 hover:-translate-y-1">
                <Link
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all"
                >
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Latest Jobs", href: "/jobs", icon: <Briefcase className="h-4 w-4 mr-2 text-red-600" /> },
                { name: "Results", href: "/results", icon: <FileText className="h-4 w-4 mr-2 text-red-600" /> },
                { name: "Admit Cards", href: "/admit-card", icon: <Download className="h-4 w-4 mr-2 text-red-600" /> },
                { name: "Answer Keys", href: "/answer-key", icon: <FileText className="h-4 w-4 mr-2 text-red-600" /> },
                { name: "Syllabus", href: "/syllabus", icon: <BookOpen className="h-4 w-4 mr-2 text-red-600" /> },
                { name: "Previous Papers", href: "/previous-papers", icon: <GraduationCap className="h-4 w-4 mr-2 text-red-600" /> },
              ].map((link) => (
                <li 
                  key={link.name}
                  className="transform transition-transform duration-300 hover:translate-x-1"
                >
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Contact Us</h3>
            <ul className="space-y-3">
              <li 
                className="flex items-start transform transition-transform duration-300 hover:translate-x-1"
              >
                <Mail className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">support@rojgaaryatra.com</span>
              </li>
              <li 
                className="flex items-start transform transition-transform duration-300 hover:translate-x-1"
              >
                <Phone className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">+91 1234567890</span>
              </li>
              <li 
                className="flex items-start transform transition-transform duration-300 hover:translate-x-1"
              >
                <MapPin className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">123, Sector 15, Noida, Uttar Pradesh, India - 201301</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Subscribe to get latest job updates and career tips.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="h-9 border-gray-200 focus:border-red-500 focus:ring-red-500 dark:border-gray-800 dark:bg-muted/30 dark:text-gray-100" 
              />
              <div className="transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg transition-all">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} RojgaarYatra.com. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

