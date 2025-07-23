import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, MapPin, Star, Filter } from 'lucide-react'

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  const professionals = [
    {
      id: 1,
      name: "John Smith",
      category: "Plumbing",
      rating: 4.9,
      reviews: 127,
      location: "Downtown",
      price: "$75/hour",
      image: "/api/placeholder/150/150",
      verified: true,
      description: "Expert plumber with 10+ years experience"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      category: "Electrical",
      rating: 4.8,
      reviews: 89,
      location: "Midtown",
      price: "$85/hour",
      image: "/api/placeholder/150/150",
      verified: true,
      description: "Licensed electrician specializing in home wiring"
    },
    {
      id: 3,
      name: "Mike Wilson",
      category: "Home Renovation",
      rating: 4.7,
      reviews: 156,
      location: "Suburbs",
      price: "$95/hour",
      image: "/api/placeholder/150/150",
      verified: true,
      description: "Complete home renovation and remodeling expert"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find Professionals
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse and connect with verified professionals in your area
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search for services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="renovation">Home Renovation</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                  <SelectItem value="landscaping">Landscaping</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="midtown">Midtown</SelectItem>
                  <SelectItem value="suburbs">Suburbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Available Professionals ({professionals.length})
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((professional) => (
              <Card key={professional.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{professional.name}</CardTitle>
                        {professional.verified && (
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{professional.category}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{professional.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({professional.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{professional.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {professional.location}
                    </div>
                    <div className="font-semibold text-blue-600">
                      {professional.price}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/professional/${professional.id}`}>
                      <Button className="flex-1">View Profile</Button>
                    </Link>
                    <Button variant="outline" className="flex-1">Message</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

