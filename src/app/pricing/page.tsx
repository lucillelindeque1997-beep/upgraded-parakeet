import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Lightbulb,
  CreditCard,
  CalendarDays
} from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transparent{" "}
                <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
                Clear, affordable packages designed specifically for South African startups and SMBs. 
                No hidden costs, no surprises — just honest pricing that grows with your business.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>All packages include our &quot;Try Before You Buy&quot; guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Package</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From simple landing pages to complete e-commerce solutions. All prices in South African Rand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Static One Page */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Static One Page Site</CardTitle>
                <div className="text-3xl font-bold text-primary">R500</div>
                <CardDescription>Perfect for simple business presence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Single page design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Mobile responsive</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Social media links</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>1 week delivery</span>
                  </li>
                </ul>
                
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Best for:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• New businesses</li>
                    <li>• Service providers</li>
                    <li>• Portfolio websites</li>
                  </ul>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Launch-Ready Starter */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Launch-Ready Starter Site</CardTitle>
                <div className="text-3xl font-bold text-primary">R3,000 - R5,000</div>
                <CardDescription>Professional multi-page website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>1-3 pages (Home, About, Contact)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Professional design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Contact forms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Google Analytics setup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>1-2 weeks delivery</span>
                  </li>
                </ul>
                
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Best for:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Small businesses</li>
                    <li>• Professional services</li>
                    <li>• Local businesses</li>
                  </ul>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Client Magnet Website */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Client Magnet Website</CardTitle>
                <div className="text-3xl font-bold text-primary">R5,000 - R8,500</div>
                <CardDescription>SEO-optimized website that converts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>4-6 pages (complete business site)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Lead generation forms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Google Analytics & Search Console</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Social media integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>3 months support included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>2-3 weeks delivery</span>
                  </li>
                </ul>
                
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Best for:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Growing businesses</li>
                    <li>• B2B companies</li>
                    <li>• Service-based businesses</li>
                  </ul>
                </div>

                <Button className="w-full" variant="gradient" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Online Store Starter */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Online Store Starter</CardTitle>
                <div className="text-3xl font-bold text-primary">R7,000 - R11,000</div>
                <CardDescription>Complete e-commerce solution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Up to 10 products</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SA payment integration (PayFast)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Order management system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Customer accounts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>6 months support included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>3-4 weeks delivery</span>
                  </li>
                </ul>
                
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">Best for:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Product-based businesses</li>
                    <li>• Retail stores</li>
                    <li>• Online entrepreneurs</li>
                  </ul>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Day Pricing */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Design Day & Quick Fix Sessions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Need quick updates or urgent design tasks? Book a Design Day session for immediate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Hourly Sessions</CardTitle>
                <div className="text-3xl font-bold text-primary">R400 - R700</div>
                <CardDescription>Per hour</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick fixes and updates</li>
                  <li>• Content changes</li>
                  <li>• Minor design tweaks</li>
                  <li>• Technical support</li>
                  <li>• Bug fixes</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Book Session</Link>
                </Button>
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
                <div className="text-3xl font-bold text-primary">R900 - R1,200</div>
                <CardDescription>3 hours focused work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple updates</li>
                  <li>• New page creation</li>
                  <li>• Design improvements</li>
                  <li>• Feature additions</li>
                  <li>• Performance optimization</li>
                </ul>
                <Button variant="gradient" className="w-full" asChild>
                  <Link href="/contact">Book Session</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Full Day</CardTitle>
                <div className="text-3xl font-bold text-primary">R1,500 - R2,200</div>
                <CardDescription>6 hours dedicated work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Major updates</li>
                  <li>• Website redesign</li>
                  <li>• New functionality</li>
                  <li>• Complete overhauls</li>
                  <li>• Training & consultation</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Book Session</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Post-Launch Support */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Post-Launch Partner Plans</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Keep your website secure, updated, and performing at its best with our ongoing support plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Essential Plan</CardTitle>
                <div className="text-3xl font-bold text-primary">R1,000/month</div>
                <CardDescription>Basic maintenance and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Weekly automated backups</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Security monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Software updates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>1 hour of updates/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Choose Essential</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-xl">Professional Plan</CardTitle>
                <div className="text-3xl font-bold text-primary">R1,800/month</div>
                <CardDescription>Comprehensive support and growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Everything in Essential</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Daily backups</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Advanced security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SEO monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>3 hours of updates/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Priority phone support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Monthly analytics reports</span>
                  </li>
                </ul>
                <Button variant="gradient" className="w-full" asChild>
                  <Link href="/contact">Choose Professional</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Payment Terms & Guarantee</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Flexible payment options designed for South African businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Try It Before You Buy It 💡</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>We build and deploy a mockup site for you to test and review</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>If you&apos;re happy, pay 50% deposit to continue</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Remaining 50% paid on project completion</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>No upfront payment required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Bank transfer (EFT)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>PayFast online payment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>SnapScan QR code</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Payment plans available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                    <CalendarDays className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Payment Plans Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">For packages R5,000+</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 3-month payment plan available</li>
                        <li>• No interest charged</li>
                        <li>• 50% upfront, 25% at 6 weeks, 25% on completion</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">For e-commerce packages</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 6-month payment plan available</li>
                        <li>• Small setup fee applies</li>
                        <li>• Perfect for larger projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-orange/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Our Guarantee</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ 100% satisfaction guarantee</li>
                  <li>✅ Unlimited revisions during development</li>
                  <li>✅ 30-day money-back guarantee</li>
                  <li>✅ Free minor updates for 30 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Choose your package and let&apos;s bring your vision to life. Remember - you can try it before you buy it!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  Get Your Free Mockup 💡
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="pt-8">
              <div className="flex justify-center items-center space-x-8 text-muted-foreground text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span>Try Risk-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}