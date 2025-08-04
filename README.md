# Ashwin - Blockchain Developer Portfolio

## About

This is a personal portfolio website for Ashwin, a blockchain developer with 3+ years of experience building decentralized solutions on Ethereum and Solana.

## Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Interactive Elements**: Particle backgrounds, animated cubes, and smooth transitions
- **Project Showcase**: Display of company and personal blockchain projects
- **Contact Form**: Easy way for visitors to get in touch
- **Mobile Responsive**: Optimized for all device sizes

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Modern UI library
- **shadcn-ui** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animations
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ashwin-chain-dev

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── assets/        # Images and static files
└── ui/            # shadcn-ui components
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## Customization

- Update personal information in component files
- Modify colors and themes in `src/index.css`
- Add new projects in `src/components/ProjectsSection.tsx`
- Update social links in `src/components/ContactSection.tsx`
