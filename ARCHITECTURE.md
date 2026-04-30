# Architecture Documentation

## Project Overview

JeetLearnings is a comprehensive career exploration platform built with Next.js that provides detailed career guides, cost breakdowns, and educational pathways for Indian students. The platform features 50+ career profiles across 10+ categories with interactive components and responsive design.

## Technology Stack

### Frontend
- **Framework**: Next.js 16.1.6 (React-based)
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack (Next.js native bundler)
- **Language**: TypeScript
- **Icons**: Lucide React (via DynamicIcon component)

### Backend
- **Runtime**: Node.js
- **API**: Next.js API routes (if needed)
- **Database**: Static data files (TypeScript/JSON)

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **CSS Processing**: PostCSS

## Project Structure

```
jeetlearnings/
├── app/
│   ├── admin/                          # Admin dashboard
│   │   ├── AdminClient.tsx
│   │   ├── components/
│   │   │   ├── BlogManager.tsx
│   │   │   └── CareerLibraryManager.tsx
│   │   └── page.tsx
│   ├── blog/                           # Blog section
│   │   ├── BlogClient.tsx
│   │   ├── page.tsx
│   │   └── [id]/
│   ├── career-library/                 # Career library
│   ├── career-path/                    # Career path visualization
│   │   ├── CareerPathClient.tsx
│   │   └── page.tsx
│   ├── components/                     # Reusable components
│   │   ├── ActuarialCareerInfographic.tsx
│   │   ├── CareerCompleteGuide.tsx
│   │   ├── CostBreakdown.tsx
│   │   ├── FloatingNavbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── ResourcesSection.tsx
│   │   ├── SidebarNav.tsx
│   │   ├── StackingCardsSection.tsx
│   │   ├── TeamCarousel.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   └── [40+ other components]
│   ├── contact/                        # Contact page
│   │   ├── ContactClient.tsx
│   │   └── page.tsx
│   ├── data/                           # Career data files
│   │   ├── allCategoriesData.ts
│   │   ├── bioScienceUpdateData.ts
│   │   ├── careerCategoryCosting.ts
│   │   ├── careerIndividualCosting.ts
│   │   ├── careerLibraryData.ts
│   │   ├── careerPageData.ts
│   │   ├── careers.ts
│   │   ├── careerVideos.ts
│   │   ├── costBreakdownData.ts
│   │   ├── environmentUpdateData.ts
│   │   ├── [20+ other data files]
│   │   └── resourcesData.ts
│   ├── disclaimer/                     # Legal pages
│   ├── dmit/                           # DMIT test section
│   ├── hooks/                          # Custom React hooks
│   │   ├── useScrollAnimation.ts
│   │   └── useStackingCards.ts
│   ├── privacy-policy/
│   ├── psychometric/                   # Psychometric test
│   ├── resources/                      # Resources section
│   ├── terms-and-conditions/
│   ├── [category]/                     # Dynamic category pages
│   │   ├── CategoryClient.tsx
│   │   ├── page.tsx
│   │   └── [career]/                   # Dynamic career pages
│   │       ├── CareerPageClient.tsx
│   │       ├── CareerPageClientNew.tsx
│   │       └── page.tsx
│   ├── globals.css                     # Global styles
│   ├── layout.tsx                      # Root layout
│   └── page.tsx                        # Home page
├── public/                             # Static assets
│   ├── acturial/
│   ├── assets/
│   ├── careers/
│   ├── icons/
│   └── images/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Data Architecture

### Career Data Structure

Each career is defined with a `CareerPageData` interface containing:

```typescript
interface CareerPageData {
  slug: string;                    // URL-friendly identifier
  badge: string;                   // Career badge/label
  heading: string;                 // Main heading
  subheading: string;              // Descriptive subheading
  whyCards: WhyCard[];             // 4 compelling reason cards
  quickFacts: QuickFact[];          // Key facts (salary, skills, pathway)
  statCards: StatCard[];            // Market statistics
  guideSections: GuideSection[];    // 16-section career guide
}

interface GuideSection {
  id: string;                      // Section identifier
  title: string;                   // Section title
  icon: string;                    // Lucide icon name
  description: string;             // Brief description
  color: string;                   // Hex color code
  content: string[];               // Section content (array of paragraphs)
}
```

### Cost Data Structure

```typescript
interface CareerCostData {
  career: string;                  // Career slug
  category: string;                // Career category
  costs: Array<{
    category: string;              // Cost category (e.g., "Government Institutions")
    amount: string;                // Cost range (e.g., "₹15,000-50,000")
    description: string;           // Brief description
    icon: string;                  // Emoji icon
    color: string;                 // Hex color code
    details?: string[];            // Detailed breakdown
  }>;
}
```

## Key Components

### Career Display Components

1. **CareerCompleteGuide.tsx**
   - Displays full 16-section career guide
   - Responsive layout with collapsible sections
   - Color-coded sections with icons

2. **CostBreakdown.tsx**
   - Shows expandable cost cards
   - 6-7 cost categories per career
   - Detailed breakdowns with icons and colors

3. **CareerPageClient.tsx**
   - Main career page component
   - Integrates guide and cost sections
   - Handles dynamic routing

### Navigation Components

1. **Navbar.tsx** - Top navigation bar
2. **FloatingNavbar.tsx** - Floating navigation
3. **SidebarNav.tsx** - Side navigation menu
4. **Footer.tsx** - Footer with links

### Hero & Landing Components

1. **HeroSection.tsx** - Main hero banner
2. **HomeHeroSlider.tsx** - Carousel slider
3. **ActuarialFuturisticHero.tsx** - Specialized hero sections

## Routing Architecture

### Dynamic Routes

```
/[category]                    # Category landing page
/[category]/[career]           # Individual career page
```

### Static Routes

```
/                              # Home page
/admin                         # Admin dashboard
/blog                          # Blog listing
/blog/[id]                     # Individual blog post
/career-path                   # Career path visualization
/contact                       # Contact page
/disclaimer                    # Legal disclaimer
/dmit                          # DMIT test
/privacy-policy                # Privacy policy
/psychometric                  # Psychometric test
/resources                     # Resources page
/terms-and-conditions          # Terms & conditions
```

## Data Flow

### Career Page Data Flow

```
1. User navigates to /[category]/[career]
2. page.tsx fetches career data from careerPageData.ts
3. CareerPageClient.tsx receives data as props
4. Component renders:
   - Career header with badge
   - Why cards (4 compelling reasons)
   - Quick facts
   - 16-section guide (CareerCompleteGuide)
   - Cost breakdown (CostBreakdown)
5. User can expand/collapse sections
```

### Cost Data Flow

```
1. careerIndividualCosting.ts exports cost objects
2. CostBreakdown.tsx receives career slug
3. Component fetches costs from allIndividualCareerCosts
4. Renders expandable cost cards with:
   - Category name
   - Amount range
   - Description
   - Detailed breakdown
```

## Styling Architecture

### Tailwind CSS Approach

- **Responsive Design**: Mobile-first approach with breakpoints
  - `sm:` (640px)
  - `md:` (768px)
  - `lg:` (1024px)
  - `xl:` (1280px)

- **Color Scheme**:
  - Primary: Blue (#1E40AF, #3B82F6)
  - Secondary: Green (#166534, #15803D)
  - Accent: Amber (#F59E0B)
  - Success: Emerald (#10B981)

- **Typography**:
  - Headings: Responsive sizes (text-xl to text-4xl)
  - Body: text-base with line-height adjustments
  - Proper contrast ratios for accessibility

### Global Styles (globals.css)

- CSS variables for colors
- Responsive container queries
- Animation definitions
- Utility classes

## Performance Optimizations

### Build Optimization

- **Turbopack**: Fast incremental builds
- **Static Generation**: Pre-rendered pages at build time
- **Code Splitting**: Automatic route-based code splitting

### Runtime Optimization

- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Components loaded on demand
- **CSS Optimization**: Tailwind purges unused styles

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Color contrast compliance (WCAG AA)
- Keyboard navigation support
- Responsive text sizing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Workflow

### Local Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Build Process

1. TypeScript compilation
2. Next.js page generation
3. Static asset optimization
4. CSS minification
5. JavaScript bundling with Turbopack

## Deployment

- **Platform**: Vercel (recommended for Next.js)
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Environment**: Node.js 18+

## Future Architecture Considerations

1. **Database Integration**: Move from static files to database
2. **Authentication**: User accounts and progress tracking
3. **API Layer**: RESTful or GraphQL API
4. **Caching**: Redis for performance
5. **Search**: Full-text search implementation
6. **Analytics**: User behavior tracking
7. **Internationalization**: Multi-language support
