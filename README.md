# SkillConnect - Home Service Professional Platform

A professional React and Tailwind CSS website that connects service seekers with skilled home service professionals. Built with modern web technologies and featuring a comprehensive admin panel.

## 🚀 Features

### For Service Seekers
- **Professional Search**: Browse and search verified professionals by category, location, and ratings
- **Detailed Profiles**: View professional portfolios, certifications, and customer reviews
- **Direct Communication**: Message professionals directly through the platform
- **Easy Booking**: Schedule appointments and services with just a few clicks
- **Review System**: Leave reviews and ratings after service completion

### For Professionals
- **Professional Profiles**: Create detailed profiles showcasing skills, certifications, and work history
- **Portfolio Management**: Upload photos and videos of previous projects
- **Dynamic Ranking**: Get ranked based on reviews, completed jobs, and responsiveness
- **Direct Client Communication**: Communicate with potential clients through in-app messaging
- **Appointment Management**: Manage bookings and schedule through the dashboard

### Admin Features
- **User Management**: Comprehensive user and professional management system
- **Verification System**: Review and verify professional credentials and documents
- **Reports & Issues**: Handle user reports and platform violations
- **Analytics Dashboard**: Monitor platform statistics and performance
- **Content Moderation**: Manage reviews, profiles, and platform content

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: PNPM

## 📁 Project Structure

```
skillconnect/
├── public/
│   └── assets/           # Static images and assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Shadcn/ui components
│   │   ├── Header.jsx   # Navigation header
│   │   └── Footer.jsx   # Site footer
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx         # Landing page
│   │   ├── ServicesPage.jsx     # Professional search/browse
│   │   ├── ProfessionalProfile.jsx # Individual professional profiles
│   │   ├── AboutPage.jsx        # About us page
│   │   ├── ContactPage.jsx      # Contact form and info
│   │   ├── LoginPage.jsx        # User authentication
│   │   ├── RegisterPage.jsx     # User registration
│   │   ├── Dashboard.jsx        # User dashboard
│   │   └── AdminPanel.jsx       # Admin management interface
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Professional Color Scheme**: Blue and white theme conveying trust and reliability
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Accessibility**: Built with accessibility best practices in mind

## 📱 Pages Overview

### 1. Homepage (`/`)
- Hero section with search functionality
- Popular services showcase
- Platform statistics and trust indicators
- Call-to-action sections

### 2. Find Professionals (`/services`)
- Professional search with filters
- Category-based browsing
- Professional cards with ratings and pricing
- Advanced filtering options

### 3. Professional Profile (`/professional/:id`)
- Detailed professional information
- Portfolio showcase
- Reviews and ratings
- Contact and booking options
- Service offerings and certifications

### 4. About Us (`/about`)
- Company mission and values
- Platform statistics
- Team information
- Trust and safety information

### 5. Contact (`/contact`)
- Contact form
- Multiple contact methods
- Office location and hours
- FAQ section

### 6. Authentication
- **Login** (`/login`): User sign-in with social media options
- **Register** (`/register`): Account creation for customers and professionals

### 7. Dashboard (`/dashboard`)
- User-specific dashboard
- Booking management
- Profile settings
- Communication center

### 8. Admin Panel (`/admin`)
- Comprehensive admin interface
- User and professional management
- Verification workflows
- Reports and analytics
- Platform settings

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PNPM package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd skillconnect
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173`

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 🎯 Key Features Implementation

### User Authentication
- Dual registration system (customers vs professionals)
- Social media login integration
- Password strength validation
- Remember me functionality

### Professional Verification
- Document upload system
- Admin verification workflow
- Certification management
- Background check integration

### Search & Discovery
- Advanced search filters
- Category-based browsing
- Location-based results
- Rating and review sorting

### Communication System
- In-app messaging
- Appointment scheduling
- Notification system
- Review and rating system

### Admin Management
- User management dashboard
- Professional verification system
- Report handling
- Platform analytics

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update color schemes in component files
- Customize UI components in `src/components/ui/`

### Content
- Update text content in page components
- Replace placeholder images in `public/assets/`
- Modify service categories and professional data

### Functionality
- Add new pages by creating components in `src/pages/`
- Extend admin functionality in `AdminPanel.jsx`
- Implement backend integration for data persistence

## 📊 Mock Data

The application currently uses mock data for demonstration purposes:
- Sample professionals with ratings and reviews
- Service categories and pricing
- User accounts and admin statistics
- Reports and verification requests

## 🚀 Deployment

### Production Build
```bash
pnpm run build
```

### Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Static Hosting**: Upload the `dist` folder to any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful UI components
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for the comprehensive icon library
- **React Router** for client-side routing
- **Vite** for the fast build tool

## 📞 Support

For support and questions:
- Email: support@skillconnect.com
- Phone: +1 (555) 123-4567
- Website: [SkillConnect Help Center](https://help.skillconnect.com)

---

**SkillConnect** - Connecting communities, one service at a time. 🏠✨

