import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import pages (we'll create these)
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProfessionalProfile from './pages/ProfessionalProfile'
import Dashboard from './pages/Dashboard'
import AboutPage from './pages/AboutPage'
import AdminPanel from './pages/AdminPanel'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/professional/:id" element={<ProfessionalProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

