  # Design System Documentation

  ## Overview

  JeetLearnings uses a comprehensive design system built on Tailwind CSS that ensures consistency, accessibility, and responsiveness across all pages and components. This document outlines the design principles, component library, color scheme, typography, and responsive breakpoints.

  ## Design Principles

  1. **Clarity**: Information is presented clearly with proper hierarchy
  2. **Consistency**: Uniform design patterns across all pages
  3. **Accessibility**: WCAG AA compliance with proper contrast and keyboard navigation
  4. **Responsiveness**: Mobile-first approach with seamless scaling
  5. **Performance**: Optimized assets and minimal CSS overhead
  6. **User-Centric**: Intuitive navigation and clear call-to-actions

  ## Color Palette

  ### Primary Colors

  | Color | Hex Code | Usage | Tailwind Class |
  |-------|----------|-------|----------------|
  | Blue | #1E40AF | Primary actions, links | `bg-blue-900` |
  | Blue Light | #3B82F6 | Secondary actions, hover states | `bg-blue-500` |
  | Green | #166534 | Environment careers, success states | `bg-green-900` |
  | Green Light | #15803D | Environment careers hover | `bg-green-700` |

  ### Secondary Colors

  | Color | Hex Code | Usage | Tailwind Class |
  |-------|----------|-------|----------------|
  | Amber | #F59E0B | Highlights, warnings | `bg-amber-400` |
  | Emerald | #10B981 | Success messages | `bg-emerald-500` |
  | Red | #DC2626 | Errors, alerts | `bg-red-600` |
  | Gray | #6B7280 | Text, borders | `text-gray-500` |

  ### Neutral Colors

  | Color | Hex Code | Usage | Tailwind Class |
  |-------|----------|-------|----------------|
  | White | #FFFFFF | Backgrounds, text | `bg-white` |
  | Light Gray | #F3F4F6 | Section backgrounds | `bg-gray-100` |
  | Medium Gray | #E5E7EB | Borders, dividers | `border-gray-200` |
  | Dark Gray | #1F2937 | Text, headings | `text-gray-900` |

  ### Career Category Colors

  Each career category has a dedicated color scheme:

  ```typescript
  // Bio Science & Research
  BLUE = "#1E40AF"
  BLUE2 = "#3B82F6"

  // Environment
  GREEN = "#166534"
  GREEN2 = "#15803D"

  // Health Science
  PURPLE = "#7C3AED"
  PURPLE2 = "#A78BFA"

  // Arts & Design
  PINK = "#EC4899"
  PINK2 = "#F472B6"

  // Business & Management
  ORANGE = "#EA580C"
  ORANGE2 = "#FB923C"

  // Architecture & Construction
  SLATE = "#475569"
  SLATE2 = "#94A3B8"

  // Education
  INDIGO = "#4F46E5"
  INDIGO2 = "#818CF8"

  // Home Science
  ROSE = "#E11D48"
  ROSE2 = "#F43F5E"

  // Hospitality
  CYAN = "#0891B2"
  CYAN2 = "#06B6D4"

  // Public Safety & Security
  LIME = "#65A30D"
  LIME2 = "#84CC16"
  ```

  ## Typography

  ### Font Stack

  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  ```

  ### Heading Hierarchy

  | Level | Size | Weight | Line Height | Usage |
  |-------|------|--------|-------------|-------|
  | H1 | 2.25rem (36px) | 700 | 1.2 | Page titles, main headings |
  | H2 | 1.875rem (30px) | 700 | 1.3 | Section headings |
  | H3 | 1.5rem (24px) | 600 | 1.4 | Subsection headings |
  | H4 | 1.25rem (20px) | 600 | 1.5 | Card titles |
  | H5 | 1.125rem (18px) | 600 | 1.5 | Small headings |
  | H6 | 1rem (16px) | 600 | 1.6 | Labels, captions |

  ### Body Text

  | Type | Size | Weight | Line Height | Usage |
  |------|------|--------|-------------|-------|
  | Body Large | 1.125rem (18px) | 400 | 1.6 | Large body text |
  | Body Regular | 1rem (16px) | 400 | 1.6 | Standard body text |
  | Body Small | 0.875rem (14px) | 400 | 1.5 | Small text, captions |
  | Caption | 0.75rem (12px) | 400 | 1.4 | Metadata, timestamps |

  ### Responsive Typography

  Mobile-first approach with breakpoints:

  ```typescript
  // Headings scale down on mobile
  H1: "text-2xl sm:text-3xl md:text-4xl"
  H2: "text-xl sm:text-2xl md:text-3xl"
  H3: "text-lg sm:text-xl md:text-2xl"

  // Body text remains readable
  Body: "text-sm sm:text-base md:text-lg"
  ```

  ## Responsive Breakpoints

  | Breakpoint | Width | Usage |
  |-----------|-------|-------|
  | Mobile | < 640px | Small phones |
  | Small (sm) | 640px | Large phones, small tablets |
  | Medium (md) | 768px | Tablets |
  | Large (lg) | 1024px | Small laptops |
  | Extra Large (xl) | 1280px | Desktops |
  | 2XL | 1536px | Large monitors |

  ### Mobile-First Strategy

  All styles start with mobile defaults, then enhance with media queries:

  ```typescript
  // Mobile first
  className="w-full px-4 py-2"

  // Tablet and up
  className="w-full px-4 py-2 md:px-6 md:py-4"

  // Desktop and up
  className="w-full px-4 py-2 md:px-6 md:py-4 lg:px-8"
  ```

  ## Component Library

  ### Button Component

  ```typescript
  // Primary Button
  <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
    Action
  </button>

  // Secondary Button
  <button className="bg-gray-200 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
    Secondary
  </button>

  // Outline Button
  <button className="border-2 border-blue-900 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
    Outline
  </button>
  ```

  ### Card Component

  ```typescript
  // Standard Card
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
    {/* Content */}
  </div>

  // Colored Card
  <div className="bg-blue-50 border-l-4 border-blue-900 rounded-lg p-6">
    {/* Content */}
  </div>
  ```

  ### Badge Component

  ```typescript
  // Career Badge
  <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
    Career Badge
  </span>

  // Category Badge
  <span className="inline-block bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm">
    Category
  </span>
  ```

  ### Input Component

  ```typescript
  // Text Input
  <input
    type="text"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
    placeholder="Enter text"
  />

  // Textarea
  <textarea
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
    rows={4}
    placeholder="Enter message"
  />
  ```

  ### Section Layout

  ```typescript
  // Standard Section
  <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Content */}
    </div>
  </section>

  // Full-Width Section
  <section className="w-full py-12 md:py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Content */}
    </div>
  </section>
  ```

  ## Spacing System

  Consistent spacing using Tailwind's spacing scale:

  | Scale | Pixels | Usage |
  |-------|--------|-------|
  | xs | 4px | Tight spacing |
  | sm | 8px | Small gaps |
  | md | 16px | Standard gaps |
  | lg | 24px | Large gaps |
  | xl | 32px | Extra large gaps |
  | 2xl | 48px | Section spacing |
  | 3xl | 64px | Major section spacing |

  ### Padding & Margin Patterns

  ```typescript
  // Tight spacing
  p-2 m-2

  // Standard spacing
  p-4 m-4

  // Generous spacing
  p-6 m-6

  // Section spacing
  py-12 px-4

  // Responsive spacing
  px-4 md:px-6 lg:px-8
  py-8 md:py-12 lg:py-16
  ```

  ## Shadow & Elevation

  | Level | Tailwind Class | Usage |
  |-------|----------------|-------|
  | None | `shadow-none` | Flat design |
  | Small | `shadow-sm` | Subtle elevation |
  | Medium | `shadow-md` | Standard cards |
  | Large | `shadow-lg` | Prominent cards |
  | Extra Large | `shadow-xl` | Modals, overlays |

  ## Border Radius

  | Size | Pixels | Tailwind Class | Usage |
  |------|--------|----------------|-------|
  | Small | 4px | `rounded-sm` | Subtle corners |
  | Medium | 8px | `rounded` | Standard elements |
  | Large | 12px | `rounded-lg` | Cards, buttons |
  | Extra Large | 16px | `rounded-xl` | Large components |
  | Full | 9999px | `rounded-full` | Badges, avatars |

  ## Transitions & Animations

  ### Standard Transitions

  ```typescript
  // Smooth color transition
  transition-colors duration-300

  // Smooth all properties
  transition duration-300

  // Smooth transform
  transition-transform duration-300

  // Custom timing
  transition-all duration-500 ease-in-out
  ```

  ### Hover States

  ```typescript
  // Button hover
  hover:bg-blue-800 hover:shadow-lg transition

  // Link hover
  hover:text-blue-900 hover:underline

  // Card hover
  hover:shadow-lg hover:scale-105 transition
  ```

  ## Icons

  ### Icon System

  - **Library**: Lucide React
  - **Size**: 24px (default), scalable
  - **Color**: Inherits from parent text color
  - **Usage**: Via `DynamicIcon` component

  ```typescript
  // Icon usage
  <DynamicIcon name="Heart" className="w-6 h-6 text-blue-900" />

  // Common icons
  - Heart: Favorites
  - Star: Ratings
  - Briefcase: Jobs
  - MapPin: Locations
  - DollarSign: Costs
  - BookOpen: Education
  - Users: Team
  - TrendingUp: Growth
  ```

  ## Forms & Inputs

  ### Form Layout

  ```typescript
  // Form group
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-900 mb-2">
      Label
    </label>
    <input
      type="text"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
    />
  </div>
  ```

  ### Validation States

  ```typescript
  // Success
  <input className="border-2 border-green-500 focus:ring-green-500" />

  // Error
  <input className="border-2 border-red-500 focus:ring-red-500" />
  <p className="text-red-600 text-sm mt-1">Error message</p>

  // Disabled
  <input className="bg-gray-100 text-gray-500 cursor-not-allowed" disabled />
  ```

  ## Modals & Overlays

  ### Modal Structure

  ```typescript
  // Modal overlay
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    {/* Modal content */}
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
      {/* Content */}
    </div>
  </div>
  ```

  ## Accessibility Guidelines

  ### Color Contrast

  - **Normal Text**: Minimum 4.5:1 contrast ratio
  - **Large Text**: Minimum 3:1 contrast ratio
  - **UI Components**: Minimum 3:1 contrast ratio

  ### Keyboard Navigation

  - All interactive elements are keyboard accessible
  - Tab order follows visual flow
  - Focus states are clearly visible
  - Escape key closes modals

  ### ARIA Labels

  ```typescript
  // Button with aria-label
  <button aria-label="Close menu" onClick={closeMenu}>
    ✕
  </button>

  // Icon-only button
  <button aria-label="Add to favorites">
    <Heart className="w-6 h-6" />
  </button>

  // Form labels
  <label htmlFor="email">Email</label>
  <input id="email" type="email" />
  ```

  ## Dark Mode Considerations

  While currently light-mode only, the design system supports future dark mode implementation:

  ```typescript
  // Dark mode ready
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    {/* Content */}
  </div>
  ```

  ## Component Variants

  ### Career Guide Sections

  Each section in the 16-section guide has:
  - **Icon**: Lucide icon representing the section
  - **Color**: Category-specific color
  - **Title**: Section heading
  - **Content**: Expandable/collapsible content

  ### Cost Breakdown Cards

  Each cost category displays:
  - **Icon**: Emoji or Lucide icon
  - **Category**: Cost type (e.g., "Government Institutions")
  - **Amount**: Cost range
  - **Description**: Brief explanation
  - **Details**: Expandable detailed breakdown

  ### Why Cards

  Four compelling reason cards with:
  - **Icon**: Lucide icon
  - **Title**: Reason title
  - **Description**: 1-2 sentence explanation
  - **Color**: Category-specific color

  ## Design Tokens

  ### CSS Variables (in globals.css)

  ```css
  :root {
    --color-primary: #1E40AF;
    --color-primary-light: #3B82F6;
    --color-secondary: #166534;
    --color-secondary-light: #15803D;
    --color-accent: #F59E0B;
    --color-success: #10B981;
    --color-error: #DC2626;
    --color-text: #1F2937;
    --color-text-light: #6B7280;
    --color-bg: #FFFFFF;
    --color-bg-light: #F3F4F6;
    --color-border: #E5E7EB;
    
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  ```

  ## Responsive Design Patterns

  ### Container Queries

  ```typescript
  // Responsive container
  <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Content scales with container */}
  </div>
  ```

  ### Grid Layouts

  ```typescript
  // Responsive grid
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Items stack on mobile, 2 columns on tablet, 3 on desktop */}
  </div>
  ```

  ### Flexbox Layouts

  ```typescript
  // Responsive flex
  <div className="flex flex-col md:flex-row gap-4">
    {/* Stack on mobile, side-by-side on desktop */}
  </div>
  ```

  ## Performance Considerations

  ### CSS Optimization

  - Tailwind CSS purges unused styles in production
  - Critical CSS is inlined for faster first paint
  - CSS is minified and gzipped

  ### Image Optimization

  - Next.js Image component for automatic optimization
  - Responsive image sizes
  - WebP format support
  - Lazy loading by default

  ## Future Design Enhancements

  1. **Dark Mode**: Full dark mode support
  2. **Animation Library**: Framer Motion integration
  3. **Component Library**: Storybook documentation
  4. **Design Tokens**: Figma integration
  5. **Theming**: Dynamic theme switching
  6. **Micro-interactions**: Enhanced user feedback
  7. **Motion Design**: Smooth page transitions

