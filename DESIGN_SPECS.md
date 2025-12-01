# Kingdom of Kush - Design Specifications

## Responsive Breakpoints & Hero Section

### Hero Component Sizing
| Breakpoint | Height | Title Size | Subtext Size | Button Layout |
|-----------|--------|-----------|-------------|--------------|
| Mobile (<640px) | 480px | 42px | 16px (Body-md) | Column, full-width |
| Tablet (640–1024px) | 85vh | 56px | 18px (Body-lg) | Row, centered |
| Desktop (>1024px) | 100vh | 72px (Display-xl) | 20px (Body-lg) | Row, centered |

**Implementation:** 
- Hero height: `h-[480px] sm:h-[85vh] lg:h-screen`
- Title: `text-[42px] sm:text-[56px] lg:text-display-xl`
- Buttons: `flex-col sm:flex-row` with `w-full sm:w-auto`

---

## Featured Destinations Section

### Grid Layout
| Breakpoint | Columns | Gap | Padding |
|-----------|---------|-----|---------|
| Mobile | 1 | gap-md (16px) | px-md (16px) |
| Tablet | 2 | gap-lg (24px) | px-lg (24px) |
| Desktop | 4 | gap-2xl (48px) | px-2xl (48px) |

**Grid Classes:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md sm:gap-lg lg:gap-2xl`

### Section Header
- **Title:** "Discover Ancient & Future Kush"
- **Size:** Display-M (36px mobile), Display-L (48px tablet+)
- **Color:** Dark Green (#1B4D3E)
- **Alignment:** Center
- **Margin-bottom:** 48px (mobile), 64px (tablet+)

### Card Component
**Container:**
- Border-radius: 8px (lg, not minimal)
- Aspect-ratio: 16:12 (4:3) — `aspect-video md:aspect-[4/3]`
- Box-shadow: Default `shadow-card`, hover `shadow-luxury`
- Transitions: 400ms ease-out

**Hover State (Desktop):**
- Transform: `scale-105` (3% scale up)
- Additional: `md:hover:-translate-y-2` (move up 8px)
- Box-shadow: Luxury tint

**Image Layer:**
- Width/Height: 100% fill
- Object-fit: cover
- Zoom on hover: `group-hover:scale-110`
- Brightness: `group-hover:brightness-75`
- Transition: 500ms ease-out

**Gradient Overlay:**
- Direction: `to-t` (transparent top → opaque bottom)
- Colors: `from-black-stone via-black-stone/30 to-transparent`
- Default opacity: 0.4 (40%)
- Hover opacity: 0.6 (60%)
- Z-index stacking: Image(1) → Overlay(2) → Text(3)

**Text Content (Positioned Bottom):**
- Position: `absolute bottom-0 left-0 right-0`
- Padding: `p-lg md:p-2xl` (16px mobile, 32px desktop)
- Z-index: 10

**Title:**
- Size: 32px (mobile), Display-M (desktop)
- Color: Sand-Gold (#D4AF37)
- Font: Display (Playfair), 700 bold
- Drop-shadow: For contrast

**Subtitle/Category:**
- Size: Label (12px–14px)
- Color: White-Marble (80% opacity)
- Font: Regular (400)

**"Explore →" Link:**
- Position: `absolute bottom-lg right-lg`
- Opacity: 0 (default), 1 (hover)
- Color: Sand-Gold
- Font: Label, 600 weight
- Transition: 300ms opacity

---

## Why Kush Section

### Grid Layout
| Breakpoint | Columns | Gap | Padding |
|-----------|---------|-----|---------|
| Mobile | 1 | gap-lg (24px) | py-4xl (80px), px-lg (24px) |
| Tablet | 2 | gap-2xl (48px) | py-5xl (96px), px-2xl (48px) |
| Desktop | 4 | gap-2xl (48px) | py-5xl (96px), px-4xl (80px) |

**Grid Classes:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg md:gap-2xl`

### Section Header
- **Title:** "Why Choose Kingdom of Kush"
- **Size:** Display-M (36px mobile), Display-L (48px desktop)
- **Color:** Dark Green
- **Alignment:** Center
- **Margin-bottom:** `mb-3xl md:mb-5xl` (64px mobile, 96px desktop)

### Highlight Card Component
**Container:**
- Background: `bg-white-marble/70` (translucent)
- Border: `border border-sand-gold/20`
- Padding: `p-lg md:p-2xl` (16px mobile, 32px desktop)
- Border-radius: `rounded-lg`
- Text-align: Center
- Space-y: `space-y-md` (16px between elements)

**Hover State:**
- Border: `hover:border-sand-gold/50`
- Background: `hover:bg-white-marble` (opaque)
- Shadow: `hover:shadow-card`
- Transition: `transition-all duration-300`

**Icon:**
- Size: `text-4xl md:text-5xl` (36px mobile, 48px desktop)

**Title:**
- Size: Body-lg (18px mobile), Display-md (36px desktop)
- Color: Dark Green
- Font: Display (Playfair), semibold
- Font-size: `text-body-lg md:text-display-md`

**Description:**
- Size: Body-sm (14px mobile), Body-md (16px desktop)
- Color: Black-stone (70% opacity)
- Font: Regular (400)

---

## Color Palette

**Primary Accents:**
- Sand-Gold: #D4AF37, #C9A961 (headlines, CTAs, highlights)
- Dark Green: #1B4D3E (authority, depth, headers)

**Secondary:**
- Black-Stone: #1A1A1A, #2D2D2D (typography, dark backgrounds)
- Bronze: #8B6F47, #A0826D (subtle borders, secondary accents)
- White-Marble: #F5F3F0 (primary background, contrast)

---

## Typography System

**Display Sizes:**
- Display-XL: 72px (hero titles desktop)
- Display-L: 48px (section headers desktop)
- Display-M: 36px (subsection titles desktop)

**Body Sizes:**
- Body-L: 18px–20px (key descriptive text, card titles)
- Body-M: 16px (body text, descriptions)
- Body-S: 14px (supporting text, metadata)
- Label: 12px–14px (tags, filters, captions)

---

## Spacing System (Tailwind)

**Base Unit:** 4px

**Gaps/Margins:**
- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 80px
- 5xl: 96px

---

## Animation & Transitions

**Predefined:**
- `animate-fade-in-up`: Opacity + upward slide (600ms)
- `animate-slide-in-left/right`: Horizontal slide (600ms)
- `animate-scale-in`: Scale up from 0.95 (500ms)
- `group-hover:*`: Coordinated group hovers

**Timing:**
- Card hover transform: 400ms ease-out
- Image zoom: 500ms ease-out
- Overlay opacity: 300ms ease
- Button transitions: 300ms ease

---

## Why Kush Highlight Cards (Enhanced)

### Icon Container
- **Dimensions:** 80px × 80px
- **Margin:** 0 auto 24px (centered, 24px bottom spacing)
- **Background:** Linear gradient (Sand-Gold → Bronze)
  - Classes: `bg-gradient-to-br from-sand-gold to-bronze`
- **Border-radius:** 50% (circular)
- **Display:** flex, align-items center, justify-content center
- **Icon:** 40px size, White-Marble color (#F5F3F0), line/glyph style

### Icon Theme Assignments
| Card | Icon | Theme |
|------|------|-------|
| 1 | 👑 | Cultural Heritage |
| 2 | 🌊 | Nile Experience |
| 3 | ✨ | Future Tourism |
| 4 | 🏛️ | Ancient Architecture |

### Card Text Styling
**Title:**
- Font: Body L (20px → text-body-lg on mobile, auto-scale on desktop)
- Weight: 700 (bold)
- Color: Dark Green (#1B4D3E)
- Margin-bottom: 12px

**Description:**
- Font: Body M (16px → text-body-md)
- Weight: 400 (regular)
- Color: Black-Stone at 70% opacity (rgba(26, 26, 26, 0.7))
- Line-height: 1.6
- Max-width: 280px
- Centered alignment

### Hover State (Desktop)
- **Icon background:** Darker Sand-Gold shade (`hover:from-sand-gold/80 hover:to-bronze/80`)
- **Text color:** Sand-Gold (optional, for enhanced effect)
- **Transform:** `translateY(-4px)` (lift effect)
- **Transition:** 300ms ease-out

### Implementation Classes
```tailwind
w-20 h-20 mx-auto rounded-full flex items-center justify-center 
bg-gradient-to-br from-sand-gold to-bronze 
group hover:from-sand-gold/80 hover:to-bronze/80 
transition-all duration-300
```

---

## Citizenship Preview Section

### Layout Architecture

**Desktop (>1024px):**
- Container: full-width, background White-Marble (#F5F3F0)
- Content: max-width 1200px, margin auto
- Padding: 80px 48px (py-5xl px-4xl)
- Flex layout: two columns (text left, visual right)
- Gap: 64px (gap-4xl)

**Tablet (640–1024px):**
- Flex-direction: column (flex-col)
- Padding: 64px 32px
- Gap: 48px (gap-3xl)

**Mobile (<640px):**
- Flex-direction: column (flex-col)
- Padding: 48px 24px
- Gap: 32px (gap-2xl)

### Left Column (Text Content)

**Section Label:**
- Font: Label (12px, text-label)
- Weight: 600 (font-semibold)
- Color: Sand-Gold (#D4AF37)
- Text: "BECOME A KUSH CITIZEN"
- Margin-bottom: 16px (mb-md)
- Uppercase with tracking-wide

**Title:**
- Text: "Join the Future of Kush"
- Font: Display M (36px mobile, 48px tablet, 48px desktop)
- Color: Dark Green (#1B4D3E)
- Margin-bottom: 20px (mb-lg)
- Classes: `text-display-md md:text-display-md lg:text-display-lg`

**Description:**
- Font: Body M (16px) to Body LG (18px)
- Color: Black-Stone (80% opacity)
- Line-height: 1.8 (leading-relaxed)
- Margin-bottom: 32px (mb-3xl)
- Content: 2–3 sentences about citizenship benefits, cultural integration, future opportunities
- Max-width: 2xl

**Key Benefits (Bulleted):**
- Format: Checkmark icon (✓) Sand-Gold + text
- 5 items:
  1. Cultural belonging & heritage rights
  2. Digital governance access
  3. Exclusive events & experiences
  4. Investment opportunities
  5. Voting rights in future decisions
- Font: Body S (14px) to Body M (16px)
- Line-height: 1.8 (leading-relaxed)
- Margin between items: 12px (space-y-md)
- Container margin-bottom: 32px (mb-3xl)
- Classes: `flex items-start gap-md` with staggered animation

**CTA Button:**
- Text: "Explore Citizenship →"
- Style: Sand-Gold background, Black-Stone text
- Padding: 16px 40px (py-md px-2xl)
- Border-radius: 2px (rounded-sm)
- Font: Body M (16px), weight 600 (font-semibold)
- Transition: 0.3s ease background color
- Hover: `hover:bg-sand-gold/90`
- Classes: `inline-block px-2xl py-md rounded-sm bg-sand-gold text-black-stone font-semibold text-body-md hover:bg-sand-gold/90 transition-colors duration-300 shadow-card hover:shadow-luxury`

### Right Column (Visual)

**Visual Block Container:**
- Background: Linear gradient (Sand-Gold → Bronze)
  - Classes: `bg-gradient-to-br from-sand-gold to-bronze`
- Border-radius: 12px (rounded-2xl)
- Height: 320px (h-80 mobile), 384px (h-96 tablet+)
- Padding: 40px (p-4xl)
- Display: flex, align-items center, justify-content center
- Position: relative
- Overflow: hidden
- Box-shadow: `shadow-luxury`

**Decorative Elements:**
- Top-right circle: `border-2 border-sand-gold/30 rounded-full w-40 h-40 absolute top--10 right--10`
- Bottom-left square: `border-2 border-bronze/30 rounded-lg w-32 h-32 absolute bottom--5 left--5`

**Content (Positioned Over Decorative):**
- Z-index: 10 (relative z-10)
- Text-align: center
- Space-y: 24px (space-y-lg)

**Icon:**
- Size: 80px (text-8xl)
- Animation: bounce (3s duration)
- Emoji: 👑

**Text Overlay Title:**
- Text: "Citizenship Awaits"
- Font: Display M (36px) to Display LG (48px)
- Color: White-Marble (#F5F3F0)
- Line-height: tight (leading-tight)
- Font-family: Playfair Display (font-display)
- Weight: bold (font-bold)

**Text Overlay Subtitle:**
- Text: "Join a legacy 3,000 years in the making"
- Font: Body M (16px)
- Color: White-Marble at 90% opacity
- Max-width: xs (max-w-xs)
- Centered (mx-auto)

---

## E-Government Services Section

### Section Layout

**Desktop (>1024px):**
- Container: max-width 1400px (max-w-6xl)
- Grid: 4-column (grid-cols-4)
- Gap: 32px (gap-2xl)
- Background: Sand-Gold at 5% opacity (bg-sand-gold/5)
- Padding: 80px 48px

**Tablet (640–1024px):**
- Grid: 2-column (grid-cols-2)
- Gap: 24px (gap-2xl adjusted)
- Padding: 64px 32px

**Mobile (<640px):**
- Grid: 1-column (grid-cols-1)
- Gap: 16px (gap-lg)
- Padding: 48px 24px

### Section Header

**Section Label:**
- Font: Label (12px, text-label)
- Weight: 600 (font-semibold)
- Color: Dark Green (#1B4D3E)
- Text: "GOVERNMENT SERVICES"
- Margin-bottom: 16px (mb-md)
- Uppercase with tracking-wide
- Text-align: center

**Title:**
- Text: "Digital Governance for Citizens & Visitors"
- Font: Display M (32px mobile, 48px desktop)
- Color: Dark Green (#1B4D3E)
- Margin-bottom: 12px (mb-md)
- Classes: `text-display-md md:text-display-lg`

**Subtext:**
- Font: Body M (16px) to Body LG (18px)
- Color: Black-Stone (70% opacity)
- Margin-bottom: 48px (mb-4xl)
- Content: "Seamless, modern services for permits, visas, and official documentation"
- Max-width: 2xl (max-w-2xl)
- Centered (mx-auto)

### Service Card Component

**Card Container (6 cards total):**
- Background: White-Marble (#F5F3F0)
- Border: 1px solid Bronze (0.2 opacity)
  - Classes: `border border-bronze/20`
- Padding: 32px (p-2xl)
- Border-radius: 8px (rounded-lg)
- Text-align: center
- Transition: all 0.3s ease
- Cursor: pointer

**Hover State:**
- Border-color: Sand-Gold
  - Classes: `hover:border-sand-gold`
- Box-shadow: 0 4px 16px rgba(212, 175, 55, 0.1)
  - Classes: `hover:shadow-card`

**Icon Container:**
- Width: 60px (w-15)
- Height: 60px (h-15)
- Margin: 0 auto 16px (mx-auto mb-md)
- Background: Linear gradient (Sand-Gold → Bronze)
  - Classes: `bg-gradient-to-br from-sand-gold to-bronze`
- Border-radius: 8px (rounded-lg)
- Display: flex, align-items center, justify-content center
- Icon: 32px (text-2xl), color White-Marble
- Hover: scale(1.1) (group-hover:scale-110 transition-transform duration-300)

**Service Title:**
- Font: Body L (18px, text-body-lg)
- Weight: 700 (font-bold)
- Color: Dark Green (#1B4D3E)
- Margin-bottom: 8px (mb-sm)
- Font-family: Playfair Display (font-display)

**Service Description:**
- Font: Body S (14px, text-body-sm)
- Color: Black-Stone (70% opacity)
- Line-height: 1.5 (leading-relaxed)

### Service Grid Data (6 items)

| # | Title | Icon | Description |
|---|-------|------|-------------|
| 1 | Visa & Entry | 🛂 | Apply for cultural and tourist visas instantly |
| 2 | Documentation | 📜 | Official document authentication across borders |
| 3 | Civil Services | 🧾 | Birth, marriage, and identification documents |
| 4 | Permits & Licenses | ⚖️ | Business and cultural event permits |
| 5 | Authentication | ✅ | Verify credentials and certifications |
| 6 | Support Center | 💬 | Live chat and multilingual assistance |

### Section CTA

**Button:**
- Text: "Explore All Services →"
- Style: Dark Green background, White-Marble text
- Position: Centered below grid (text-center mt-4xl)
- Padding: 16px 40px (py-md px-2xl)
- Border-radius: 2px (rounded-sm)
- Font: Body M (16px), weight 600 (font-semibold)
- Hover: `hover:bg-dark-green/90`
- Shadow: `shadow-card hover:shadow-luxury`
- Classes: `inline-block px-2xl py-md rounded-sm bg-dark-green text-white-marble font-semibold text-body-md hover:bg-dark-green/90 transition-colors duration-300 shadow-card hover:shadow-luxury`

---

### Section Layout

**Desktop (>1024px):**
- Container padding: 80px 48px
- Max-width: 1400px
- Background: Dark Green (10% opacity) — `bg-dark-green/10`

**Tablet (640–1024px):**
- Container padding: 64px 32px

**Mobile (<640px):**
- Container padding: 48px 16px

### Section Header
- **Title:** "Upcoming Cultural Events"
- **Size:** Display-M (48px desktop, 32px mobile)
- **Font:** Playfair Display (display), bold
- **Color:** Dark Green (#1B4D3E)
- **Margin-bottom:** 48px (desktop), 32px (mobile)
- **Classes:** `text-display-md md:text-display-lg text-dark-green`

### Slider Container
- **Overflow-x:** auto (horizontal scroll, smooth)
- **Scroll-behavior:** smooth
- **Display:** flex with gap-2xl (48px)
- **Padding-bottom:** 16px (scrollbar aesthetic)

**Visible Cards per Viewport:**
- Desktop: 3–4 cards visible at once
- Tablet: 2 cards visible
- Mobile: 1.2 cards visible (encouraging swipe)

### Event Card Component

**Card Container:**
- **Width:** 320px (desktop/lg), 280px (tablet/md), 260px (mobile/base)
  - Classes: `w-60 md:w-80 lg:w-96`
- **Height:** 420px (h-96)
- **Background:** White-Marble (#F5F3F0)
- **Border-radius:** 8px (rounded-lg)
- **Overflow:** hidden
- **Box-shadow:** 
  - Default: `shadow-card` (0 4px 16px rgba(0, 0, 0, 0.1))
  - Hover: `shadow-luxury` (0 8px 32px rgba(212, 175, 55, 0.15))
- **Flex-shrink:** 0 (prevent squishing in flex container)
- **Cursor:** pointer
- **Transition:** all 0.3s ease

**Image Section:**
- **Height:** 240px (h-60)
- **Width:** 100%
- **Object-fit:** cover
- **Background:** Linear gradient (Sand-Gold → Dark Green)
  - `bg-gradient-to-br from-sand-gold to-dark-green`
- **Overlay:** Gradient to-transparent with opacity 30%
- **Hover:** Image opacity 90% (group-hover/card:opacity-90)

**Content Section:**
- **Padding:** 20px (p-5)
- **Height:** 180px (h-36)
- **Display:** flex, flex-direction column, justify-content space-between

**Event Title:**
- **Font:** Body L (18px → text-body-lg)
- **Weight:** 700 (bold)
- **Font-family:** Playfair Display (font-display)
- **Color:** Dark Green
- **Line-height:** 1.3 (leading-snug)
- **Max-lines:** 2 (line-clamp-2)

**Event Meta (Date, Location):**
- **Font:** Body XS (13px → text-body-xs)
- **Color:** Bronze (#8B6F47)
- **Format:**
  - "📅 March 15–20, 2026"
  - "📍 Meroe"
- **Spacing:** Space-y-1

**Event Description:**
- **Font:** Body S (14px → text-body-sm)
- **Color:** Black-Stone at 70% opacity
- **Line-height:** 1.5 (leading-relaxed)
- **Max-lines:** 2 (line-clamp-2)
- **Margin-bottom:** auto (space-between layout)

**CTA Button:**
- **Label:** "Learn More →"
- **Font:** Body S (14px), weight 600
- **Color:** Sand-Gold (#D4AF37)
- **Position:** Text right alignment
- **Visibility:** Hidden by default (opacity-0)
- **Hover State:** Visible (group-hover/card:opacity-100) with opacity transition 300ms
- **Hover Color:** Sand-Gold at 80% opacity

### Card Hover State (Desktop)
- **Box-shadow:** Upgrade to luxury
  - `hover:shadow-luxury` (0 8px 32px rgba(212, 175, 55, 0.15))
- **Image Opacity:** 0.9 (subtle fade)
- **Transform:** scale(1.02) — 2% scale increase
- **Overall Transform:** `hover:scale-105` (group-hover/card:scale-105)
- **Transition:** all 300ms ease

### Navigation Buttons
- **Position:** Absolute left/right at 50% top
- **Background:** Sand-Gold at 90% opacity
- **Color:** Black-Stone
- **Size:** Medium (p-md)
- **Border-radius:** 8px (rounded-lg)
- **Visibility:** Hidden by default (opacity-0)
- **Hover Visibility:** Visible on parent hover (group-hover:opacity-100)
- **Hover Effect:** `hover:bg-sand-gold` (100% opacity)
- **Shadow:** `shadow-luxury`
- **Z-index:** 20 (above cards)
- **Transition:** opacity 300ms

### Sample Event Data
```javascript
{
  id: 1,
  title: 'Meroe Festival of Light',
  date: '2026-03-15',
  location: 'Meroe',
  category: 'Festival',
  excerpt: 'Celebrate Nubian heritage with music, dance, and ceremonial fire under the stars.',
  image: '[URL]'
}
```

---

✅ Hero responsive breakpoints (42px → 56px → 72px)
✅ Featured Destinations 4-column grid (1 → 2 → 4)
✅ Card aspect-ratio 4:3 (16:12)
✅ Gradient overlay (0.4 → 0.6 opacity on hover)
✅ Text overlay positioning (bottom, z-index 10)
✅ "Explore →" link hidden until hover
✅ Why Kush 4-column grid (1 → 2 → 4)
✅ Centered section headers with Dark Green
✅ Hover shadow, border, background transitions
✅ Icon sizing responsive (36px → 48px)
✅ **Icon containers with 80x80px gradient (Sand-Gold → Bronze)**
✅ **Icon hover darker shade with translateY(-4px)**
✅ **Events section title: "Upcoming Cultural Events"**
✅ **Events background: Dark Green 10% opacity**
✅ **Event cards: 320px desktop, 280px tablet, 260px mobile**
✅ **Event card height: 420px with 240px image section**
✅ **Event card hover: scale(1.02), shadow-luxury upgrade**
✅ **Event meta: Date/Location with emoji formatting**
✅ **Event description: 2-line clamp with opacity animation**
✅ **CTA "Learn More →" link revealed on hover**
✅ **Navigation buttons: Sand-Gold background, hidden until hover**
✅ **Citizenship section: 2-column flex layout (text left, visual right)**
✅ **Citizenship visual: 80x80px gradient box with crown icon + animated bounce**
✅ **Citizenship benefits: 5-item list with checkmark icons (✓) Sand-Gold**
✅ **Citizenship CTA: Sand-Gold button with hover effects**
✅ **E-Gov header: 3-line centered (label, title, subtext)**
✅ **E-Gov grid: 4 desktop, 2 tablet, 1 mobile with 6 service cards**
✅ **E-Gov cards: 60x60px gradient icon containers with hover scale**
✅ **E-Gov card hover: Border-sand-gold + shadow-card upgrade**
✅ **E-Gov CTA: Dark Green button centered below grid**

---

**Live:** http://localhost:5173/
**Last Updated:** December 1, 2025
**Status:** ✅ Complete & Production-Ready

---

## PROJECT SUMMARY
- ✅ 5 Pages: Home, About Us, Citizenship, E-Government Services, Events
- ✅ 7 Components: Hero, Card, Slider, Button, Navbar, Footer
- ✅ 13 Sections on Home Page
- ✅ 7 Sections on About Us Page
- ✅ Premium Design System with Tailwind CSS
- ✅ Multi-Language Support (EN/AR with RTL)
- ✅ Fully Responsive (Mobile/Tablet/Desktop)
- ✅ Hot-Reload Development Server
- ✅ Zero Build Errors

See `PROJECT_SUMMARY.md` for complete project documentation.
