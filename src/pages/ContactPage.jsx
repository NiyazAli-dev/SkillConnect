import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Support",
      description: "Speak with our support team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri: 8AM-8PM EST"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@skillconnect.com",
      availability: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-purple-600" />,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on website",
      availability: "Mon-Fri: 9AM-6PM EST"
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-orange-600" />,
      title: "Help Center",
      description: "Find answers to common questions",
      contact: "help.skillconnect.com",
      availability: "Available 24/7"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or need help? We're here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="professional">Professional Account</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Contact Methods</h3>
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{method.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                        <p className="text-sm font-medium text-blue-600">{method.contact}</p>
                        <p className="text-xs text-gray-500">{method.availability}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">SkillConnect Headquarters</p>
                  <p className="text-gray-600">123 Service Street</p>
                  <p className="text-gray-600">Suite 456</p>
                  <p className="text-gray-600">Business City, BC 12345</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Need Quick Answers?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  Visit FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

