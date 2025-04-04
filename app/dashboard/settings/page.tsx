import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Rahul" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Sharma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="rahul@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123, ABC Colony, New Delhi - 110001" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-600 hover:bg-red-700">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card className="bg-white dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Update your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-600 hover:bg-red-700">Update Password</Button>
              </CardFooter>
            </Card>

            <Card className="bg-white dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Educational Information</CardTitle>
                <CardDescription>Update your educational details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="highest-qualification">Highest Qualification</Label>
                  <Select defaultValue="bachelors">
                    <SelectTrigger id="highest-qualification">
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University/Institution</Label>
                  <Input id="university" defaultValue="Delhi University" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year-of-passing">Year of Passing</Label>
                    <Input id="year-of-passing" defaultValue="2022" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="percentage">Percentage/CGPA</Label>
                    <Input id="percentage" defaultValue="8.5" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-600 hover:bg-red-700">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card className="bg-white dark:bg-gray-950">
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border border-red-200 p-4 dark:border-red-800">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-red-600 dark:text-red-400">Delete Account</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Once you delete your account, there is no going back. This action cannot be undone.
                      </p>
                    </div>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-white dark:bg-gray-950">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-job-alerts">Job Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about new job postings matching your profile
                      </p>
                    </div>
                    <Switch id="email-job-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-application-updates">Application Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive updates about your job applications</p>
                    </div>
                    <Switch id="email-application-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-result-alerts">Result Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when results are declared</p>
                    </div>
                    <Switch id="email-result-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-marketing">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive promotional emails and newsletters</p>
                    </div>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">SMS Notifications</h3>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-job-alerts">Job Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive SMS notifications about new job postings</p>
                    </div>
                    <Switch id="sms-job-alerts" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-application-updates">Application Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive SMS updates about your job applications</p>
                    </div>
                    <Switch id="sms-application-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-result-alerts">Result Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive SMS notifications when results are declared
                      </p>
                    </div>
                    <Switch id="sms-result-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Frequency</h3>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="notification-frequency">Email Digest Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="notification-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Digest</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-red-600 hover:bg-red-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card className="bg-white dark:bg-gray-950">
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Profile Visibility</h3>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="profile-public">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to employers and recruiters
                      </p>
                    </div>
                    <Switch id="profile-public" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-contact">Show Contact Information</Label>
                      <p className="text-sm text-muted-foreground">Display your contact information on your profile</p>
                    </div>
                    <Switch id="show-contact" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-education">Show Educational Details</Label>
                      <p className="text-sm text-muted-foreground">
                        Display your educational information on your profile
                      </p>
                    </div>
                    <Switch id="show-education" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Usage</h3>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-analytics">Analytics</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow us to collect anonymous usage data to improve our services
                      </p>
                    </div>
                    <Switch id="data-analytics" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="personalized-recommendations">Personalized Recommendations</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow us to use your data to provide personalized job recommendations
                      </p>
                    </div>
                    <Switch id="personalized-recommendations" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="third-party-sharing">Third-Party Data Sharing</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow us to share your data with trusted third-party partners
                      </p>
                    </div>
                    <Switch id="third-party-sharing" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cookie Preferences</h3>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="essential-cookies">Essential Cookies</Label>
                      <p className="text-sm text-muted-foreground">Required for the website to function properly</p>
                    </div>
                    <Switch id="essential-cookies" defaultChecked disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="functional-cookies">Functional Cookies</Label>
                      <p className="text-sm text-muted-foreground">Enhance website functionality and personalization</p>
                    </div>
                    <Switch id="functional-cookies" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="analytics-cookies">Analytics Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website
                      </p>
                    </div>
                    <Switch id="analytics-cookies" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-cookies">Marketing Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Used to display relevant advertisements and marketing campaigns
                      </p>
                    </div>
                    <Switch id="marketing-cookies" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-red-600 hover:bg-red-700">Save Privacy Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card className="bg-white dark:bg-gray-950">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the website looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4 cursor-pointer bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Light</span>
                      <div className="h-4 w-4 rounded-full border-2 border-red-600 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      </div>
                    </div>
                    <div className="h-20 bg-gray-100 rounded-md border"></div>
                  </div>
                  <div className="border rounded-md p-4 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Dark</span>
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
                    </div>
                    <div className="h-20 bg-gray-800 rounded-md border border-gray-700"></div>
                  </div>
                  <div className="border rounded-md p-4 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">System</span>
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
                    </div>
                    <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-800 rounded-md border"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Font Size</h3>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="font-size">Select Font Size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="font-size">
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                      <SelectItem value="x-large">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Layout Density</h3>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="layout-density">Select Layout Density</Label>
                  <Select defaultValue="comfortable">
                    <SelectTrigger id="layout-density">
                      <SelectValue placeholder="Select layout density" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="comfortable">Comfortable</SelectItem>
                      <SelectItem value="spacious">Spacious</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-red-600 hover:bg-red-700">Save Appearance Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

