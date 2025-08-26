import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Award, Clock, Target, Heart, TrendingUp, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
            About SecureGuard Insurance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            For over 25 years, we've been protecting families and businesses with comprehensive insurance solutions and
            exceptional service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To provide comprehensive, affordable insurance coverage while delivering exceptional customer service
                that exceeds expectations. We believe everyone deserves peace of mind and financial protection.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 animate-fade-in-up">
                  <Target className="h-6 w-6 text-primary animate-pulse-hover" />
                  <span className="text-foreground">Customer-First Approach</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-200">
                  <Heart className="h-6 w-6 text-primary animate-pulse-hover" />
                  <span className="text-foreground">Compassionate Service</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up animation-delay-400">
                  <TrendingUp className="h-6 w-6 text-primary animate-pulse-hover" />
                  <span className="text-foreground">Continuous Innovation</span>
                </div>
              </div>
            </div>
            <div className="bg-muted p-8 rounded-lg animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be the most trusted insurance provider in the nation, known for our integrity, reliability, and
                unwavering commitment to protecting what matters most to our customers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our customers every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We operate with honesty and transparency in all our dealings, building trust through ethical
                  practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-200">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're committed to supporting the communities we serve and making a positive impact in people's lives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-400">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in everything we do, continuously improving our services and expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-600">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  You can count on us to be there when you need us most, providing consistent and dependable service.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted insurance leader.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-in-left">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">1999</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">
                    SecureGuard Insurance was established with a mission to provide personalized insurance solutions to
                    local families and businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-200">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2005</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Regional Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded operations across multiple states, serving over 50,000 customers with comprehensive
                    insurance coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-400">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2015</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Innovation</h3>
                  <p className="text-muted-foreground">
                    Launched our digital platform, making it easier for customers to manage policies, file claims, and
                    get support online.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-600">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Industry Leader</h3>
                  <p className="text-muted-foreground">
                    Today, we proudly serve over 500,000 customers nationwide with A+ ratings and industry-leading
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose SecureGuard?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're more than just an insurance company - we're your trusted partner in protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 animate-slide-in-left">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse-hover" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Rates</h3>
                <p className="text-muted-foreground">
                  We offer some of the most competitive rates in the industry without compromising on coverage quality.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-200">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse-hover" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our customer support team is available around the clock to assist you with any questions or claims.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-400">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse-hover" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Claims Processing</h3>
                <p className="text-muted-foreground">
                  We process claims quickly and efficiently, getting you back on your feet as soon as possible.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-600">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse-hover" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Licensed Agents</h3>
                <p className="text-muted-foreground">
                  All our agents are fully licensed and trained to provide expert guidance on your insurance needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-800">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse-hover" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Coverage</h3>
                <p className="text-muted-foreground">
                  Customize your coverage to fit your specific needs and budget with our flexible policy options.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-slide-in-left animation-delay-1000">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse-hover" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  We're deeply committed to the communities we serve and actively support local initiatives.
                </p>
              </div>
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
              Join over 500,000 satisfied customers who trust SecureGuard Insurance to protect what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3 animate-pulse-hover">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 animate-pulse-hover bg-transparent">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
