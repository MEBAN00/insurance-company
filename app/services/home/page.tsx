import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Shield, Clock, CheckCircle, DollarSign, Users, Award } from "lucide-react"

export default function HomeInsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Home Insurance</h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
                Comprehensive protection for your home and belongings with personalized coverage options and competitive
                rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3 animate-pulse-hover">
                  Get Home Quote
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
              <Home className="h-64 w-64 text-primary-foreground/20 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What's Covered</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive home insurance policies protect your dwelling, personal property, and provide liability
              coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Dwelling Coverage</CardTitle>
                <CardDescription>
                  Protects the structure of your home from covered perils like fire, wind, and hail.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Structure Repair/Rebuild</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Attached Structures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Built-in Appliances</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-200">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Personal Property</CardTitle>
                <CardDescription>
                  Covers your belongings including furniture, electronics, clothing, and other personal items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Furniture & Electronics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Clothing & Jewelry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Off-Premises Coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-400">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4 animate-pulse-hover" />
                <CardTitle>Liability Protection</CardTitle>
                <CardDescription>
                  Protects you financially if someone is injured on your property or you damage someone else's property.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bodily Injury Claims</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Property Damage Claims</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Legal Defense Costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our home insurance goes beyond basic coverage to provide comprehensive protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Additional Living Expenses</h3>
              <p className="text-muted-foreground">
                Coverage for temporary housing and living expenses if your home becomes uninhabitable.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-200">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Natural Disaster Coverage</h3>
              <p className="text-muted-foreground">
                Protection against weather-related damage including storms, hail, and wind damage.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-400">
              <DollarSign className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Replacement Cost Coverage</h3>
              <p className="text-muted-foreground">
                Full replacement cost coverage for your home and belongings, not just depreciated value.
              </p>
            </div>

            <div className="text-center animate-scale-in animation-delay-600">
              <Award className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-hover" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Multi-Policy Discounts</h3>
              <p className="text-muted-foreground">
                Save money by bundling your home insurance with auto or other insurance policies.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Your Home Insurance Quote</h2>
              <p className="text-xl text-muted-foreground">
                Protect your home with a personalized insurance quote tailored to your needs.
              </p>
            </div>

            <Card className="animate-slide-in-right">
              <CardHeader>
                <CardTitle>Home Insurance Quote Request</CardTitle>
                <CardDescription>Tell us about your home to receive a customized insurance quote.</CardDescription>
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
                    <label className="block text-sm font-medium text-foreground mb-2">Home Address</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                      placeholder="Enter your home address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Year Built</label>
                      <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                        <option>Select year built</option>
                        <option>2020 or newer</option>
                        <option>2010-2019</option>
                        <option>2000-2009</option>
                        <option>1990-1999</option>
                        <option>Before 1990</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Home Type</label>
                      <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                        <option>Select home type</option>
                        <option>Single Family</option>
                        <option>Townhouse</option>
                        <option>Condo</option>
                        <option>Mobile Home</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Estimated Home Value</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                      <option>Select estimated value</option>
                      <option>Under $100,000</option>
                      <option>$100,000 - $200,000</option>
                      <option>$200,000 - $300,000</option>
                      <option>$300,000 - $500,000</option>
                      <option>Over $500,000</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full text-lg py-3 animate-pulse-hover">
                    Get My Home Insurance Quote
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
