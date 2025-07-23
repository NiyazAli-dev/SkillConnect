import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Shield, 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  Wrench, 
  Zap, 
  Home, 
  Droplets, 
  Scissors, 
  TreePine 
} from 'lucide-react'

// Import images
import heroImage from '../assets/o6OJAYA7MUU6.jpg'
import plumberImage from '../assets/o6OJAYA7MUU6.jpg'
import electricianImage from '../assets/pjMEGFn1rQ8h.jpg'
import renovationImage from '../assets/HSM70aZuj2FP.jpg'
import cleaningImage from '../assets/kP2Ui9rrnbfU.webp'
import landscapingImage from '../assets/OnloNlaUl1e2.jpg'
import teamImage from '../assets/E65aiVzXYjIp.jpg'

const HomePage = () => {
  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Plumbing",
      description: "Expert plumbers for repairs, installations, and maintenance",
      image: plumberImage,
      professionals: 150
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Electrical",
      description: "Licensed electricians for all your electrical needs",
      image: electricianImage,
      professionals: 120
    },
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Home Renovation",
      description: "Transform your space with skilled renovation experts",
      image: renovationImage,
      professionals: 200
    },
    {
      icon: <Scissors className="h-8 w-8 text-purple-600" />,
      title: "Cleaning",
      description: "Professional cleaning services for homes and offices",
      image: cleaningImage,
      professionals: 180
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-700" />,
      title: "Landscaping",
      description: "Beautiful outdoor spaces designed by experts",
      image: landscapingImage,
      professionals: 90
    },
    {
      icon: <Wrench className="h-8 w-8 text-gray-600" />,
      title: "General Maintenance",
      description: "Reliable handymen for all your repair needs",
      image: heroImage,
      professionals: 250
    }
  ]

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Verified Professionals",
      description: "All professionals are background-checked and verified for your safety and peace of mind."
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "Quality Guaranteed",
      description: "Read reviews and ratings from real customers to make informed decisions."
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Quick Booking",
      description: "Book services instantly and get connected with professionals in your area."
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "24/7 Support",
      description: "Our customer support team is available around the clock to help you."
    }
  ]

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "1,000+", label: "Verified Professionals" },
    { number: "50+", label: "Service Categories" },
    { number: "99%", label: "Customer Satisfaction" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                {/* <Badge className="bg-blue-500/20 text-blue-100 border-blue-400">
                  Trusted by 10,000+ Homeowners
                </Badge> */}
                <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                  Find Trusted
                  <span className="text-blue-300"> Home Service</span>
                  <br />Professionals
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Connect with verified, skilled professionals for all your home service needs. 
                  From plumbing to renovation, we've got you covered.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-500 w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Find Professionals
                  </Button>
                </Link>
                <Link to="/register">
                    <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-500 w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Join as Professional
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Background Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Insured & Licensed</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional home services" 
                className="rounded-2xl shadow-2xl w-full h-88 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold text-gray-900">1000+ Professionals</div>
                    <div>Ready to help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our most requested home services and connect with top-rated professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {service.title}
                    <Badge variant="secondary">{service.professionals}+ pros</Badge>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    View Professionals
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose SkillConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it easy to find, hire, and work with the best professionals in your area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of satisfied customers who trust SkillConnect for their home service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Find a Professional
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Become a Professional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

