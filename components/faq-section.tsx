"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "How do I apply for government jobs through RojgaarYatra?",
    answer:
      "To apply for government jobs through RojgaarYatra, create an account, browse available jobs, click on 'Apply Now' for your desired position, fill out the application form, upload required documents, and submit your application. You can track your application status in your dashboard.",
  },
  {
    question: "How can I get notifications about new job postings?",
    answer:
      "You can get notifications about new job postings by registering on RojgaarYatra and setting up job alerts based on your preferences. You'll receive email notifications whenever new jobs matching your criteria are posted.",
  },
  {
    question: "Are the exam materials on RojgaarYatra free?",
    answer:
      "RojgaarYatra offers both free and premium study materials. Basic resources like syllabus, previous year papers, and some mock tests are available for free. Premium materials with in-depth content, full mock test series, and personalized feedback require a subscription.",
  },
  {
    question: "How do I download my admit card?",
    answer:
      "To download your admit card, log in to your RojgaarYatra account, navigate to the 'Admit Card' section, select the relevant exam, verify your details, and click on 'Download Admit Card'. Make sure to check that all information is correct before printing.",
  },
  {
    question: "What should I do if I find an error in my application?",
    answer:
      "If you find an error in your submitted application, contact our support team immediately through the 'Help & Support' section. Depending on the application deadline and the nature of the error, our team will guide you on the correction process.",
  },
]

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div 
          key={index} 
          className="bg-white dark:bg-muted/30 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-red-200 dark:hover:border-red-800"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none text-gray-800 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-red-600 dark:text-red-400 transition-transform duration-300",
                activeIndex === index ? "transform rotate-180" : "",
              )}
            />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-muted/50"
              >
                <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button 
            variant="outline" 
            className="h-11 px-6 text-base font-medium bg-gradient-to-r from-red-600 to-red-700 text-white border-none hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link href="/faq">View More FAQs</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

