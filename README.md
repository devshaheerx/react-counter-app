# Counter App

A minimal, glassmorphic counter app built with **React + Tailwind CSS + Vite** — featuring a looping video background, color-reactive count display, smooth button animations, and fully responsive layout across all devices.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-latest-646CFF?logo=vite&logoColor=white&style=flat-square)
![Lucide](https://img.shields.io/badge/Lucide_React-icons-F97316?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## Features

- Frosted-glass card with `backdrop-blur` and layered shadows
- Looping fullscreen video background with dark overlay
- Count color shifts — muted at `0`, green when positive, red when negative
- Three actions: **Add**, **Sub** (floors at 0), **Reset**
- Hover lift + active press micro-interactions on buttons
- Fully responsive — phones, tablets, laptops, and large desktops

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI & state management |
| Tailwind CSS v3 | Utility-first styling & responsiveness |
| Lucide React | Icons |
| Vite | Build tool & dev server |

---

## Project Structure

```
src/
├── assets/
│   └── bg_vid.mp4           # Looping background video
├── components/
│   ├── Background.jsx        # Fullscreen video + dark overlay
│   ├── CounterCard.jsx       # Stateful card container
│   ├── CountDisplay.jsx      # Reactive count with color logic
│   └── ActionButton.jsx      # Reusable presentational button
├── constants/
│   └── buttons.jsx           # Button config (label, icon, styles)
├── App.jsx                   # Root layout
└── main.jsx                  # Entry point
```

---

## Component Breakdown

### `App.jsx`
Root layout. Centers `Background` and `CounterCard` on screen. Stateless.

### `Background.jsx`
Fullscreen looping `<video>` with a `bg-black/50` overlay. `playsInline` ensures autoplay works on iOS. Purely presentational and reusable.

### `CounterCard.jsx`
The only stateful component. Owns `count` and all three action handlers. Composes `CountDisplay` and `ActionButton` inside the glassmorphic card shell. All responsive sizing tokens live here.

### `CountDisplay.jsx`
Receives `count` as a prop. Derives text color internally:
- `0` → muted white (`text-white/40`)
- `> 0` → green (`text-green-300`)
- `< 0` → red (`text-red-300`)

### `ActionButton.jsx`
Fully presentational. Accepts `label`, `icon`, `classes`, and `onClick`. Handles hover lift and active press via Tailwind transitions.

### `constants/Buttons.jsx`
Static config for the three buttons — label, Lucide icon element, and Tailwind class string. Modify here to add, remove, or restyle buttons without touching component logic.

---

## Responsive Breakpoints

| Property | Phone `<640px` | `sm` 640px | `md` 768px | `lg` 1024px | `xl` 1280px+ |
|---|---|---|---|---|---|
| Card width | `85vw / 15rem` | `17rem` | `20rem` | `24rem` | `24rem` |
| Card radius | `rounded-xl` | `rounded-2xl` | `rounded-3xl` | `rounded-3xl` | `rounded-3xl` |
| Title size | `text-2xl` | `text-3xl` | `text-3xl` | `text-4xl` | `text-4xl` |
| Count size | `text-6xl` | `text-7xl` | `text-8xl` | `text-9xl` | `text-9xl` |
| Button height | `h-9` | `h-11` | `h-12` | `h-13` | `h-14` |
| Icon size | `16px` | `20px` | `24px` | `24px` | `24px` |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/counter-app.git
cd counter-app

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Customization

| What | Where |
|---|---|
| Button labels / colors | `src/constants/buttons.jsx` |
| Count color logic | `src/components/CountDisplay.jsx` |
| Card sizing per breakpoint | `src/components/CounterCard.jsx` |
| Background video | `src/assets/bg_vid.mp4` |
| Overlay opacity | `src/components/Background.jsx` |

---

## Notes

- **Sub** floors at `0` by default. Remove the guard in `CounterCard.jsx` to allow negative counts — `CountDisplay` already handles the red color.
- `playsInline` on the video is required for autoplay on iOS Safari.
- All glass effects use `backdrop-filter: blur` — supported in all modern browsers.
- `min-h-dvh` in `App.jsx` handles mobile browsers where the address bar affects viewport height.

---

## License

MIT — free to use, modify, and distribute.
