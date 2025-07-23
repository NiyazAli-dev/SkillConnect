import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Shield, 
  Award,
  MessageCircle,
  Clock
} from 'lucide-react'

const ProfessionalProfile = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data - in real app, fetch based on id
  const professional = {
    id: 1,
    name: "John Smith",
    category: "Plumbing",
    rating: 4.9,
    reviews: 127,
    location: "Downtown Area",
    phone: "+1 (555) 123-4567",
    email: "john.smith@email.com",
    experience: "10+ years",
    price: "$75/hour",
    verified: true,
    description: "Expert plumber with over 10 years of experience in residential and commercial plumbing. Specializing in emergency repairs, installations, and maintenance.",
    services: [
      "Emergency Plumbing Repairs",
      "Pipe Installation & Repair",
      "Drain Cleaning",
      "Water Heater Services",
      "Bathroom Renovations",
      "Kitchen Plumbing"
    ],
    certifications: [
      "Licensed Master Plumber",
      "EPA Certified",
      "OSHA Safety Certified"
    ],
    availability: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
  }

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "John did an excellent job fixing our kitchen sink. Very professional and cleaned up after himself."
    },
    {
      id: 2,
      name: "Mike Wilson",
      rating: 5,
      date: "1 month ago",
      comment: "Quick response time and fair pricing. Highly recommend for any plumbing needs."
    },
    {
      id: 3,
      name: "Lisa Brown",
      rating: 4,
      date: "2 months ago",
      comment: "Great work on our bathroom renovation. Very knowledgeable and reliable."
    }
  ]

  const portfolio = [
    {
      id: 1,
      title: "Kitchen Renovation",
      description: "Complete kitchen plumbing overhaul",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Bathroom Remodel",
      description: "Modern bathroom installation",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Emergency Repair",
      description: "24-hour pipe burst repair",
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{professional.name}</h1>
                    {professional.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-xl text-gray-600 mb-3">{professional.category} Specialist</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{professional.rating}</span>
                      <span className="ml-1">({professional.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {professional.location}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {professional.experience}
                    </div>
                  </div>
                  <p className="text-gray-700">{professional.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact & Book</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-blue-600">{professional.price}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      {professional.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      {professional.email}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {professional.availability}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {professional.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {professional.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div>
                          <CardTitle className="text-base">{review.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About {professional.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  {professional.name} is a highly experienced {professional.category.toLowerCase()} professional 
                  with over {professional.experience} in the industry. Known for reliability, quality workmanship, 
                  and excellent customer service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <p className="text-gray-600">{professional.experience} in {professional.category}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Service Area</h4>
                    <p className="text-gray-600">{professional.location} and surrounding areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ProfessionalProfile

