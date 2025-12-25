# Happy New Year 2026 - Romantic Wish Page 💖

A beautiful, interactive New Year's wish webpage featuring advanced fireworks animations, an elegant splash screen, and romantic design elements. Created with love for Premii (Farzana Hossain Lopa) from Mazu (Basharul - Alam - Mazu).

## ✨ Features

### 🎆 Multi-Stage Animation Sequence

1. **Advanced Fireworks Display** (15-20 seconds)

   - 7 different explosion patterns (circle, double circle, planet, heart, random, etc.)
   - Realistic physics with velocity, acceleration, and gravity
   - Particle-based rendering on HTML5 Canvas

2. **Text Spelling Animation** (5 seconds)

   - "HAPPY NEW YEAR 2026" appears letter by letter using particles
   - Smooth animations with glowing effects

3. **Golden Splash Screen** (5 seconds)

   - Elegant golden gradient theme
   - Animated icon box with pulse effects
   - Couple silhouettes with clothing icons (👔👗)
   - Spinning firework emojis (🎆🎇)
   - "Welcome to 2026" subtitle with fade-in animation

4. **Main Content Reveal**
   - Smooth fade-in to the romantic wish page

### 💝 Main Page Features

- **Personalized Wish Message**: Customizable romantic message for your loved one
- **Live Countdown Timer**: Real-time countdown to New Year 2026
- **Interactive Tabs**:

  - **Wish**: Main greeting with message and countdown
  - **Gallery**: Photo gallery section (6 placeholder images)
  - **Timeline**: Relationship milestones and memories
  - **Printable Card**: Print or download PNG version

- **Interactive Buttons**:
  - **Celebrate**: Trigger fireworks animation
  - **Send Virtual Kiss**: Animated floating kiss emoji (💋)
  - **Quick Edit**: Customize recipient, sender, and message

### 🎨 Design Highlights

- **Romantic Theme**: Pink (#ff6b81) and gold (#ffd166) color scheme
- **Floating Hearts**: Animated heart emojis (💕💖💝✨) in background
- **Animated SVG Artwork**: "2026" text with 8 animated firework bursts
- **Glassmorphism Effects**: Frosted glass styling with backdrop filters
- **Gradient Animations**: Pulsing glows, color transitions, and shimmer effects
- **Great Vibes Cursive Font**: Elegant typography for headings

### 📱 Fully Responsive

- **4 Responsive Breakpoints**:
  - Desktop (default)
  - Tablet (≤768px)
  - Mobile (≤600px)
  - Small Mobile (≤480px)
- Progressive font sizing using CSS `clamp()`
- Flexible layouts that adapt to any screen size

## HappyNewYear2027 — Romantic Wish Page

Short interactive New Year wish page with animated scene and a love-letter/envelope feature.

**How to run**

- **Open file**: Open [wish.html](wish.html) in your browser.
- **Local server (recommended)**: run `python -m http.server` and open http://localhost:8000

**What changed (recent edits)**

- **Files updated**: [wish.html](wish.html), [css/love_letter.css](css/love_letter.css), [css/wish.css](css/wish.css), [js/wish.js](js/wish.js), [js/love_letter.js](js/love_letter.js)
- **Behavior**: The gift `.gift` triggers the open animation; when that animation completes the `Next` button is shown and links to [love_letter.html](love_letter.html).
- **Safety**: `js/love_letter.js` now guards against running on pages without the envelope markup (no console errors).

**Quick test**

1. Open [wish.html](wish.html)
2. Click the gift box (wait for the open animation)
3. The `Next` button appears. Click it to open the full envelope demo ([love_letter.html](love_letter.html)).

**Developer notes**

- **Animation**: `js/wish.js` uses GSAP/TweenMax for the openBox animation; keep that script included in pages that use it.
- **Next button**: Hidden by default via `.next-nav.hidden` and revealed in `openBox()` on animation complete.
- **Envelope script**: `js/love_letter.js` is defensive (wrapped in DOMContentLoaded and checks for `.letters`).
- **Mobile**: `.btn-next` styles in [css/wish.css](css/wish.css) include mobile optimizations (full-width, safe-area padding).

If you want, I can:

- run a quick repo scan and tidy duplicate envelope markup
- commit these changes and run a quick browser test script (if you want me to automate checks)

Made with ❤️ — contact the author for further tweaks.
