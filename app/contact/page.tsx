import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/mobile/layout/site-header"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="pt-2 pb-4 sm:py-8 md:py-12 bg-muted/30">
          <div className="container px-3 sm:px-4">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Contact <span className="text-red-600">Us</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                Get in touch with us for any queries or support
              </p>
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-8 md:py-12">
          <div className="container px-3 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4 sm:space-y-6">
                    <div className="space-y-2 sm:space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="Enter the subject" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Enter your message"
                          className="min-h-[120px]"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm sm:text-base">Phone</h3>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            +91 98765 43210
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm sm:text-base">Email</h3>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            support@rojgaaryatra.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm sm:text-base">Address</h3>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            123, Exam Center Road, New Delhi - 110001
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connect With Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m22 17-4-4 4-4"></path>
                          <path d="M2 7h16v10H2z"></path>
                        </svg>
                        <span className="sr-only">YouTube</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Find Us on Map</h2>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {/* This would be replaced with an actual Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Google Maps Embed would appear here
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">How can I get updates about new job notifications?</h3>
                    <p className="text-muted-foreground">
                      You can register on our website to receive email notifications about new job postings. You can
                      also follow us on social media for regular updates.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">
                      I'm having trouble downloading my admit card. What should I do?
                    </h3>
                    <p className="text-muted-foreground">
                      Please contact our support team via email or phone with your registration details, and we'll
                      assist you with downloading your admit card.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">How can I advertise on RojgaarYatra.com?</h3>
                    <p className="text-muted-foreground">
                      For advertising inquiries, please contact our marketing team at marketing@rojgaaryatra.com with
                      details about your requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Do you provide career counseling services?</h3>
                    <p className="text-muted-foreground">
                      Yes, we offer career counseling services. You can book a session with our career experts through
                      the Career Guidance section on our website.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

