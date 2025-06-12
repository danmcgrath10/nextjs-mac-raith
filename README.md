# Mac Raith Audio Engineering

A modern, space-themed audio engineering portfolio website built with Next.js 15, featuring Spotify integration and responsive design.

## 🚀 Overview

Mac Raith Audio Engineering is a professional portfolio website showcasing audio engineering services, recent work, and client testimonials. The site features a unique space-themed design with smooth animations, mobile-first responsive layout, and live Spotify integration.

## ✨ Features

- **🎵 Spotify Integration**: Live track streaming and portfolio display
- **📱 Mobile-First Design**: Optimized for all devices with modern navigation
- **🌌 Space Theme**: Unique visual identity with floating spaceman and cosmic effects
- **⚡ Performance Optimized**: Next.js 15 with React 19, optimized images and fonts
- **🎨 Modern UI**: Tailwind CSS with Shadcn UI components
- **📝 Legal Compliance**: GDPR/CCPA compliant privacy policy and terms
- **🔧 CMS Ready**: Sanity CMS integration for content management
- **✉️ Contact Forms**: Professional contact and project inquiry system

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.3
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI, Radix UI
- **Animations**: Framer Motion
- **CMS**: Sanity
- **APIs**: Spotify Web API
- **Deployment**: Vercel (recommended)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Spotify Developer Account (for portfolio integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-mac-raith
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Spotify API Configuration
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   
   # Sanity CMS (if using)
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Spotify Setup**
   
   See [SPOTIFY_SETUP.md](./SPOTIFY_SETUP.md) for detailed Spotify API configuration.

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes (Spotify, contact)
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── cookies/           # Cookie policy page
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/                # Shadcn UI components
│   ├── navigation.tsx     # Mobile/desktop navigation
│   ├── hero-section.tsx   # Landing section
│   ├── about-section.tsx  # About/bio section
│   ├── services-section.tsx # Services offered
│   ├── portfolio-section.tsx # Spotify portfolio
│   ├── contact-section.tsx   # Contact form
│   └── footer.tsx         # Site footer
├── lib/                   # Utility functions
│   ├── spotify.ts         # Spotify API integration
│   └── utils.ts           # General utilities
├── types/                 # TypeScript definitions
└── styles/                # Global styles
```

## 🎵 Spotify Integration

The portfolio section dynamically loads tracks from Spotify. To add your tracks:

1. **Get Spotify URLs**: Copy the share URL from any Spotify track
2. **Update Configuration**: Edit `src/components/portfolio-section.tsx`
   ```typescript
   const spotifyUrls = [
     {
       url: "https://open.spotify.com/track/YOUR_TRACK_ID",
       services: ["Production", "Mixing", "Mastering"],
       description: "Track description",
       genre: "Hip Hop"
     }
     // Add more tracks...
   ];
   ```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: "your-primary-color",
      // ... other colors
    }
  }
}
```

### Content Updates
- **Hero Section**: Update `src/components/hero-section.tsx`
- **About**: Update `src/components/about-section.tsx`
- **Services**: Update `src/components/services-section.tsx`
- **Contact**: Update contact details in `src/components/contact-section.tsx`

## 📱 Navigation

The site features adaptive navigation:
- **Desktop**: Traditional top navigation bar
- **Mobile**: Floating action button with overlay menu
- **Touch Optimized**: 44px minimum touch targets
- **Smooth Scrolling**: Section-to-section navigation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for Next.js and React
- **Prettier**: Code formatting (recommended)
- **Component Pattern**: Functional components with hooks

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Import your GitHub/GitLab repository to Vercel
2. **Environment Variables**: Add your `.env.local` variables to Vercel dashboard
3. **Deploy**: Automatic deployments on push to main branch

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 Legal Pages

The site includes compliant legal documentation:
- **Privacy Policy** (`/privacy`) - GDPR/CCPA compliant
- **Terms of Service** (`/terms`) - Service terms and conditions
- **Cookie Policy** (`/cookies`) - Cookie usage and consent

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Dynamic imports and lazy loading
- **SEO Optimized**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: collab@macraithmusic.com
- **Location**: Boston, MA
- **Website**: [macraithmusic.com](https://macraithmusic.com)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Mac Raith Audio Engineering**
