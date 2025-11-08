# Advokit

A modern React application built with Vite, TypeScript, and shadcn/ui components.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Router** - Client-side routing

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or another port if 8080 is in use).

The dev server includes:
- ⚡ Fast Hot Module Replacement (HMR)
- 🔍 TypeScript type checking
- 🎨 Tailwind CSS with JIT compilation
- 📦 Automatic dependency pre-bundling

## Building for Production

### Build the Application

Create an optimized production build:

```bash
npm run build
```

This command:
1. Type-checks your TypeScript code
2. Bundles and minifies all assets
3. Optimizes images and other static files
4. Outputs everything to the `dist/` directory

## Deploying as a Static Website

After running `npm run build`, the `dist/` folder contains all the static files needed to host your application. You can deploy this folder to any static hosting service.

## Project Structure

```
advokit/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # React components
│   │   └── ui/      # shadcn/ui components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   ├── pages/       # Page components
│   ├── App.tsx      # Main App component
│   └── main.tsx     # Application entry point
├── dist/            # Production build output (generated)
└── package.json
```

## License

Private

