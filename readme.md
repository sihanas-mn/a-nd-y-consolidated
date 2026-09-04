Act as a senior frontend engineer and luxury real estate UI/UX designer.

Create a premium, modern, fully responsive real estate website homepage frontend for:

COMPANY:
A&Y Consolidated (PVT) Ltd

PROJECT:
Premium Residential Apartment Development in Dehiwala, Sri Lanka.

The website should represent A&Y Consolidated as a trusted, professional property developer focused on quality, integrity, modern architecture, and premium urban living.

The final design must feel like a luxury real estate brand website similar to:
- Emaar Properties
- Sobha Realty
- DAMAC
- Luxury architectural studios

The experience should communicate:
- Premium lifestyle
- Architectural excellence
- Trust
- Investment confidence
- Modern living
- Developer credibility


=================================================
TECH STACK REQUIREMENTS
=================================================

IMPORTANT:

Build the frontend using:

- React.js
- JSX ONLY (NO TypeScript)
- Tailwind CSS
- Framer Motion
- Modern React component architecture

Do NOT use:
- TypeScript (.tsx)
- Plain HTML-only structure

File format:
.jsx components only.


Recommended structure:

src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── Hero.jsx
 │     ├── About.jsx
 │     ├── Location.jsx
 │     ├── Apartments.jsx
 │     ├── Amenities.jsx
 │     ├── Investment.jsx
 │     ├── Gallery.jsx
 │     ├── CTA.jsx
 │     └── Footer.jsx
 │
 ├── assets/
 │     └── img-sequence/
 │            ├── frame001.png
 │            ├── frame002.png
 │            ├── frame003.png
 │            └── ...
 │
 └── App.jsx


=================================================
HERO SECTION - SPECIAL REQUIREMENT
=================================================

The hero section must use the existing image sequence animation.

IMPORTANT ASSET:

There is already a PNG frame sequence available inside:

/assets/img-sequence/


These PNG frames represent an FPV drone cinematic walkthrough video inside the apartment.

Do NOT replace this with a normal background image.

Implement a scroll-controlled cinematic animation:

Functionality:

- Load PNG frames dynamically
- Preload images for smooth playback
- Change frames based on user's scroll position
- Create a cinematic FPV drone walkthrough effect
- The animation should feel like a premium real estate film


Animation behavior:

Initial viewport:

Show the first frame.

As user scrolls:

Frame sequence progresses smoothly:

Frame 001
↓
Frame 002
↓
Frame 003
↓
...
Final Frame


Use:

- requestAnimationFrame
- Scroll progress tracking
- Framer Motion scroll hooks
- useScroll()
- useTransform()


The hero should behave like:

Apple product launch pages:
- Smooth cinematic movement
- Full-screen experience
- No sudden frame jumps
- Premium storytelling


Hero overlay:

Add a dark cinematic gradient overlay above the animation.


Hero content:

Company:

A&Y Consolidated (PVT) Ltd


Main heading:

"Experience Modern Luxury Living in Dehiwala"


Subtitle:

"A premium residential apartment designed for families, professionals and investors seeking comfort, connectivity and long-term value."


Buttons:

Primary:

"Explore Apartments"


Secondary:

"Schedule Private Viewing"


Button style:

Modern Liquid Glass UI:

- Transparent glass background
- backdrop blur
- thin gold border
- animated reflection effect
- glowing edges
- smooth hover animation
- magnetic cursor effect
- ripple interaction


=================================================
DESIGN SYSTEM
=================================================

Create a luxury premium visual identity.


COLOR PALETTE:

Luxury Black:
#050505

Charcoal:
#111111

Champagne Gold:
#C9A227

Warm Beige:
#E8DCC8

White:
#FFFFFF


Avoid:
- Bright colors
- Generic gradients
- Cheap templates


Typography:

Headings:

Playfair Display
or
Cormorant Garamond


Body:

Inter
or
Manrope


Large elegant typography.
High spacing.
Luxury magazine style.


=================================================
NAVBAR
=================================================

Create transparent sticky navbar.

Logo:

A&Y Consolidated (PVT) Ltd

Navigation:

Home
Project
Apartments
Location
Amenities
Investment
Gallery
Contact


CTA:

"Book Private Viewing"


Navbar behavior:

- Transparent on hero
- Glass background after scrolling
- Smooth transition


=================================================
ABOUT PROJECT SECTION
=================================================

Create premium split layout.


Left:

Architectural image/video


Right:


Title:

"Designed For Modern Urban Living"


Content:

Highlight:

✓ Contemporary architecture
✓ Spacious apartments
✓ Premium finishes
✓ Secure living
✓ Smart lifestyle facilities


Animated feature cards:

Icons:

Building
Shield
Home
Sparkles


Use:

Lucide React icons.


=================================================
PROJECT HIGHLIGHTS
=================================================

Create floating premium statistics:


5

Floors


10

Luxury Apartments


3BR

Apartment Units


1250-1450

Sq.ft Living Space


Style:

Glass floating cards.

Animations:

- Fade up
- Floating motion
- Hover interaction


=================================================
LOCATION SECTION
=================================================

Title:

"Prime Dehiwala Location"


Show advantages:

- Close to Colombo
- Marine Drive connectivity
- Galle Road access
- Schools
- Hospitals
- Shopping
- Restaurants
- Entertainment


Create:

Interactive map-style design.

Use:

- Animated map pins
- Glass cards
- Motion effects


=================================================
APARTMENT SHOWCASE
=================================================

Create luxury apartment cards.


Each card:

Image

Title:

Premium 3 Bedroom Residence


Details:

1250-1450 Sq.ft

Features:

- Spacious bedrooms
- Modern kitchen
- Balcony views
- Premium bathrooms


Hover:

- 3D card movement
- Image zoom
- Gold glow border


=================================================
AMENITIES SECTION
=================================================

Premium icon grid.


Amenities:

Gymnasium

Rooftop Lounge

CCTV Security

Generator Backup

Intercom

Air Conditioning

Secure Parking


Use:

Lucide React icons.


Card style:

Glassmorphism.

Animation:

Scroll reveal.


=================================================
INVESTMENT VALUE SECTION
=================================================

Create investor confidence section.


Dark luxury background.


Animated counters:


18%-20%

Estimated Profit Margin


20%-25%

Project IRR


36 Months

Completion Timeline


Prime Dehiwala

Investment Location


=================================================
TARGET CUSTOMER SECTION
=================================================

Create elegant buyer category cards.


Include:


Professionals

Doctors

Engineers

IT Professionals

Executives

Business Owners

Overseas Sri Lankans

Property Investors


=================================================
GALLERY SECTION
=================================================

Create luxury masonry gallery.


Images:

- Exterior architecture
- Interior spaces
- Rooftop
- Lifestyle
- Location


Features:

- Smooth hover
- Lightbox
- Cinematic transitions


=================================================
TRUST & DEVELOPER SECTION
=================================================

Create company credibility section.


A&Y Consolidated (PVT) Ltd


Highlight:

- Quality construction
- Professional management
- Transparent process
- Customer-focused approach
- Investment confidence


=================================================
FINAL CTA SECTION
=================================================

Create cinematic closing section.


Heading:

"Own Your Future Home in Dehiwala"


Buttons:

Request Brochure

Schedule Viewing


=================================================
FOOTER
=================================================

Premium dark footer.


Include:

A&Y Consolidated (PVT) Ltd

Navigation

Contact details

Social icons


=================================================
ADVANCED EFFECTS
=================================================

Implement:

✓ FPV drone scroll animation
✓ Glassmorphism
✓ Liquid glass buttons
✓ Magnetic buttons
✓ Smooth scrolling
✓ Parallax effects
✓ 3D card hover
✓ Scroll reveal animations
✓ Gradient mesh backgrounds
✓ Premium loading animation
✓ Cursor interaction effects


=================================================
CODE QUALITY REQUIREMENTS
=================================================

The final output must be:

- Production-ready React JSX
- Clean component structure
- Reusable components
- Responsive design
- Mobile optimized
- Fast loading
- SEO friendly
- Accessible
- Smooth 60FPS animations


The final result should look like a premium international luxury apartment developer website, not a normal template.