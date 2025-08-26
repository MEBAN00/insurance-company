import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Car, Home, Phone, Clock, Award, Users } from "lucide-react"

export default function InsuranceLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
            Protect What Matters Most
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Comprehensive insurance coverage with personalized service and unmatched reliability. Your peace of mind is
            our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 animate-pulse-hover">
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent animate-pulse-hover"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center animate-scale-in">
              <Award className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
              <h3 className="font-semibold text-foreground">A+ Rated</h3>
              <p className="text-muted-foreground text-sm">Better Business Bureau</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in animation-delay-200">
              <Users className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
              <h3 className="font-semibold text-foreground">500K+</h3>
              <p className="text-muted-foreground text-sm">Satisfied Customers</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in animation-delay-400">
              <Shield className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
              <h3 className="font-semibold text-foreground">25+ Years</h3>
              <p className="text-muted-foreground text-sm">Industry Experience</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in animation-delay-600">
              <Clock className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
              <h3 className="font-semibold text-foreground">24/7</h3>
              <p className="text-muted-foreground text-sm">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Coverage Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From auto to home to health insurance, we've got you covered with competitive rates and exceptional
              service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <CardHeader>
                <Car className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Auto Insurance</CardTitle>
                <CardDescription>
                  Comprehensive coverage for your vehicle with competitive rates and fast claims processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Liability & Collision Coverage</li>
                  <li>• Roadside Assistance</li>
                  <li>• Multi-car Discounts</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent animate-pulse-hover" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-200">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Home Insurance</CardTitle>
                <CardDescription>
                  Protect your home and belongings with comprehensive homeowner's insurance coverage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Property & Personal Property</li>
                  <li>• Natural Disaster Coverage</li>
                  <li>• Liability Protection</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent animate-pulse-hover" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-400">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Health Insurance</CardTitle>
                <CardDescription>
                  Affordable health insurance plans with extensive provider networks and comprehensive benefits.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Individual & Family Plans</li>
                  <li>• Preventive Care Coverage</li>
                  <li>• Prescription Drug Benefits</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent animate-pulse-hover" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Care Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Exceptional Customer Care</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our dedicated team is here to support you every step of the way. From getting a quote to filing a claim,
                we make insurance simple and stress-free.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 animate-fade-in-up">
                  <Phone className="h-6 w-6 text-primary animate-pulse-hover" />
                  <span className="text-foreground">24/7 Phone Support</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-200">
                  <Clock className="h-6 w-6 text-primary animate-pulse-hover" />
                  <span className="text-foreground">Fast Claims Processing</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-400">
                  <Shield className="h-6 w-6 text-primary animate-pulse-hover" />
                  <span className="text-foreground">Licensed Insurance Agents</span>
                </div>
              </div>
              <Button size="lg" className="mt-8 animate-pulse-hover">
                Contact Support
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg border animate-slide-in-right">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1">Insurance Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                    <option>Select insurance type</option>
                    <option>Auto Insurance</option>
                    <option>Home Insurance</option>
                    <option>Health Insurance</option>
                  </select>
                </div>
                <Button type="submit" className="w-full animate-pulse-hover">
                  Get Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">SecureGuard Insurance</span>
              </div>
              <p className="text-background/80 text-sm">
                Protecting families and businesses with reliable insurance coverage since 1999.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="/services/auto" className="hover:text-background transition-colors">
                    Auto Insurance
                  </a>
                </li>
                <li>
                  <a href="/services/home" className="hover:text-background transition-colors">
                    Home Insurance
                  </a>
                </li>
                <li>
                  <a href="/services/health" className="hover:text-background transition-colors">
                    Health Insurance
                  </a>
                </li>
                <li>
                  <a href="/services/business" className="hover:text-background transition-colors">
                    Business Insurance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="/contact" className="hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/claims" className="hover:text-background transition-colors">
                    File a Claim
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-background transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/portal" className="hover:text-background transition-colors">
                    Customer Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="/privacy" className="hover:text-background transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-background transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/licensing" className="hover:text-background transition-colors">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2024 SecureGuard Insurance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
