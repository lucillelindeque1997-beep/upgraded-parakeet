import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Wrench, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Code,
  Smartphone,
  Search,
  CreditCard,
  BarChart3,
  Shield
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
                Complete digital solutions designed specifically for South African startups and SMBs. 
                From custom websites to full e-commerce platforms, we&apos;ve got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do Best</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive digital services to launch and grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Custom Web Design & Development */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Custom Web Design & Development</CardTitle>
                <CardDescription className="text-base">
                  Stunning, responsive websites that work perfectly on all devices and convert visitors into customers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Modern Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">SEO Optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Fast Loading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Mobile First</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Analytics Ready</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  From simple landing pages to complex business websites, we build modern, 
                  fast-loading sites optimized for the South African market. Every website 
                  is designed to drive conversions and grow your business.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm">Starting from R3,000</p>
                  <p className="text-xs text-muted-foreground">Perfect for startups and SMBs</p>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Solutions */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-6">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">E-commerce Solutions</CardTitle>
                <CardDescription className="text-base">
                  Complete online stores with South African payment gateways and inventory management.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Payment Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Inventory Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Order Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">SA Shipping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Tax Calculations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Customer Accounts</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Launch your online store with integrated South African payment solutions including 
                  PayFast, SnapScan, and bank transfers. Complete with inventory management, 
                  automated invoicing, and customer management.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm">Starting from R7,000</p>
                  <p className="text-xs text-muted-foreground">Up to 10 products included</p>
                </div>
              </CardContent>
            </Card>

            {/* Graphic Design & Branding */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Graphic Design & Branding</CardTitle>
                <CardDescription className="text-base">
                  Complete brand identity packages that make your business stand out in the South African market.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Logo Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Brand Guidelines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Business Cards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Marketing Materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Social Media Assets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Print Design</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Professional brand identity that reflects your business values and appeals to 
                  South African customers. From logos to complete brand guidelines, we create 
                  cohesive visual identities that build trust and recognition.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm">Logo packages from R1,500</p>
                  <p className="text-xs text-muted-foreground">Full branding packages available</p>
                </div>
              </CardContent>
            </Card>

            {/* Website Maintenance & Support */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Website Maintenance & Support</CardTitle>
                <CardDescription className="text-base">
                  Keep your website running smoothly with our comprehensive maintenance and support plans.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Regular Updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Security Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Automated Backups</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Content Updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Technical Support</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our Post-Launch Partner Plans ensure your website stays secure, fast, and up-to-date. 
                  We handle all the technical aspects so you can focus on growing your business.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm">From R1,000/month</p>
                  <p className="text-xs text-muted-foreground">Post-Launch Partner Plans</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Day Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Design Day & Quick Fix Sessions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Need urgent updates or quick design tasks? Book a Design Day session for immediate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Hourly Sessions</CardTitle>
                <div className="text-2xl font-bold text-primary">R400 - R700</div>
                <CardDescription>Per hour</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick fixes and updates</li>
                  <li>• Content changes</li>
                  <li>• Minor design tweaks</li>
                  <li>• Technical support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-primary">
              <CardHeader>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Half Day</CardTitle>
                <div className="text-2xl font-bold text-primary">R900 - R1,200</div>
                <CardDescription>3 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple updates</li>
                  <li>• New page creation</li>
                  <li>• Design improvements</li>
                  <li>• Feature additions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Full Day</CardTitle>
                <div className="text-2xl font-bold text-primary">R1,500 - R2,200</div>
                <CardDescription>6 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Major updates</li>
                  <li>• Website redesign</li>
                  <li>• New functionality</li>
                  <li>• Complete overhauls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What&apos;s Included</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every project comes with essential features to ensure your success online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mobile Responsive</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect display on all devices from phones to desktops.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">SEO Optimized</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in optimization to help you rank on Google.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Analytics Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Google Analytics setup to track your success.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secure & Fast</h3>
                <p className="text-sm text-muted-foreground">
                  SSL certificates and optimized loading speeds.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">SA Payment Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Integration with local payment providers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Modern Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Built with the latest web technologies for performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let&apos;s discuss your project and build something amazing together. 
                Remember - you can try it before you buy it!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  Get Started Today 💡
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="pt-8">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-orange/10 rounded-lg inline-block">
                <h4 className="font-semibold mb-2">💡 Try It Before You Buy It</h4>
                <p className="text-sm text-muted-foreground max-w-lg">
                  We&apos;ll build and deploy a mockup for you to test first. Pay only when you&apos;re 
                  completely satisfied with the results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}