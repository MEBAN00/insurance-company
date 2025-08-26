import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Shield, Clock, CheckCircle, DollarSign, Users, Award } from "lucide-react"

export default function AutoInsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Auto Insurance</h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
                Comprehensive vehicle protection with competitive rates, exceptional service, and 24/7 roadside
                assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3 animate-pulse-hover">
                  Get Auto Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent animate-pulse-hover"
                >
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Car className="h-64 w-64 text-primary-foreground/20 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Coverage Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive auto insurance coverage options designed to protect you on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Liability Coverage</CardTitle>
                <CardDescription>
                  Required by law, protects you financially if you're at fault in an accident.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bodily Injury Liability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Property Damage Liability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Legal Defense Coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-200">
              <CardHeader>
                <Car className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Collision Coverage</CardTitle>
                <CardDescription>
                  Covers damage to your vehicle from collisions with other vehicles or objects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Vehicle Repair Costs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Total Loss Protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Deductible Options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-400">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Comprehensive Coverage</CardTitle>
                <CardDescription>
                  Protects against theft, vandalism, weather damage, and other non-collision incidents.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Theft Protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Weather Damage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Vandalism Coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Auto Insurance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer more than just coverage - we provide peace of mind and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <DollarSign className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Competitive Rates</h3>
              <p className="text-muted-foreground">
                Get the best value with our competitive pricing and multiple discount opportunities.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-200">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">24/7 Roadside</h3>
              <p className="text-muted-foreground">
                Round-the-clock roadside assistance including towing, jump-starts, and lockout service.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-400">
              <Users className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Claims</h3>
              <p className="text-muted-foreground">
                Fast, fair claims processing with dedicated adjusters who understand your needs.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-600">
              <Award className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">A+ Rated</h3>
              <p className="text-muted-foreground">
                Trusted by customers and rated A+ by the Better Business Bureau for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Your Auto Insurance Quote</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll provide you with a personalized quote in minutes.
              </p>
            </div>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>Auto Insurance Quote Request</CardTitle>
                <CardDescription>
                  Provide your information to receive a customized auto insurance quote.
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Vehicle Year</label>
                      <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                        <option>Select year</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>Older</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Vehicle Make</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        placeholder="e.g., Toyota, Honda, Ford"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Vehicle Model</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                      placeholder="e.g., Camry, Civic, F-150"
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-3 animate-pulse-hover">
                    Get My Auto Insurance Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
