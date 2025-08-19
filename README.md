# PSC - Professional Skills Center

A comprehensive Learning Management System (LMS) built with Next.js, TypeScript, and Tailwind CSS. This platform provides educational content, student management, e-commerce features, and performance tracking.

## 🚀 Features

### 📚 Educational Content
- **Course Catalog**: Browse and enroll in various courses
- **PDF Study Notes**: Premium downloadable study materials
- **Video Lectures**: Free and premium video content
- **Subject-wise Organization**: Structured learning paths

### 🛒 E-commerce System
- **Shopping Cart**: Add items and manage cart contents
- **PDF Notes Store**: Purchase individual subject notes
- **Video Lecture Store**: Buy premium video content
- **Cart Management**: Persistent cart state with local storage

### 👥 Student Management
- **Student Results Portal**: Comprehensive performance tracking
- **Individual Profiles**: Detailed student performance analysis
- **Test Results**: Subject-wise test scores and analytics
- **Performance Metrics**: Attendance, achievements, and progress tracking

### 🎨 User Experience
- **Dark/Light Theme**: Toggle between themes with floating widget
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional interface
- **Smooth Animations**: CSS transitions and hover effects

### 🔧 Admin Features
- **Floating Admin Button**: Quick admin access
- **Content Management**: Easy course and content updates
- **Student Data Management**: Comprehensive student tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrajaysingh/PSC.git
   cd PSC
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
PSC/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── cart/                     # Shopping cart page
│   ├── courses/                  # Course catalog
│   ├── students-results/         # Student results portal
│   │   └── [pscId]/             # Individual student profiles
│   └── ...                      # Other pages
├── components/                   # React components
│   ├── ui/                      # Shadcn/ui components
│   ├── header.tsx               # Main navigation
│   ├── footer.tsx               # Site footer
│   ├── cart-icon.tsx            # Shopping cart widget
│   ├── floating-theme-toggle.tsx # Theme switcher
│   └── ...                      # Other components
├── hooks/                       # Custom React hooks
│   └── useCart.tsx              # Shopping cart management
├── lib/                         # Utility functions
└── public/                      # Static assets
```

## 🎯 Key Features Explained

### Student Results System
- **Collective Results Page** (`/students-results`): View all student results with search and filtering
- **Individual Profiles** (`/students-results/[pscId]`): Detailed performance analysis for each student
- **Subject-wise Tabs**: Organized by different subjects
- **Performance Metrics**: Test scores, attendance, achievements
- **Real-time Search**: Filter by PSC ID or student name

### E-commerce Features
- **Shopping Cart**: Persistent cart with local storage
- **PDF Notes Store**: Individual subject notes for purchase
- **Video Lecture Store**: Free and premium video content
- **Cart Icon**: Hover dropdown with cart contents
- **Checkout Process**: Streamlined purchase flow

### Theme System
- **Floating Theme Toggle**: Bottom-left positioned theme switcher
- **Dark/Light Modes**: Complete theme switching
- **Persistent Theme**: Remembers user preference
- **Smooth Transitions**: CSS-based theme changes

## 🚀 Deployment

### Vercel Deployment
1. **Connect to Vercel**
   - Link your GitHub repository to Vercel
   - Configure build settings:
     - Build Command: `pnpm build`
     - Output Directory: `.next`
     - Install Command: `pnpm install`

2. **Environment Variables**
   - No additional environment variables required for basic functionality

3. **Deploy**
   - Push to main branch for automatic deployment
   - Or manually trigger deployment from Vercel dashboard

### Build Optimization
- **Dynamic Imports**: Heavy components loaded on demand
- **Image Optimization**: WebP/AVIF format support
- **Bundle Analysis**: Optimized for performance
- **TypeScript**: Full type safety

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layouts
- **Mobile**: Touch-friendly interface
- **Navigation**: Adaptive menu system

## 🎨 Customization

### Styling
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Theme-aware styling
- **Component Library**: Consistent design system

### Content Management
- **Static Data**: Easy to update course and student data
- **Component Structure**: Modular and reusable
- **Configuration**: Centralized settings

## 🔧 Development

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Component Structure**: Consistent patterns

## 📊 Performance

- **First Load JS**: Optimized bundle sizes
- **Dynamic Imports**: Code splitting for better performance
- **Image Optimization**: Next.js image optimization
- **Caching**: Efficient caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 🎉 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Shadcn/ui**: For the beautiful component library
- **Lucide**: For the icon library

---

**PSC - Professional Skills Center** - Empowering education through technology.
