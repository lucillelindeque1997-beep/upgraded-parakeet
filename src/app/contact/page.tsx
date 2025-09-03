import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  ArrowRight,
  Lightbulb,
  CheckCircle
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Get In{" "}
                <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
                Ready to launch your dream into reality? Let&apos;s start with a conversation. 
                We&apos;ll discuss your project and show you exactly how we can help your business grow online.
              </p>
            </div>
            
            <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-orange/10 rounded-lg">
              <div className="flex items-center space-x-3 text-primary">
                <Lightbulb className="h-5 w-5" />
                <span className="font-semibold">Remember: You can try it before you buy it!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Let&apos;s Talk</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to transform your business with a professional website? We&apos;d love to hear about your project 
                  and show you how we can help you succeed online.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@aios.co.za</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+27 11 123 4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM SAST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Johannesburg, South Africa</p>
                    <p className="text-sm text-muted-foreground">Serving clients nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                    <p className="text-sm text-muted-foreground">Same-day response for urgent requests</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-orange/5 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Prefer to Chat?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a free 30-minute consultation call to discuss your project in detail.
                </p>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tell Us About Your Project</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input id="phone" placeholder="+27 11 123 4567" />
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input id="company" placeholder="Your Business Name" />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium mb-2">
                          Industry
                        </label>
                        <select 
                          id="industry" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select your industry</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="restaurant">Restaurant & Food</option>
                          <option value="professional">Professional Services</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="fitness">Fitness & Wellness</option>
                          <option value="beauty">Beauty & Fashion</option>
                          <option value="technology">Technology</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select 
                        id="projectType" 
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="new-website">New Website (R3,000 - R8,500)</option>
                        <option value="e-commerce">E-commerce Store (R7,000 - R11,000)</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="branding">Branding & Logo Design</option>
                        <option value="maintenance">Website Maintenance</option>
                        <option value="design-day">Design Day Session</option>
                        <option value="consultation">Just Want to Chat</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select 
                          id="budget" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select your budget</option>
                          <option value="under-1000">Under R1,000</option>
                          <option value="1000-3000">R1,000 - R3,000</option>
                          <option value="3000-5000">R3,000 - R5,000</option>
                          <option value="5000-8000">R5,000 - R8,000</option>
                          <option value="8000-12000">R8,000 - R12,000</option>
                          <option value="over-12000">Over R12,000</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                          Timeline
                        </label>
                        <select 
                          id="timeline" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">When do you need this?</option>
                          <option value="urgent">ASAP (1 week)</option>
                          <option value="soon">Within 2-3 weeks</option>
                          <option value="month">Within a month</option>
                          <option value="flexible">I&apos;m flexible</option>
                          <option value="planning">Just planning ahead</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tell Us About Your Project <span className="text-red-500">*</span>
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your business, what you want to achieve with your website, any specific features you need, examples of sites you like, or any other details that would help us understand your vision..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Current Website */}
                    <div>
                      <label htmlFor="currentWebsite" className="block text-sm font-medium mb-2">
                        Current Website (if you have one)
                      </label>
                      <Input id="currentWebsite" placeholder="https://yourwebsite.com" />
                    </div>

                    {/* How did you hear about us */}
                    <div>
                      <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">
                        How did you hear about us?
                      </label>
                      <select 
                        id="hearAbout" 
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select one</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Friend/Business Referral</option>
                        <option value="social-media">Social Media</option>
                        <option value="previous-client">Previous Client</option>
                        <option value="networking">Networking Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col space-y-4">
                      <Button type="submit" variant="gradient" className="w-full text-lg py-6">
                        Send My Project Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy. 
                        We&apos;ll never share your information with third parties.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Happens Next?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Here&apos;s our simple, transparent process from first contact to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle>We Respond Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Within 24 hours, you&apos;ll receive a detailed response with questions about your project, 
                  timeline, and next steps. We might suggest a quick call to clarify details.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle>We Build Your Mockup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Based on our discussion, we create and deploy a working mockup of your website. 
                  You can test it, share it, and see exactly what you&apos;re getting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle>You Decide & We Deliver</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Love the mockup? Pay 50% to continue and we&apos;ll complete your project. 
                  Final payment only after you&apos;re 100% satisfied with the result.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Quick answers to common questions about working with AIOS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most websites are completed within 1-4 weeks, depending on complexity. 
                    Simple sites can be done in a week, while e-commerce projects typically take 3-4 weeks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with clients outside Johannesburg?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We work with clients across South Africa and beyond. 
                    All our communication is done online, making distance irrelevant.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I don&apos;t like the mockup?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No problem! If you&apos;re not happy with the mockup, you pay nothing. 
                    We only ask for payment when you&apos;re completely satisfied with what we&apos;ve built.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you help with ongoing maintenance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We offer Post-Launch Partner Plans starting from R1,000/month. 
                    This includes updates, security monitoring, backups, and ongoing support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide training?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every project includes basic training on how to update your content. 
                    We also offer extended training sessions as part of our Design Day packages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept bank transfers (EFT), PayFast online payments, and SnapScan. 
                    Payment plans are available for larger projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Launch Your Dream?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Don&apos;t wait any longer. Your business deserves a professional online presence that drives results.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center items-center space-x-8 text-muted-foreground text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free Mockup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24-Hour Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No Upfront Payment</span>
                </div>
              </div>

              <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-orange/10 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                  💡 Try It Before You Buy It
                </h3>
                <p className="text-muted-foreground max-w-lg">
                  We&apos;re so confident in our work that we&apos;ll build and deploy a mockup for you to test first. 
                  See the results, then decide if you want to move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}