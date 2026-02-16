# STUFE B Website

Cooler Synthwave-Style Website mit Three.js Effects.

## 🛠️ Setup

```bash
cd stufe-b-site
npm install
```

## 🏃 Development

```bash
npm run dev
```

Dann auf http://localhost:3000

## 🚀 Deployment auf Vercel

1. **GitHub Repo erstellen:**
   - Gehe auf https://github.com/new
   - Name: `stufe-b-site`
   - Private/Public nach Wahl

2. **Code hochladen:**
   ```bash
   cd stufe-b-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/stufe-b-site.git
   git push -u origin main
   ```

3. **Vercel Deployment:**
   - Gehe auf https://vercel.com
   - Import Git Repository
   - Deploy!

## 🎨 Anpassen

- **Links ändern:** `app/page.tsx` - Spotify, YouTube, Instagram URLs anpassen
- **Farben:** `app/globals.css` - `--neon-pink`, `--neon-cyan` ändern
- **Sterne:** `app/page.tsx` - `Stars` Komponente anpassen für mehr/weniger Sterne

## 📦 Features

- 🌟 Animated Starfield (Three.js)
- 🎛️ Retro Grid
- 🔮 Floating Torus Knot
- 📱 Responsive
- ⚡ Vercel-ready
