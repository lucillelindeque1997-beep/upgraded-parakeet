import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  ShoppingCart,
  Globe,
  Calendar,
  MapPin
} from "lucide-react"

export default function ProjectsPage() {
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
                  Projects
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
                See how we&apos;ve helped South African businesses succeed online. From startups to established SMBs, 
                every project tells a story of digital transformation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Case Studies</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real results for real businesses. Here&apos;s how we&apos;ve helped our clients achieve their digital goals.
            </p>
          </div>

          <div className="space-y-16">
            {/* Cape Town Restaurant */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Cape Town</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>3 weeks</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Ocean View Restaurant</h3>
                    <p className="text-lg text-muted-foreground mb-4">Modern restaurant website with online ordering system</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      A family-owned restaurant in Cape Town needed to pivot during lockdown. We built them a 
                      beautiful website with integrated online ordering, showcasing their seafood specialties 
                      and enabling customers to order for pickup and delivery.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">300%</div>
                        <div className="text-sm text-muted-foreground">Increase in online orders</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">65%</div>
                        <div className="text-sm text-muted-foreground">Mobile traffic</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">R45k</div>
                        <div className="text-sm text-muted-foreground">Monthly online revenue</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Website Design</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Online Ordering</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Mobile Optimization</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Photography</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full sm:w-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Globe className="h-16 w-16 mx-auto text-blue-600" />
                    <p className="text-blue-600 font-medium">Restaurant Website</p>
                    <p className="text-sm text-blue-500">Modern design with online ordering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Johannesburg Tech Startup */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <TrendingUp className="h-16 w-16 mx-auto text-purple-600" />
                  <p className="text-purple-600 font-medium">SaaS Platform</p>
                  <p className="text-sm text-purple-500">Professional landing page</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Johannesburg</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2 weeks</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">TechFlow Solutions</h3>
                  <p className="text-lg text-muted-foreground mb-4">SaaS platform landing page and investor presentation</p>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    A Johannesburg-based tech startup needed a professional website to attract investors 
                    and early customers. We created a compelling landing page that clearly communicated 
                    their value proposition and included an investor deck presentation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">R2M</div>
                      <div className="text-sm text-muted-foreground">Funding secured</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-muted-foreground">Beta signups</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">85%</div>
                      <div className="text-sm text-muted-foreground">Investor interest</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Landing Page</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Investor Deck</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Lead Generation</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Analytics</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full sm:w-auto">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Button>
              </div>
            </div>

            {/* Durban Fashion Boutique */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Durban</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>4 weeks</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Elegance Fashion Boutique</h3>
                    <p className="text-lg text-muted-foreground mb-4">E-commerce store with local delivery integration</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      A boutique fashion store in Durban wanted to expand their reach beyond their physical location. 
                      We built them a stunning e-commerce platform with local delivery options, inventory management, 
                      and social media integration.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">R50k</div>
                        <div className="text-sm text-muted-foreground">Monthly online sales</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">1200+</div>
                        <div className="text-sm text-muted-foreground">Online customers</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">40%</div>
                        <div className="text-sm text-muted-foreground">Revenue increase</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">E-commerce Store</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Payment Integration</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Inventory System</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Local Delivery</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full sm:w-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Site
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <ShoppingCart className="h-16 w-16 mx-auto text-pink-600" />
                    <p className="text-pink-600 font-medium">Fashion E-commerce</p>
                    <p className="text-sm text-pink-500">Online boutique store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">More Success Stories</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every project is unique, but the results speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto text-green-600 mb-2" />
                  <p className="text-green-600 font-medium">Fitness Studio</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>FitLife Studio</CardTitle>
                <CardDescription>Pretoria • Fitness & Wellness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Online class booking system with member portal and payment integration.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">+200% bookings</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-12 w-12 mx-auto text-orange-600 mb-2" />
                  <p className="text-orange-600 font-medium">Law Firm</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Legal Eagles</CardTitle>
                <CardDescription>Port Elizabeth • Legal Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional website with client portal and case management integration.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">+150% leads</span>
                  <span className="text-muted-foreground">3 weeks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingCart className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                  <p className="text-blue-600 font-medium">Craft Store</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Creative Crafts</CardTitle>
                <CardDescription>Bloemfontein • Arts & Crafts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  E-commerce platform for handmade crafts with artist profiles and tutorials.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">+300% sales</span>
                  <span className="text-muted-foreground">4 weeks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto text-purple-600 mb-2" />
                  <p className="text-purple-600 font-medium">Consulting</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Business Pro Consulting</CardTitle>
                <CardDescription>Sandton • Business Consulting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional consulting website with client onboarding and resource library.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">+180% inquiries</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-12 w-12 mx-auto text-red-600 mb-2" />
                  <p className="text-red-600 font-medium">Real Estate</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Property Plus</CardTitle>
                <CardDescription>Stellenbosch • Real Estate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Property listing platform with virtual tours and lead management system.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">+250% leads</span>
                  <span className="text-muted-foreground">5 weeks</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto text-indigo-600 mb-2" />
                  <p className="text-indigo-600 font-medium">Healthcare</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Wellness Clinic</CardTitle>
                <CardDescription>East London • Healthcare</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Medical practice website with appointment booking and patient portal.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">+120% bookings</span>
                  <span className="text-muted-foreground">3 weeks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with AIOS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="italic text-muted-foreground">
                  &quot;AIOS transformed our business. The &apos;try before you buy&apos; approach gave us confidence, 
                  and the results exceeded our expectations. Highly recommended!&quot;
                </p>
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">Ocean View Restaurant, Cape Town</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="italic text-muted-foreground">
                  &quot;The team at AIOS understood our vision perfectly. They delivered a website that 
                  helped us secure R2M in funding. Professional and results-driven.&quot;
                </p>
                <div>
                  <p className="font-semibold">David Chen</p>
                  <p className="text-sm text-muted-foreground">TechFlow Solutions, Johannesburg</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <p className="italic text-muted-foreground">
                  &quot;Our online sales went from zero to R50k per month in just 3 months. 
                  The e-commerce platform they built is exactly what we needed.&quot;
                </p>
                <div>
                  <p className="font-semibold">Nomsa Dlamini</p>
                  <p className="text-sm text-muted-foreground">Elegance Fashion Boutique, Durban</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Success Stories?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let&apos;s create your success story next. Every great project starts with a conversation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  Start Your Project 💡
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
                  Join 50+ successful South African businesses who chose to try our work before committing. 
                  See the results first, then decide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}