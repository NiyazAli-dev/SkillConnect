import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Users, 
  UserCheck, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign,
  Star,
  MessageSquare,
  Shield,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const stats = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12%",
      icon: <Users className="h-4 w-4" />,
      color: "text-blue-600"
    },
    {
      title: "Active Professionals",
      value: "1,247",
      change: "+8%",
      icon: <UserCheck className="h-4 w-4" />,
      color: "text-green-600"
    },
    {
      title: "Pending Verifications",
      value: "23",
      change: "-5%",
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "text-orange-600"
    },
    {
      title: "Monthly Revenue",
      value: "$45,231",
      change: "+15%",
      icon: <DollarSign className="h-4 w-4" />,
      color: "text-purple-600"
    }
  ]

  const pendingProfessionals = [
    {
      id: 1,
      name: "David Martinez",
      category: "Electrical",
      location: "Downtown",
      submitted: "2 days ago",
      documents: 4,
      status: "pending"
    },
    {
      id: 2,
      name: "Lisa Chen",
      category: "Plumbing",
      location: "Midtown",
      submitted: "1 day ago",
      documents: 3,
      status: "pending"
    },
    {
      id: 3,
      name: "Robert Johnson",
      category: "Home Renovation",
      location: "Suburbs",
      submitted: "3 hours ago",
      documents: 5,
      status: "pending"
    }
  ]

  const recentReports = [
    {
      id: 1,
      type: "Service Quality",
      reporter: "John Doe",
      professional: "Mike Wilson",
      date: "2 hours ago",
      status: "investigating",
      severity: "medium"
    },
    {
      id: 2,
      type: "No Show",
      reporter: "Sarah Smith",
      professional: "Tom Brown",
      date: "1 day ago",
      status: "resolved",
      severity: "low"
    },
    {
      id: 3,
      type: "Inappropriate Behavior",
      reporter: "Emily Davis",
      professional: "Alex Johnson",
      date: "3 days ago",
      status: "pending",
      severity: "high"
    }
  ]

  const allUsers = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      type: "Professional",
      status: "Active",
      joined: "Jan 15, 2024",
      rating: 4.9
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      type: "Customer",
      status: "Active",
      joined: "Feb 3, 2024",
      rating: null
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@example.com",
      type: "Professional",
      status: "Suspended",
      joined: "Dec 20, 2023",
      rating: 4.7
    }
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'suspended': return 'bg-red-100 text-red-800'
      case 'investigating': return 'bg-blue-100 text-blue-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users, professionals, and platform operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="professionals">Professionals</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Verifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Pending Professional Verifications
                    <Badge variant="secondary">{pendingProfessionals.length}</Badge>
                  </CardTitle>
                  <CardDescription>
                    Professionals waiting for account verification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingProfessionals.map((professional) => (
                      <div key={professional.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{professional.name}</div>
                          <div className="text-sm text-gray-600">
                            {professional.category} • {professional.location}
                          </div>
                          <div className="text-xs text-gray-500">
                            {professional.documents} documents • {professional.submitted}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>
                    Latest user reports and issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{report.type}</span>
                            <Badge className={getSeverityColor(report.severity)}>
                              {report.severity}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            {report.reporter} → {report.professional}
                          </div>
                          <div className="text-xs text-gray-500">{report.date}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage all platform users</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="Search users..." className="pl-10 w-64" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="customers">Customers</SelectItem>
                        <SelectItem value="professionals">Professionals</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {allUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.email}</div>
                          <div className="text-xs text-gray-500">Joined {user.joined}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{user.type}</Badge>
                        {user.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm">{user.rating}</span>
                          </div>
                        )}
                        <Badge className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="professionals" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Management</CardTitle>
                <CardDescription>Manage professional accounts and verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Professional Management</h3>
                  <p className="text-gray-600">
                    Detailed professional management features would be implemented here, including
                    verification workflows, document review, and professional status management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Issues</CardTitle>
                <CardDescription>Handle user reports and platform issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Reports Management</h3>
                  <p className="text-gray-600">
                    Comprehensive reporting system for handling user complaints, service issues,
                    and platform violations would be implemented here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Platform Configuration</h3>
                  <p className="text-gray-600">
                    System settings, payment configuration, notification preferences, and other
                    administrative controls would be available here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AdminPanel

