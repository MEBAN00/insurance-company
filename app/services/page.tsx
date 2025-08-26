import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Home, Heart, Building, Shield, Users, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
            Our Insurance Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Comprehensive coverage options designed to protect what matters most to you and your family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <CardHeader>
                <Car className="h-16 w-16 text-primary mb-4 animate-pulse-hover" />
                <CardTitle className="text-2xl">Auto Insurance</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive vehicle protection with competitive rates and exceptional service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Liability & Collision Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Comprehensive Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>24/7 Roadside Assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Multi-car Discounts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Rental Car Coverage</span>
                  </li>
                </ul>
                <Button asChild className="w-full animate-pulse-hover">
                  <Link href="/services/auto">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right">
              <CardHeader>
                <Home className="h-16 w-16 text-primary mb-4 animate-pulse-hover" />
                <CardTitle className="text-2xl">Home Insurance</CardTitle>
                <CardDescription className="text-lg">
                  Protect your home and belongings with comprehensive homeowner's coverage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Dwelling & Structure Protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Personal Property Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Natural Disaster Protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Liability Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Additional Living Expenses</span>
                  </li>
                </ul>
                <Button asChild className="w-full animate-pulse-hover">
                  <Link href="/services/home">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-200">
              <CardHeader>
                <Heart className="h-16 w-16 text-primary mb-4 animate-pulse-hover" />
                <CardTitle className="text-2xl">Health Insurance</CardTitle>
                <CardDescription className="text-lg">
                  Affordable health plans with extensive networks and comprehensive benefits.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Individual & Family Plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Preventive Care Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Prescription Drug Benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Mental Health Services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Telehealth Options</span>
                  </li>
                </ul>
                <Button asChild className="w-full animate-pulse-hover">
                  <Link href="/services/health">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right animation-delay-200">
              <CardHeader>
                <Building className="h-16 w-16 text-primary mb-4 animate-pulse-hover" />
                <CardTitle className="text-2xl">Business Insurance</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive business protection to safeguard your company's future.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>General Liability Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Property Insurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Workers' Compensation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Professional Liability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Cyber Liability Protection</span>
                  </li>
                </ul>
                <Button asChild className="w-full animate-pulse-hover">
                  <Link href="/services/business">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide more than just insurance - we offer peace of mind and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Comprehensive Coverage</h3>
              <p className="text-muted-foreground">
                Our policies are designed to provide complete protection, covering all aspects of your insurance needs.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-200">
              <Users className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Agents</h3>
              <p className="text-muted-foreground">
                Our licensed insurance professionals provide personalized guidance to help you choose the right
                coverage.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-400">
              <Phone className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer support ensures you can reach us whenever you need assistance or have
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Protected?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your insurance needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3 animate-pulse-hover">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 animate-pulse-hover bg-transparent">
                Contact an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
