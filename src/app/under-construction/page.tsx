import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Construction,
  ArrowLeft,
  Mail,
  Calendar,
  Coffee
} from "lucide-react"

export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Icon */}
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-primary to-orange rounded-full flex items-center justify-center">
              <Construction className="h-12 w-12 text-white" />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Under{" "}
                <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
                  Construction
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
                We&apos;re working hard to bring you something amazing. This page is currently under development, 
                but the rest of our website is ready to serve you!
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Coffee className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We&apos;re putting the finishing touches on this section. 
                    Check back soon for updates!
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Have questions or need assistance? 
                    We&apos;re here to help you right now.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Follow our progress and be the first to know 
                    when new features go live.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-orange/10 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Meanwhile, explore what we have ready:</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/about" className="text-primary hover:underline">About AIOS</Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/services" className="text-primary hover:underline">Our Services</Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/projects" className="text-primary hover:underline">Our Projects</Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/pricing" className="text-primary hover:underline">Pricing</Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/contact" className="text-primary hover:underline">Get in Touch</Link>
              </div>
            </div>

            {/* Fun fact */}
            <div className="text-sm text-muted-foreground">
              <p>💡 Did you know? While you wait, you can still try our services before you buy them!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}