# Elijah Mukwone Paul — Portfolio

A premium, production-ready frontend developer portfolio built with React.js, Tailwind CSS, Framer Motion, GSAP, Lenis, and Three.js.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **React 18** | UI Framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Scroll animations & transitions |
| **GSAP** | Hero text reveal animations |
| **Lenis** | Buttery smooth scrolling |
| **Three.js + R3F** | 3D particle field in hero |

## Fonts (Google Fonts — Free)

- **Bebas Neue** — Hero headings, display text
- **DM Sans** — Body text, UI
- **JetBrains Mono** — Tags, labels, code

---

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx        # Custom magnetic cursor
│   ├── Navbar.jsx        # Sticky nav + mobile menu
│   ├── HeroScene.jsx     # Three.js 3D particle field
│   ├── Hero.jsx          # Hero section
│   ├── Stats.jsx         # Stats bar
│   ├── Projects.jsx      # Projects grid
│   ├── Services.jsx      # Services list
│   ├── Process.jsx       # Work process steps
│   ├── Testimonial.jsx   # Client quote
│   ├── Clients.jsx       # Client logos
│   ├── Blog.jsx          # Insights/articles
│   ├── CTA.jsx           # Call to action
│   └── Footer.jsx        # Footer
├── hooks/
│   └── useLenis.js       # Smooth scroll setup
├── data/
│   └── index.js          # All portfolio content
├── App.jsx
├── main.jsx
└── index.css
```

---

## Getting Started

### 1. Clone / create project

```bash
# If starting fresh
npm create vite@latest elijah-portfolio -- --template react
cd elijah-portfolio
```

### 2. Install dependencies

```bash
npm install framer-motion gsap lenis @react-three/fiber @react-three/drei three
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Copy all files from this project into your src/ folder

Replace the generated files with those provided.

### 4. Run the dev server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

---

## Customisation

All content lives in `src/data/index.js` — edit that file to update:
- Personal info, bio, stats
- Projects (name, description, tags, URLs)
- Services, work process
- Testimonial, clients, blog titles
- CTA headline

To add a real profile photo, place your image in `src/assets/` and import it in `Hero.jsx`.

---

## Deployment

Works out of the box with:
- **Vercel** — `vercel --prod`
- **Netlify** — drag & drop `dist/` folder
- **GitHub Pages** — add `base` to `vite.config.js`

---

## Features

- ✅ Custom neon-green magnetic cursor
- ✅ Lenis buttery smooth scrolling
- ✅ GSAP character-by-character hero name reveal
- ✅ Three.js animated particle starfield + floating rings
- ✅ Framer Motion scroll-triggered section reveals
- ✅ Animated marquee tech stack ticker
- ✅ Mobile-responsive with animated hamburger menu
- ✅ Hover micro-interactions on all cards
- ✅ Noise texture overlay for depth
- ✅ Custom green scrollbar
- ✅ CSS selection highlight in accent color
