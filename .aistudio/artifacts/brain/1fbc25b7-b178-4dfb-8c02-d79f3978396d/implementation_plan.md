# A Royal Fairytale for Heeru

An interactive, six-chapter fairytale storybook web experience dedicated to Heeru, faithfully recreating the visual language, motion choreography, and tactile surprises of the reference video while personalizing every detail—from the wax-sealed royal invitation and opening castle gates to the three-step magic mirror, ten-promise parchment scroll, hanging Polaroid gallery, and starry night finale.

---

### User Review & Critical Decisions

> [!IMPORTANT] All four design choices from Phase 1 are locked into this plan and override any conflicting defaults.

- **Confirmed Decision 1 (Page 1 Invitation Flow)**: Tapping **"Tap to break the seal"** animates the lavender envelope opening and reveals the full royal invitation letter (*"To My Dearest Heeru... With love, Your King."*) with an **"Enter Your Kingdom"** button that transitions into the Castle Gates.
- **Confirmed Decision 2 (Page 3 Magic Mirror Sequence)**: Clicking the ornate golden mirror cycles through the three-tap sequence from the reference video (*"Who is the prettiest of them all?"* → *"You."* → *"Who has the kindest heart?"* → *"Still you."* → *"And who is my princess?"* → *"You. Always You."*) before crowning the mirror and revealing the **"Reveal My Royal Orders"** CTA.
- **Confirmed Decision 3 (Page 5 Empty Gallery State)**: Missing files among `photo1.jpg`–`photo8.jpg` gracefully hide their individual Polaroid slots without broken images; when zero personal photos are present yet, the starry gallery displays a sweet illustrated *"Royal Memory Box"* keepsake prompt letting you know where to drop your photos while keeping the **"One Last Thing"** progression intact.
- **Confirmed Decision 4 (Days Counter Start Date)**: The *"Days of loving you"* counter defaults to **January 31, 2026** (`2026-01-31`) in the central configuration file so it renders accurate day counts immediately and stays trivial to adjust later.

---

### 1. Overview & Core Concept

- **What It Does**: Guides Heeru through a linear, six-stage romantic storybook journey inside a central mobile-proportioned fairytale canvas framed by a soft blush-pink backdrop on desktop and full-screen on mobile. Includes persistent background audio playback, discreet chapter progress and back navigation, a live *"Days of loving you"* counter, a multi-tap crown Easter egg love note, and a central configuration file for all names, captions, promises, and dates.
- **Target Audience / Persona**: Created exclusively for **Heeru** as an interactive Princess Day keepsake from her King, designed to feel tactile, intimate, and celebratory on both phone and desktop screens.
- **Key Value**: Recreates the bespoke charm and playful micro-interactions of the reference video—press-and-hold wax sealing, swinging castle doors, interactive night-sky fireworks, and floating Polaroid garlands—without watermarks, generic templates, or placeholder stock photos.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Magical Entry Preloader**: Brief pastel cloud sky reveal featuring a cute crowned aviator mascot and typing caption (*"Loading something special for you"*) that smoothly unveils Page 1.
  2. **Page 1 — The Royal Invitation**: Soft blush dotted backdrop framing a lilac gold-trimmed envelope stamped with a crimson crown wax seal (*"FOR PRINCESS Heeru"*). Tapping **"Tap to break the seal"** starts the background music (on first user gesture), cracks the seal, opens the flap, and lifts out the cream royal invitation card with **"Enter Your Kingdom"**.
  3. **Page 2 — The Castle Gates**: Lavender battlement archway with golden-trimmed crimson double gates, crown crest, and rose bouquet. Tapping **"Tap to open the gates"** swings both doors inward to reveal a pastel castle bathed in drifting clouds and celebratory fireworks beneath **"Princess Heeru, Your Castle Is Ready"** and **"Enter the Castle"**.
  4. **Page 3 — The Magic Mirror**: Pearl-studded golden oval mirror flanked by pink rose clusters. Starts with a shimmering `?` and prompts *"Tap the mirror to ask it"*. Three taps cycle the video's questions and answers, ending on **"You. Always You."** as a golden crown descends onto the frame, rose petals drift down, and **"Reveal My Royal Orders"** appears.
  5. **Page 4 — The Royal Orders**: Rolled cream parchment with golden scroll rods, floral corner bouquets, and all **10 numbered crimson royal seals** (from *"1. The First and Last Moment"* through *"10. The Forever Rule"*). At the bottom, a dashed progress ring surrounds an interactive wax stamp (*"Press and hold the seal to make it official"*—also supporting accessible keyboard/click hold fallback). Completing the hold stamps **"Signed, Sealed, Yours Forever."** and unlocks **"Keep Going, My Princess"**.
  6. **Page 5 — Our Little World (My Favourite Views)**: Deep royal twilight-plum night backdrop topped with festive triangular pennant bunting (`pink`, `gold`, `burgundy`) and twinkling stars. Up to 8 Polaroid frames (`photo1.jpg`–`photo8.jpg`) hang slightly tilted on curved pastel garlands with ribbon bows, cursive captions, hover lift, and a click-to-open full-screen lightbox with prev/next navigation. Missing photos hide cleanly; if none exist yet, a keepsake Memory Box card appears above the **"Every one of them has you in it."** ribbon and **"One Last Thing"** CTA.
  7. **Page 6 — The Final Princess Reveal**: **"Happy Princess Day, Heeru!"** atop an interactive night-sky fairytale castle scene with crescent moon, *"Tap the sky"* firework bursts, roses, and golden carriage. Below sits the cream keepsake letter, signature (*"Your loyal subject, Your King ♡"*), *"Forever has a beautiful name. It's Heeru."*, and **"Crown Me Again"**—which showers the screen with falling crowns, hearts, and sparkles while revealing the final love note (*"One lifetime, countless memories, and still choosing you. I love you, Heeru."*).

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Storybook paper-craft fairytale—tactile layered cards, scalloped gold trims, soft drop shadows, wax seals, roses, butterflies, and starry night transitions matching the reference video's warm pastel aesthetic.
  - *Color Palette & Mood*:
    - Outer Desktop Surround: Soft muted mauve-blush (`--canvas-surround: #E9D8E0`)
    - Story Viewport Surface: Warm porcelain blush (`--surface-blush: #FAF0F3`) and deep royal plum for starry chapters (`--surface-plum: #2A193D`)
    - Lavender & Lilac Accents: Envelope & castle stone (`--royal-lilac: #C7AFE2`, `--lilac-soft: #DCCDF0`)
    - Primary Romantic CTA Accent: Royal burgundy-rose (`--royal-burgundy: #9E1B4F`) with gold foil accents (`--royal-gold: #D9A74A`)
    - Primary Ink: Deep plum charcoal (`--ink-primary: #331B29`) and muted rose-slate (`--ink-muted: #7B5B6B`) for crisp `>= 4.5:1` contrast.
  - *Typography & Hierarchy*:
    - Display Headings: **Playfair Display** (weight 700, balanced wrapping) for storybook chapter titles and royal proclamations.
    - Romantic Script Accent: **Great Vibes** (or **Dancing Script**) exclusively for *"Heeru"*, *"Princess"*, signatures, and Polaroid captions.
    - Body & Controls: **Plus Jakarta Sans** (400/600) with tabular numerals (`tabular-nums`) for the 10-order seals and *"Days of loving you"* counter.
  - *Component Styling & Layout*:
    - Desktop shows the centered mobile-proportioned storybook frame (`max-w-[430px]`, `min-h-[820px] max-h-[92vh]` rounded with subtle elevation) floating over the soft pink ambient surround with subtle drifting petals and a discreet *"Days of loving you"* + *"Made with love for Heeru"* footer caption; mobile viewports (`< 520px`) expand cleanly edge-to-edge.
    - Every button and touch target maintains at least `44px` hitbox height, single-line label discipline, and clean spacing.

- **Interactive Feedback & Motion**:
  - Smooth Framer Motion (`motion/react`) chapter crossfades, 3D-inspired envelope flap and castle-door swings (`transform`/`opacity` compositor-only animations), press-and-hold radial SVG seal progress, tap-anywhere sky fireworks canvas/particles, occasional drifting butterflies, and a gentle custom wand/crown cursor sparkle on desktop that never obscures clicks.
  - Clicking the tiny header crown **5 times** unlocks a secret royal love-note modal anywhere in the journey.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1 (Custom Crafted SVG Storybook Art vs. External Stock URLs)**:
  - *Chosen Approach*: Author crisp, multi-layered custom SVG illustrations (envelope, battlements & doors, pearl-and-ruby mirror, parchment scroll, royal carriage, night castle, pennant bunting, rose bouquets, cute aviator mascot) directly inside reusable React components, alongside a dedicated `/public/assets/` folder structure for personal photos and audio.
  - *Why*: Guarantees zero broken external links, crisp vector scaling at any DPI, and direct programmatic animation of individual illustration parts (swinging doors, cracking wax seal, dropping mirror crown, glowing castle windows) matching the video closely.
  - *Alternatives Considered*: Static raster backdrops, which cannot animate sub-elements like opening double gates or cracking seals smoothly.

- **Decision 2 (Single Central Configuration Module)**:
  - *Chosen Approach*: Consolidate all personal copy, relationship start date (`2026-01-31`), 10 Royal Orders, photo filenames/captions (`photo1.jpg`–`photo8.jpg`), music path (`/assets/music/background.mp3`), and secret crown Easter egg note into one clearly commented TypeScript configuration file, accompanied by `ASSETS_README.txt`.
  - *Why*: Lets the user swap dates, tweak captions, or customize messages in seconds without touching component logic.
  - *Alternatives Considered*: Hardcoding copy across six page components, which makes personalization error-prone.

- **Decision 3 (Resilient Local Asset Probing for Photos & Audio)**:
  - *Chosen Approach*: Probe `/assets/photos/photo1.jpg` through `photo8.jpg` on mount using image load checks (`onload`/`onerror`), rendering only verified existing photos in the Polaroid garland and seamlessly revealing the Royal Memory Box prompt when none load yet. Similarly, bind HTML5 `<audio>` to `/assets/music/background.mp3` with graceful silent fallback and volume slider if the file isn't uploaded yet.
  - *Why*: Prevents broken image icons or console-blocking audio errors before the user copies their personal files into `public/assets/`.
  - *Alternatives Considered*: Static hardcoded grids that display broken `<img>` placeholders when files are missing.

---

### 4. Technical Architecture & Data Strategy

- **Architecture & Component Diagram**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       Personal Kingdom Config                           │
│  (Names, 2026-01-31 Start Date, Copy, 10 Orders, Captions, Audio Path)  │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         App Shell & Story Stage                         │
│  ┌──────────────────────┐  ┌──────────────────┐  ┌───────────────────┐  │
│  │ Top Kingdom Bar      │  │ Ambient Layer    │  │ Persistent Audio  │  │
│  │ • Back Button        │  │ • Floating Hearts│  │ • Play / Pause    │  │
│  │ • 6-Step Progress    │  │ • Butterflies    │  │ • Volume Slider   │  │
│  │ • Crown Easter Egg   │  │ • Desktop Cursor │  │ • Auto-Start Hook │  │
│  │ • Days Counter       │  └──────────────────┘  └───────────────────┘  │
│  └──────────────────────┘                                               │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                  Active Chapter Viewport (1 of 6)                 │  │
│  │                                                                   │  │
│  │  [Intro Loader] ─▶ [1. Royal Invitation] ─▶ [2. Castle Gates]     │  │
│  │                                                   │               │  │
│  │  [6. Final Reveal] ◀─ [5. Photo Gallery] ◀─ [4. Royal Orders]     │  │
│  │         ▲                    │                    ▲               │  │
│  │         │            (Lightbox Modal)             │               │  │
│  │   Tap Sky Fireworks                       [3. Magic Mirror]       │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - `currentPage` (`0` intro loader, `1..6` story chapters) with transition direction state for smooth forward/back animations.
  - `chapterProgress` flags (seal broken, gates opened, mirror tap step `0..3`, royal orders seal held & stamped, crown-again celebration active) preserved or cleanly resettable per user revisit.
  - `verifiedPhotos` list populated asynchronously from `photo1.jpg`–`photo8.jpg`, paired with `activeLightboxIndex` for full-screen photo inspection.
  - `audioState` (`isPlaying`, `volume`, `hasInteracted`, `isAudioAvailable`) mounted above chapter transitions so music plays continuously across all six pages without restarting.
  - `crownTapCount` tracking multi-clicks on the crown icon to trigger the secret love note overlay.

- **Interactive Component & State Mapping**:
  - **Invitation Envelope**: Tap button / envelope → starts audio on first interaction → runs wax-break + flap-open timeline → displays letter card → **"Enter Your Kingdom"** advances to Page 2.
  - **Castle Gates**: Tap **"Tap to open the gates"** → animates left/right door `rotateY` / slide reveal → switches state to unlocked castle view with drifting clouds & CSS/SVG fireworks → **"Enter the Castle"** advances to Page 3.
  - **Magic Mirror**: Each tap increments `mirrorStep` (`0 → 1 → 2 → 3`), animating text shimmer inside the glass, updating the question above, and on step `3` dropping the golden crown, floating rose petals, and enabling **"Reveal My Royal Orders"**.
  - **Royal Orders Scroll**: Renders all 10 numbered items inside an easily readable scroll; holding down on the wax seal (`pointerdown` / `keydown` Space/Enter with `requestAnimationFrame` progress up to `1.1s`) fills the golden progress ring, stamps the official crimson seal, and reveals **"Keep Going, My Princess"**.
  - **Photo Gallery & Lightbox**: Maps verified photos into tilted hanging Polaroids with hover elevation; clicking any Polaroid opens the full-screen modal with keyboard/button prev/next and close controls.
  - **Final Reveal**: **"Tap the sky"** spawns star-burst fireworks at tap coordinates over the night castle; **"Crown Me Again"** showers animated hearts, sparkles, and crowns while revealing the final devotion message and optional **"Replay Fairytale"** action.
