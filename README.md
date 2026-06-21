# Counter App

A minimal, glassmorphic counter app built with React + Tailwind CSS, featuring a looping video background and smooth UI interactions.

---

## Preview

A frosted-glass card floats over a looping video background. The counter color shifts — muted white at zero, green when positive. Three action buttons (Add, Sub, Reset) each have their own color accent with hover lift and active press animations.

---

## Tech Stack

- **React 18** — UI & state
- **Tailwind CSS v3** — utility-first styling
- **Lucide React** — icons
- **Vite** — build tool

---

## Project Structure

```
src/
├── assets/
│   └── bg_vid.mp4          # Looping background video
├── components/
│   ├── Background.jsx       # Video + dark overlay
│   ├── CounterCard.jsx      # Stateful card container
│   ├── CountDisplay.jsx     # Reactive count display
│   └── ActionButton.jsx     # Reusable action button
├── constants/
│   └── buttons.jsx          # Button config (label, icon, styles)
├── App.jsx                  # Root layout
└── main.jsx                 # Entry point
```

---

## Component Breakdown

### `App.jsx`
Root layout. Positions `Background` and `CounterCard` centered on screen. Holds no state.

### `Background.jsx`
Renders the fullscreen looping `<video>` and a `bg-black/50` overlay. Purely presentational — drop it anywhere to reuse.

### `CounterCard.jsx`
The only stateful component. Owns `count` and the three action handlers. Composes `CountDisplay` and `ActionButton` inside the glassmorphic card shell.

### `CountDisplay.jsx`
Receives `count` as a prop. Derives its text color internally:
- `0` → muted white
- `> 0` → green
- `< 0` → red *(reserved for future use)*

### `ActionButton.jsx`
Fully presentational. Accepts `label`, `icon`, `classes`, and `onClick`. Handles hover lift and active press via Tailwind transitions.

### `constants/buttons.jsx`
Static config array for the three buttons — label, Lucide icon element, and Tailwind class string. Edit here to add, remove, or restyle buttons without touching component logic.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Customization

| What                  | Where                          |
|-----------------------|--------------------------------|
| Button labels/colors  | `src/constants/buttons.jsx`    |
| Count color logic     | `src/components/CountDisplay.jsx` |
| Card size/style       | `src/components/CounterCard.jsx`  |
| Background video      | `src/assets/bg_vid.mp4`        |
| Overlay opacity       | `src/components/Background.jsx`   |

---

## Notes

- The **Sub** button floors at `0` — it won't go negative. Remove the guard in `CounterCard.jsx` to allow negative counts (and `CountDisplay` already handles the red color for it).
- The background video is muted and autoplays to comply with browser autoplay policies.
- All backdrop blur and glass effects rely on `backdrop-filter` support — works in all modern browsers.
