# React + Vite + Tailwind Framework Reference

This document describes the framework and patterns for building React applications with Vite and Tailwind CSS, deployed to Vercel.

## Technology Stack

- **React 18** with JSX
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Project Structure

```
project-root/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration + custom theme
├── postcss.config.js       # PostCSS configuration
├── public/
│   └── favicon.svg         # App icon
└── src/
    ├── main.jsx            # React entry point
    ├── index.css           # Global styles + Tailwind imports
    ├── App.jsx             # Main app component
    ├── components/         # React components
    │   └── ComponentName.jsx
    └── data/               # Static data files
        └── dataFile.js
```

## Configuration Files

### package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "vite": "^4.3.9"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tailwind.config.js
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom colours here
      },
      fontFamily: {
        // Custom fonts here
      },
      animation: {
        // Custom animations here
      },
    },
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles here */
```

## React Patterns

### Component Structure
```jsx
function ComponentName({ prop1, prop2, onAction }) {
  // State
  const [value, setValue] = useState(initialValue)

  // Handlers
  const handleClick = () => {
    onAction(value)
  }

  // Render
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  )
}

export default ComponentName
```

### State Management with useState
```jsx
const [state, setState] = useState(initialValue)
const [object, setObject] = useState({ key: 'value' })
const [array, setArray] = useState([])
```

### Optimised Callbacks with useCallback
```jsx
const handleAction = useCallback((param) => {
  // Logic here
  setState(newValue)
}, [dependencies])
```

### Conditional Rendering
```jsx
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### List Rendering
```jsx
{items.map((item) => (
  <Component key={item.id} data={item} />
))}
```

## Tailwind CSS Patterns

### Responsive Design
```jsx
<div className="text-sm md:text-base lg:text-lg">
  {/* sm: mobile, md: tablet, lg: desktop */}
</div>
```

### Hover/Active States
```jsx
<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
```

### Transitions
```jsx
<div className="transition-all duration-300 ease-in-out">
```

### Flexbox Layout
```jsx
<div className="flex items-center justify-between gap-4">
```

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### Custom Shadows/Glows
```javascript
// In tailwind.config.js
boxShadow: {
  'glow': '0 0 20px rgba(139, 92, 246, 0.5)',
}
```

### Gradient Text
```jsx
<h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
```

### Card Pattern
```jsx
<div className="p-6 rounded-2xl bg-white/10 border border-gray-200
               shadow-lg hover:shadow-xl transition-all duration-300">
```

## Data Structure Patterns

### Exporting Data
```javascript
// src/data/dataFile.js
export const dataObject = {
  category: {
    id: 'category',
    title: 'Category Title',
    items: [
      { id: 1, name: 'Item 1', value: 'data' },
      { id: 2, name: 'Item 2', value: 'data' },
    ]
  }
}
```

### Importing Data
```javascript
import { dataObject } from './data/dataFile'
```

## SVG Icons Pattern

Inline SVG icons for flexibility:
```jsx
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M..." />
</svg>
```

Icon source: [Heroicons](https://heroicons.com/)

## Scripts

```bash
npm install      # Install dependencies
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Vercel Deployment

### Setup
1. Push code to GitHub repository
2. Connect repository to Vercel (vercel.com)
3. Vercel auto-detects Vite configuration

### Build Settings (auto-detected)
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Environment Variables
Add in Vercel dashboard: Settings → Environment Variables

### Custom Domain
Add in Vercel dashboard: Settings → Domains

## File Naming Conventions

- Components: `PascalCase.jsx` (e.g., `HomeScreen.jsx`)
- Data files: `camelCase.js` (e.g., `userData.js`)
- CSS files: `kebab-case.css` or `index.css`
- Utilities: `camelCase.js` (e.g., `helpers.js`)

## Best Practices

1. **Components**: One component per file, export as default
2. **State**: Lift state up to the lowest common ancestor
3. **Props**: Destructure props in function parameters
4. **Styling**: Use Tailwind utilities, avoid custom CSS where possible
5. **Data**: Keep static data in `/data` folder, separate from components
6. **Keys**: Always use unique `key` prop when mapping arrays
7. **Events**: Prefix handlers with `handle` (e.g., `handleClick`)
8. **Callbacks**: Prefix callback props with `on` (e.g., `onSubmit`)
