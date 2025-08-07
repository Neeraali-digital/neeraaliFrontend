# 🚀 Neeraali Digital - Modern PR & Digital Marketing Frontend

A cutting-edge, fully responsive Angular 17+ frontend project for a PR & Digital Marketing company with advanced animations and modern design.

## ✨ Features

- **Angular 17+** with standalone components and strict mode
- **Advanced Tailwind CSS** with custom animations and glassmorphism effects
- **Google Material Icons** for consistent iconography
- **Mobile-first responsive design** that works flawlessly on all devices
- **Advanced animations** with floating elements, gradients, and smooth transitions
- **Modern glassmorphism UI** with backdrop blur effects
- **SEO-optimized** structure with meta tags
- **Form validation** with reactive forms
- **Lazy loading** for optimal performance
- **Custom scrollbar** and selection styling

## 🎨 Advanced Design System

### Colors
- **Primary**: Blue gradient palette (#0ea5e9 to #0c4a6e)
- **Accent**: Amber/Yellow gradient (#eab308 to #facc15)
- **Modern glassmorphism** effects with backdrop blur

### Typography
- **Primary**: Inter font family
- **Display**: Poppins for headings
- **Custom text gradients** and advanced styling

### Animations
- **Floating elements** with 6s ease-in-out cycles
- **Gradient backgrounds** with 8s infinite animations
- **Glow effects** with custom box shadows
- **Smooth transitions** with 500ms duration
- **Staggered animations** for content reveal

## 🏗️ Modern Folder Structure

```
src/app/
├── core/                    # Singleton services, guards, interceptors
│   ├── services/
│   │   └── navigation.service.ts
│   ├── guards/
│   └── interceptors/
├── features/                # Feature modules (lazy-loaded)
│   ├── home/
│   ├── services/
│   ├── clients/
│   ├── reviews/
│   └── contact/
├── layout/                  # Layout components
│   ├── header/
│   └── footer/
├── shared/                  # Shared components, directives, pipes
│   ├── components/
│   ├── models/
│   ├── utils/
│   ├── directives/
│   └── pipes/
├── app.component.ts
└── app.routes.ts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd neeraliFrontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

### GitHub Integration
- Push to `main` branch triggers automatic deployment
- GitHub Actions workflow included for CI/CD

### Manual Deployment Steps
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Configure routing for SPA (Single Page Application)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎯 Key Pages

1. **Home** - Hero with floating animations, company stats, features
2. **Services** - Service cards with hover effects and process timeline
3. **Clients** - Client showcase with case studies and metrics
4. **Reviews** - Star ratings, testimonials with glassmorphism cards
5. **Contact** - Validated contact form with modern styling

## ⚡ Performance Features

- **Lazy loading** of route components
- **Optimized bundle sizes** with tree shaking
- **Efficient change detection** with OnPush strategy
- **Advanced animations** with GPU acceleration
- **Fast loading times** with preloading strategies

## 🛠️ Development

### Available Scripts
- `npm start` - Development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run watch` - Watch mode
- `npm test` - Run tests
- `npm run lint` - Lint code

### Code Style
- **TypeScript strict mode** enabled
- **Angular best practices** followed
- **Modern ES6+** features used
- **Consistent formatting** with Prettier

## 🔧 Configuration Files

- `tailwind.config.js` - Advanced Tailwind configuration
- `vercel.json` - Vercel deployment settings
- `angular.json` - Angular CLI configuration
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD

## 📞 Contact Information

- **Phone:** +1 (555) 123-4567
- **Email:** hello@neeralidigital.com
- **Website:** [Your deployed URL]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Angular 17+, Tailwind CSS, and modern web technologies**

🌟 **Ready for production deployment on Vercel, Netlify, or any static hosting provider!**