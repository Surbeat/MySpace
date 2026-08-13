# 🎧 SurBeat — Pure Musical Vibes

SurBeat is a modern, high-fidelity web application built for listening to trending Hindi hits, classic 90s love songs, and acoustic chill beats. Designed with a luxury cyber-emerald vinyl turntable aesthetic, real-time soundwave equalizers, tonearm animations, visitor counter, live clock, and clean separation between frontend and backend architectures.

Created with passion by **Rishabh Pandey**.

---

## 📁 Architecture & Directory Structure

The project features a clean separation between `frontend/` and `backend/`:

```text
myspace/
├── backend/                  # Node.js + Express API Server
│   ├── server.js             # Express server with YouTube, Pexels, and Visitor counter endpoints
│   ├── package.json          # Node dependencies (Express, Axios, CORS, express-rate-limit)
│   ├── .env                  # Environment variables
│   └── .env.example          # Environment template
│
├── frontend/                 # SurBeat Web App Client
│   ├── index.html            # HTML structure with turntable deck, tonearm, and EQ bars
│   ├── script.js             # Audio controller & YouTube IFrame API integration
│   ├── styles.css            # Custom CSS design system, tonearm animations, glassmorphism
│   ├── wrangler.toml         # Cloudflare Pages configuration
│   └── QUICK_DEPLOY.md       # Deployment instructions
│
└── .github/
    └── workflows/
        └── deploy.yml        # CI/CD deployment workflow
```

---

## 🚀 Running Locally

### 1. Start the Backend API

```bash
cd backend
npm install
npm run dev
```

The backend server runs on `http://localhost:3000`.

### 2. Launch the Frontend Web App

```bash
cd frontend
# Using Python
python -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## ✨ Features & Highlights

- **SurBeat Sound Engine**: Auto-queues trending Hindi hits, new romantic tracks, 90s retro classics, and chill lo-fi acoustic vibes.
- **Interactive Turntable**: Dynamic metallic tonearm needle smoothly drops onto the vinyl disc during playback.
- **Soundwave Equalizer**: Animated frequency equalizer bars respond in real-time to playback state.
- **Genre Filter Pills**: Quickly switch between 🔥 Trending Hits, 💖 New Romantics, 📻 Classic 90s Hits, and 🎧 Chill Acoustic.
- **Continuous Auto-Recovery**: Automatically skips deleted or restricted YouTube tracks so music never stops playing.
- **Romantic Background Photography**: Integrated with Pexels API and high-res Unsplash photography.
- **Responsive Luxury Aesthetic**: Dark cyber-emerald glassmorphism with glowing neon accents.
