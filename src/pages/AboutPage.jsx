import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Shield, Star, Clock } from 'lucide-react'

// Import team image
import teamImage from '../assets/E65aiVzXYjIp.jpg'

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Trust & Safety",
      description: "All professionals are thoroughly vetted, background-checked, and verified for your peace of mind."
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "Quality Service",
      description: "We maintain high standards by connecting you only with top-rated, experienced professionals."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Community Focus",
      description: "Building stronger communities by supporting local professionals and homeowners."
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: "Reliability",
      description: "Quick response times and dependable service when you need it most."
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-400">
              About SkillConnect
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Connecting Communities
              <br />
              <span className="text-blue-300">One Service at a Time</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to make finding trusted home service professionals 
              as easy as a few clicks, while empowering skilled workers to grow their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                Finding reliable and skilled professionals for home services shouldn't be a 
                challenging and time-consuming task. At SkillConnect, we bridge the gap between 
                homeowners and professionals by creating a trusted, transparent ecosystem.
              </p>
              <p className="text-lg text-gray-600">
                We believe in empowering both sides of the marketplace - giving homeowners 
                confidence in their service choices and providing professionals with the tools 
                they need to showcase their expertise and build their reputation.
              </p>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Our team" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
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

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 text-left">
              <p>
                SkillConnect was born from a simple frustration: the difficulty of finding 
                reliable home service professionals. Our founders experienced firsthand the 
                challenges of verifying credentials, assessing work quality, and comparing 
                pricing across different providers.
              </p>
              <p>
                At the same time, we recognized that skilled professionals lacked a centralized 
                platform to showcase their expertise and build credibility. Many talented 
                workers struggled to reach potential customers and demonstrate their capabilities.
              </p>
              <p>
                Today, SkillConnect serves as the bridge between these two needs, creating a 
                marketplace where trust, transparency, and quality are at the forefront. We're 
                proud to support both homeowners and professionals in building stronger, more 
                connected communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

