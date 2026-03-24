# Cyanea Design System Documentation

## Overview

Cyanea is an AI-powered plant conservation software platform. This design system provides a complete component library and landing page implementation.

## 🎨 Brand Colors

Colors extracted from branding guidelines:

- **Deep Forest** (#075D44) - Primary brand color, used for headers, CTAs
- **Fresh Meadow** (#D0F17A) - Accent color for highlights and success states
- **Wild Orchid** (#FFC5EE) - Secondary accent for diversity
- **Soft Mist** (#E6E8EC) - Background and subtle elements
- **Forest Sage** (#71A888) - Medium green for secondary elements
- **Onyx** (#1A1A1A) - Dark text and strong contrast

### Status Colors

- **Critical** (#d4183d) - Red for urgent/critical states
- **Endangered** (#ff8c42) - Orange for high-risk states
- **At Risk** (#ffd24c) - Yellow for moderate risk
- **Recovered** (#4caf50) - Green for success/recovery

## 📦 Component Library

### Base Components (from shadcn/ui)
- Buttons, Inputs, Cards, Badges, Tabs
- Select, Switch, Checkbox, Progress
- All fully styled with Cyanea brand colors

### Conservation-Specific Components

#### ExtinctionRiskIndicator
Displays extinction risk percentage with color-coded severity badges.

```tsx
<ExtinctionRiskIndicator 
  risk={87} 
  timeline="3-5 years" 
/>
```

#### GeneticHealthCard
Shows genetic diversity metrics including diversity score, inbreeding coefficient, and allele counts.

```tsx
<GeneticHealthCard
  diversityScore={42}
  inbreedingCoefficient={32}
  alleleCount={14}
  historicalAlleleCount={47}
/>
```

#### SpeciesCard
Complete species information card with status, population data, and AI recommendations.

```tsx
<SpeciesCard
  commonName="Middlemist Red Camellia"
  scientificName="Camellia middlemistii"
  extinctionRisk={87}
  timeline="3-5 years"
  wildPopulation="2 known plants"
  recommendation="Initiate genetic rescue breeding"
  status="critical"
/>
```

#### BreedingRecommendationCard
AI-generated breeding pair recommendations with genetic benefit calculations.

```tsx
<BreedingRecommendationCard
  specimen1="Specimen #47"
  specimen2="Specimen #19"
  institution1="Singapore Botanic Gardens"
  institution2="Sydney Royal Botanic Garden"
  allelesGain={18}
  diversityImprovement={{ from: 42, to: 58, percentage: 38 }}
  inbreedingReduction={{ from: 32, to: 24 }}
  successProbability={94}
  timeline="3-year breeding program"
/>
```

#### PoachingIncidentCard
Displays poaching incident details with status tracking.

```tsx
<PoachingIncidentCard
  location="Thailand/Laos Border"
  species="Paphiopedilum rothschildianum"
  specimenCount={127}
  detectionMethod="Satellite + Dark Web Monitoring"
  status="alert"
  date="March 21, 2026"
/>
```

#### StatCard
Colored statistical cards for key metrics.

```tsx
<StatCard
  label="Total Species"
  value="847"
  icon={Database}
  color="primary"
  trend={{ value: 12, label: "from last month" }}
/>
```

## 🎬 Interactive Demos

### Demo 1: Species Risk Dashboard
Real-time extinction risk monitoring system that:
- Auto-animates species cards appearing
- Updates critical count from 1 → 4
- Shows live network activity feed
- Refreshes statistics every 30-60 seconds
- Displays 4 priority species with detailed information

### Demo 2: Genetic Diversity Optimizer
Genetic analysis and breeding optimization that:
- Animates metrics counting up (diversity, inbreeding, alleles)
- Shows breeding pair recommendations with genetic benefits
- Displays recovery timeline chart with Recharts
- Illustrates multi-institution collaboration strategy
- Projects 10-year genetic recovery timeline

### Demo 3: Global Poaching Detection Map
Interactive global monitoring system that:
- Displays incidents on visual world map
- Animates markers appearing with pulse effects
- Shows incident details on hover/click
- Updates statistics (incidents, plants recovered, legal actions)
- Displays recovery timeline with status tracking
- Auto-updates every 20-30 seconds

## 🚀 Landing Page Sections

1. **Navigation** - Fixed header with mobile responsive menu
2. **Hero Section** - Full-width hero with background image, gradient overlay, and key stats
3. **Mission Section** - Three cards explaining approach (Early Detection, Scientific Rigor, Global Impact)
4. **Services Section** - Three core conservation services with hover effects
5. **Interactive Demos** - Tabbed interface showcasing all three demos
6. **Impact Section** - Statistics showing measurable conservation success
7. **Testimonials** - Quotes from conservation leaders at partner institutions
8. **CTA Section** - Call-to-action with bright gradient background
9. **Footer** - Complete footer with navigation, resources, and contact information

## 🎨 Design Principles

- **Bold Typography** - Large, impactful numbers for statistics
- **Card-Based Layout** - Organized information in digestible cards
- **Color-Coded Status** - Consistent color system for risk levels
- **Motion & Animation** - Smooth transitions using motion/react
- **Responsive Design** - Mobile-first approach with breakpoints
- **Accessible** - Semantic HTML and ARIA labels
- **Nature Photography** - Integrated wildlife imagery (via Unsplash)

## 📊 Key Features

- **Autonomous Demos** - All demos run continuously without user input
- **Real-time Simulation** - Data updates on timers to simulate live monitoring
- **Animated Counters** - Numbers count up to create engaging experience
- **Staggered Animations** - Elements appear sequentially for visual flow
- **Interactive Elements** - Hover states and transitions enhance UX
- **Gradient Backgrounds** - Branded gradients throughout

## 🛠 Technologies Used

- **React** - Component framework
- **Tailwind CSS v4** - Styling with custom Cyanea theme
- **Motion/React** - Animations and transitions
- **Recharts** - Data visualization for charts
- **Lucide React** - Icon library
- **shadcn/ui** - Base component library

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components and sections adapt to screen size.

## 🎯 Use Cases

This design system is optimized for:
- Botanical gardens and conservation institutions
- Seed bank management systems
- Wildlife conservation organizations
- University biology programs
- Environmental NGOs
- Global conservation coordination platforms

## 📖 Component Showcase

Visit `/ComponentShowcase` route to see all components with interactive examples and documentation.

## 🌿 Conservation Impact

The platform addresses:
- 40% of plant species at extinction risk
- 571 species lost in last 250 years
- Multi-billion dollar illegal plant trade
- Genetic diversity loss in breeding programs
- Climate change habitat shifts
- Siloed institutional conservation efforts

Through AI-powered:
- Extinction prediction 2-3 years in advance
- Genetic optimization (40-60% diversity gains)
- Real-time poaching detection
- Global institutional coordination
- 60-70% cost reduction in conservation efforts