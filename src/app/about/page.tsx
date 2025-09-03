import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Target, 
  Heart, 
  Users, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
                  AIOS
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
                We don&apos;t just build websites — we help launch dreams into reality. 
                Learn about our mission to empower South African entrepreneurs with professional digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AIOS (All In One Solutions) was born from a simple observation: too many talented South African 
                  entrepreneurs were struggling to establish their online presence. Traditional web agencies were 
                  either too expensive, too slow, or simply didn&apos;t understand the unique challenges facing startups 
                  and SMBs in South Africa.
                </p>
                <p>
                  We decided to change that. Our founder, passionate about both technology and entrepreneurship, 
                  set out to create a design agency that would truly serve the South African business community. 
                  We&apos;re not just another web design company — we&apos;re your strategic partners in digital growth.
                </p>
                <p>
                  Today, we&apos;re proud to be a soon-to-be registered private company (Pty Ltd) based in South Africa, 
                  specializing in custom web design, development, e-commerce solutions, and branding for startups 
                  and small to medium-sized businesses.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-orange/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-orange rounded-full flex items-center justify-center">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-lg font-semibold">Built with passion for SA entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our USPs Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our unique approach combines cutting-edge technology with deep understanding of the South African market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Try Before You Buy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We build and deploy a mockup for you to test first. Pay only when you&apos;re completely satisfied.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Outcome-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every design decision is made to drive results for your business, not just look pretty.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Rapid Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get your professional website live in one week with our streamlined process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-orange rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Post-Launch Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We don&apos;t disappear after launch. Ongoing support and coaching to help you succeed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Do What We Do Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why We Do What We Do</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our mission goes beyond building websites. We&apos;re here to democratize digital success for South African businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Empowering Entrepreneurs</h3>
                  <p className="text-muted-foreground">
                    Every successful business deserves a professional online presence. We believe that great design 
                    shouldn&apos;t be a luxury reserved for big corporations with massive budgets.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Driving Growth</h3>
                  <p className="text-muted-foreground">
                    We&apos;re passionate about seeing South African businesses thrive. Your success is our success, 
                    and we measure our impact by the growth we help you achieve.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                  <p className="text-muted-foreground">
                    We&apos;re not just service providers — we&apos;re part of the South African entrepreneurial community. 
                    We understand the local market, challenges, and opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-orange/10 rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold">Our Promise to You</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Direct communication — no middlemen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Results-driven approach to every project</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Post-launch support and guidance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Your success is our top priority</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Launch Your Dream?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Join the growing community of successful South African entrepreneurs who chose AIOS 
                as their digital partner. Let&apos;s build something amazing together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  Try It Before You Buy It 💡
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            <div className="pt-8">
              <div className="flex justify-center items-center space-x-8 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm">50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm">100% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Try Risk-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}