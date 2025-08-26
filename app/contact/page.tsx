import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Shield, CheckCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Get in touch with our insurance experts. We're here to help you find the perfect coverage for your needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
              <CardHeader>
                <Phone className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak with our licensed agents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">(555) 123-4567</p>
                  <p className="text-muted-foreground">24/7 Customer Support</p>
                  <p className="text-muted-foreground">Claims: (555) 123-4568</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-200">
              <CardHeader>
                <Mail className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Send us a message anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">info@secureguard.com</p>
                  <p className="text-muted-foreground">General Inquiries</p>
                  <p className="text-muted-foreground">claims@secureguard.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-400">
              <CardHeader>
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>Our main office location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">123 Insurance Way</p>
                  <p className="text-muted-foreground">Suite 100</p>
                  <p className="text-muted-foreground">Insurance City, IC 12345</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <Card className="max-w-2xl mx-auto animate-fade-in-up">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-hover" />
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>When you can reach our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Customer Service</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Claims Department</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Available 24/7</p>
                    <p>Emergency Claims Hotline</p>
                    <p>Online Claims Portal</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and one of our insurance experts will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="animate-slide-in-left">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    We're here to help with all your insurance needs. Send us a message and we'll respond promptly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Insurance Type</label>
                      <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                        <option>Select insurance type</option>
                        <option>Auto Insurance</option>
                        <option>Home Insurance</option>
                        <option>Health Insurance</option>
                        <option>Business Insurance</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full text-lg py-3 animate-pulse-hover">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8 animate-slide-in-right">
                <Card>
                  <CardHeader>
                    <MessageSquare className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                    <CardTitle>Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                      please call our 24/7 hotline.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Email responses within 24 hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Phone support available 24/7</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Licensed agents ready to help</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                    <CardTitle>Expert Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our team of licensed insurance professionals has over 25 years of combined experience helping
                      customers find the right coverage.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Licensed insurance agents</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Personalized service</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Local market expertise</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                    <CardTitle>Trusted Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      With an A+ rating from the Better Business Bureau and over 500,000 satisfied customers, you can
                      trust us with your insurance needs.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">A+</div>
                        <div className="text-xs text-muted-foreground">BBB Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">500K+</div>
                        <div className="text-xs text-muted-foreground">Happy Customers</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our insurance services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle>How quickly can I get a quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most quotes can be provided within minutes online or over the phone. For more complex coverage needs,
                  we may need 24-48 hours to provide a comprehensive quote.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>What information do I need for a quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For auto insurance, you'll need your driver's license, vehicle information, and driving history. For
                  home insurance, we'll need your address, home details, and any previous claims information.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle>Do you offer multi-policy discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer significant discounts when you bundle multiple policies like auto and home insurance.
                  Contact us to learn about all available discounts.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>How do I file a claim?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can file a claim 24/7 by calling our claims hotline at (555) 123-4568, through our online portal,
                  or by contacting your agent directly. We'll guide you through the entire process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait to protect what matters most. Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3 animate-pulse-hover">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 animate-pulse-hover bg-transparent">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
