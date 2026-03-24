You are designing a comprehensive design system and interactive landing page for "Cyanea," 
an AI-powered plant conservation software platform.

## BRAND & SERVICE OVERVIEW

Service: AI-powered rare plant extinction prevention software
Target Users: Botanical gardens, conservation researchers, seed bank managers, 
  wildlife organizations, university biology programs, environmental NGOs
Core Value: Software that prevents plant extinction through AI-powered risk prediction, 
  breeding optimization, poaching detection, and global conservation coordination

Specific Problem Being Solved:
  - 40% of plant species are at risk of extinction
  - Genetic diversity is permanently lost due to poor mating decisions in breeding programs
  - Poaching of rare plants is a multi-billion dollar illegal trade with no detection system
  - Climate change is rapidly shifting where plants can survive
  - Botanical institutions work in silos - no coordinated breeding efforts
  - Seed banks have limited capacity and can't prioritize which species to preserve
  - By the time extinction risk is identified, it's often too late genetically

Business Impact:
  - 571 plant species have gone extinct in last 250 years
  - Each species saved = entire gene pools + ecosystem services preserved
  - Cyanea reduces conservation costs by 60-70% through optimized coordination
  - Enables institutions to save 3-5x more species with same budget

Goals for Users:
  - Identify critically endangered species 2-3 years before extinction becomes inevitable
  - Increase genetic diversity in breeding programs by 40-60%
  - Detect poaching incidents within days, not years
  - Coordinate breeding across 50+ institutions simultaneously
  - Make data-driven decisions on conservation priorities

## LANDING PAGE STRUCTURE

### 1. HERO SECTION
- Full-width background image (Unsplash rare plant or rainforest)
- Dark overlay with white text overlay
- Headline: "Protecting Rare Plants, Restoring Biodiversity"
- Subheadline: Describes what Cyanea does

### 2. MISSION SECTION
- Light background
- Text-based section explaining Cyanea's purpose and approach
- Emphasizes scientific credibility and real-world impact

### 3. THREE CORE SERVICES SECTION
- Three feature cards, each describing one main function:
  1. Species Rescue - Risk prediction and early detection
  2. Genetic Optimization - Breeding program coordination
  3. Poaching Prevention - Global monitoring and law enforcement coordination
- Cards are clickable/interactive, highlight on hover
- Each card has icon and description text

### 4. EMBEDDED SOFTWARE DEMOS SECTION
Three fully automated, browser-based interactive demos that run WITHOUT user input.
Each demo shows the actual software platform in action.

## DEMO 1: SPECIES RISK DASHBOARD & ALERT SYSTEM

### What It Does:
This demo shows Cyanea's real-time extinction risk monitoring system. It displays 
a dashboard that automatically evaluates 847 plant species in the global conservation 
network and identifies which ones are in critical danger. The system continuously runs 
AI analysis in the background and surfaces the most urgent species requiring immediate 
intervention.

### Processes Running (Automated):
1. Data Ingestion: System pulls latest population census data from 76 participating 
   botanical institutions (updated monthly)
2. Risk Calculation: AI algorithm analyzes:
   - Current wild population size vs. historical baseline
   - Population trend (growing, stable, declining)
   - Genetic diversity metrics (how genetically unique the species is)
   - Habitat suitability under current and projected climate scenarios
   - Poaching pressure and illegal trade activity
   - Breeding program success rate (if one exists)
3. Extinction Timeline Prediction: Machine learning model predicts:
   - Probability of extinction within 5, 10, 20 years
   - Critical intervention window (how many years until intervention is too late)
   - Expected timeline to genetic collapse if no action taken
4. Prioritization Ranking: Sorts all species by urgency using a weighted algorithm:
   - Species extinction probability × Time remaining × Genetic recovery potential
   - Species with highest "urgency score" appear first
5. Recommendation Engine: For each critical species, AI generates specific 
   conservation recommendations:
   - If genetic diversity low: "Initiate genetic rescue breeding"
   - If wild population declining: "Increase habitat protection"
   - If poaching detected: "Establish anti-poaching patrols"
   - If climate unsuitable soon: "Plan population relocation"

### UI Components & How They Work:

Main Dashboard View:
- Header: Shows date/time, network status, update frequency indicator
- Alert Banner: Critical alert statement updates dynamically
  * Auto-refreshes every 30-60 seconds showing updated species count
  * Background color pulses gently to draw attention
  * Contains real-time counter showing "X Species at Critical Risk"

Species Priority List:
- Displays 4-6 top critical species in card format, sorted by extinction urgency
- Each species card contains:
  * Species name (common + scientific name)
  * Status badge (color-coded: CRITICAL red / ENDANGERED orange / AT RISK yellow)
  * Extinction risk percentage (87%, 62%, 58%, etc.)
  * Timeline to extinction (e.g., "3-5 years", "10-15 years")
  * Wild population count (e.g., "2 known plants", "<50 plants", "~500 declining")
  * Primary AI recommendation (text summary)
  * Action buttons ("View Full Analysis" | "Request Collaboration")
  
- Cards are sortable - list can auto-scroll through top 10 species over time
- Each card displays a visual "urgency indicator" (how urgent this species is)
  * Could be a progress bar, color intensity, or animated pulse

Side Panel (Right side):
- Quick statistics that auto-update:
  * "Total Species at Risk: 847" (number could increment if new species assessed)
  * "Critical Priority Cases: 4" (auto-counts how many species are in critical status)
  * "Active Breeding Programs: 312" (connected to how many species have interventions)
  * "Network Institutions: 76" (shows active participants)
  * "Last Network Update: [time]" (updates every time data refreshes)

Bottom Section:
- "Network Activity" log showing recent events:
  * "Singapore Botanic - Camellia breeding pairs selected (2 hours ago)"
  * "Kew Gardens - Seed viability test completed (5 hours ago)"
  * "Peru Reserve - Population census updated (8 hours ago)"
  * Events flow upward as new ones appear (simulating real activity)

Data Refresh Cycle:
- Dashboard auto-refreshes every 30-60 seconds
- When refresh happens: Cards briefly highlight/flash to show new data arrived
- Species rankings may shift if extinction risk changes
- New incidents (like poaching detection) may appear in top list

Interactive Elements (No User Input Required):
- Hover over species cards → shows expanded details tooltip
- Species cards expand slightly to show more detail
- Buttons appear but don't require clicking to demonstrate functionality
- If user hovers over "View Full Analysis" button, it hints at what would open

### Data Being Displayed:
- Middlemist Red Camellia: 87% extinction risk, 3-5 years, 2 plants known
- Paphiopedilum rothschildianum: 62% risk, 10-15 years, <50 plants
- Rafflesia arnoldii: 58% risk, 15-20 years, ~500 plants declining
- Orchid sp. (variant): 45% risk, 25-30 years, 2,000+ plants

---

## DEMO 2: GENETIC DIVERSITY RECOVERY OPTIMIZER

### What It Does:
This demo shows how Cyanea's AI analyzes a species' genetic health and recommends 
specific breeding pairs that will maximize genetic diversity recovery. It takes one 
critically endangered species (Middlemist Red Camellia) and shows the genetic analysis 
in real-time, then displays the AI's recommended breeding strategy to pull the species 
back from genetic collapse.

### Processes Running (Automated):
1. Genetic Sequencing Data Import: System loads genetic profiles of all 
   available specimens of the species from connected institutions
2. Diversity Assessment: AI calculates:
   - Number of unique alleles (gene variants) present vs. historical baseline
   - Allele frequency distribution (are some genes overrepresented?)
   - Inbreeding coefficient (how genetically related are individuals?)
   - Effective population size (how many "genetically unique" individuals exist?)
   - Heterozygosity levels (genetic variation measure)
3. Genetic Bottleneck Detection: Algorithm identifies:
   - Which genes were lost during extinction risk period
   - Which genes are present in only 1-2 individuals (fragile)
   - Which alleles could be recovered through specific crosses
4. Breeding Optimization: AI simulates thousands of potential breeding combinations:
   - For each possible pairing, calculates expected offspring genetics
   - Predicts how many alleles would be recovered in F1, F2, F3 generations
   - Identifies which crosses maximize genetic gain vs. minimize inbreeding
   - Ranks crosses by: genetic benefit + feasibility + timeline + success probability
5. Multi-Institution Strategy: Identifies specimens at OTHER institutions that 
   would provide maximum genetic benefit if brought into breeding program:
   - Coordinates with other botanical gardens
   - Plans transport and quarantine procedures
   - Creates multi-year breeding roadmap

### UI Components & How They Work:

Left Panel: Current Genetic Status (Auto-Updating Analysis)
- Heading: "Current Population Genetics Analysis"
- Displays baseline metrics that appear to be calculated in real-time:
  * Allele Count: Shows current as red/critical (e.g., "14 unique alleles")
    - Below it shows historical count (e.g., "47 alleles historically")
    - Visual comparison bar showing how much was lost
    - Percentage loss indicator
  * Genetic Diversity Score: Large number (e.g., "42/100") with color coding
    - Appears as a metric card or gauge
    - Shows trend arrow indicating trajectory
  * Inbreeding Coefficient: Percentage (e.g., "32% - HIGH")
    - Shows what it was historically (2%) for comparison
  * Effective Population Size: "4 genetically unique plants"
    - This is the functional extinction number
    - Visual indicator showing how small this is
  * Status indicator: "GENETIC COLLAPSE RISK" banner

Right Panel: AI Breeding Recommendations (Auto-Generated)
- Heading: "Recommended Breeding Pairs for Genetic Rescue"
- Displays 2-3 top recommended breeding combinations that auto-appear
- Each recommendation card shows:
  * Cross combination: "Specimen #47 × Specimen #19"
    - Shows small thumbnail/icon for each specimen
    - Shows which institution has each specimen
  * Predicted genetic benefit: "+18 alleles"
    - This is the calculation showing improvement
  * Diversity improvement: "42 → 58 (38% gain)"
    - Before/after metrics
  * Inbreeding reduction: "32% → 24%"
    - Shows improvement trajectory
  * Success probability: "94% viable offspring"
  * Timeline: "3-year breeding program"
  * Action button: "Schedule Cross" or "View Pedigree"

Advanced Section: Multi-Institution Strategy
- Heading: "Genetic Rescue via Outcrossing"
- Shows recommended strategy that involves bringing in genetics from other institutions:
  * "Outbreed with related population at Kew Gardens"
  * Specimen from Kew: Shows genetic compatibility
  * Expected benefit: "+23 alleles (maximum recovery)"
  * Complexity: "Requires 3-institution coordination"
  * Timeline: "5-year multi-generation program"
  * Status: "Collaboration request ready to send"

Bottom Section: Recovery Timeline (Auto-Drawn Graph)
- Heading: "Projected Genetic Recovery Timeline"
- Shows visual timeline or simple chart:
  * Year 0: Current state (Diversity Score = 42, red indicator)
  * Year 2: After first breeding generation (Diversity = 52, orange)
  * Year 4: Diversity Score = 65 (SAFE ZONE THRESHOLD reached, green)
  * Year 6: Diversity Score = 80
  * Year 10: Diversity Score = 92 (full recovery, green)
  * Timeline line shows milestones with dates
  * Crosses out critical risk zone, enters recovery zone

Data Animation:
- When demo loads, metrics appear to "calculate" - numbers count up from 0
- Alleles count up: "0... 5... 10... 14"
- Diversity score animates: "0... 15... 32... 42"
- Inbreeding coefficient fills as percentage bar
- Recommendations appear one by one, with slight stagger delay
- Timeline graph draws itself left to right

Interactive Elements (No Input Required):
- Hover over specimen pairs → shows genetic relationship visualization
- Hover over recommendation cards → expanded details appear
- Timeline chart responds to hover showing exact values at each year
- Pedigree tree icons hint at what would expand if clicked
- Cross buttons appear ready but don't require interaction

---

## DEMO 3: GLOBAL POACHING DETECTION & PREVENTION MAP

### What It Does:
This demo displays Cyanea's real-time poaching detection network, which monitors 
illegal harvesting of endangered plants globally. The system automatically processes 
satellite imagery, illegal marketplace monitoring, ranger reports, and DNA barcode 
detection data to identify poaching incidents within days. It shows where poaching 
is happening, what species are affected, and what recovery actions are underway.

### Processes Running (Automated):
1. Satellite Monitoring: System continuously scans satellite imagery of known 
   endangered plant habitats looking for:
   - Vegetation disturbance patterns (fresh harvesting sites)
   - Unusual activity in protected areas
   - Habitat degradation trends
2. Marketplace AI Monitoring: Algorithms crawl illegal plant sales networks:
   - Dark web marketplaces
   - Social media plant-trading forums
   - International courier tracking
   - Customs databases
   - DNA barcode matching on seized plants
3. Ranger & Authority Reports: System aggregates field reports from:
   - Protected area rangers
   - Local conservation teams
   - Law enforcement agencies
   - Customs officials
   - Tipsters from public hotline
4. Incident Detection: Machine learning correlates all data sources:
   - Matches trafficking photos to species using image recognition
   - Cross-references seller networks to identify trafficking rings
   - Predicts next smuggling routes and target species
   - Identifies high-value species likely to be targeted next
5. Recovery Coordination: For detected incidents:
   - Alerts local law enforcement and customs
   - Coordinates plant recovery and quarantine
   - Propagates seized plants in botanical gardens
   - Tracks which plants enter black market vs. recover
   - Documents evidence for prosecutions

### UI Components & How They Work:

Interactive World Map (Center):
- Base map shows all countries/regions
- Regions color-coded by poaching risk level:
  * Green = Low risk / No recent activity
  * Yellow = Moderate risk / Occasional incidents
  * Orange = High risk / Frequent incidents
  * Red = Critical / Active trafficking hubs

Current Month Incident Markers (Auto-Appearing):
- Animated markers appear on the map showing current incidents
- Each marker shows incident location with icon and number
- Markers pulse or animate to draw attention to new incidents

INCIDENT 1: Southeast Asia (Thailand/Laos border)
- Red marker with "127" shown (number of plants)
- Species: Slipper Orchid (Paphiopedilum rothschildianum)
- Specimens detected: 127 plants
- Detection method: "Satellite + Dark Web Market Monitoring"
- Status: "Alert Sent - Authorities Notified (March 18, 2026)"
- Severity badge: CRITICAL
- Action: Incident details auto-display in sidebar
- Timeline: Incident detected on March 18, marked as "2 days ago"

INCIDENT 2: Madagascar
- Red marker with "89"
- Species: Pachypodium (rare variant)
- Specimens: 89 plants
- Detection method: "Illegal Nursery Network AI Detection"
- Status: "CITES Coordination In Progress"
- Date: "March 22, 2026" (shows as "2 hours ago" - very recent)

INCIDENT 3: Peru (Amazon)
- Red marker with "203"
- Species: Medicinal plant variant
- Specimens: 203 plants
- Detection method: "GPS Camera Network + Ranger Ground Reports"
- Status: "Recovery Team Dispatched"
- Date: "March 20, 2026"

INCIDENT 4: Madagascar (second location)
- Orange marker (older incident) with "56"
- Species: Rare orchid variant
- Specimens: 56 plants
- Status: "Customs Intercept Successful - Plants Recovered"
- Date: "March 21, 2026"

Map Updates:
- New incident markers appear animated (fade in, pulse)
- Incidents update their status in real-time
- Markers may change color as status changes (red → orange → green when resolved)
- Timeline continuously updates showing "X days ago" changing to current timeline

Right Sidebar: Monthly Statistics Panel (Auto-Updating)
- Heading: "Global Poaching Report - March 2026"
- Statistics cards that auto-increment/update:
  * "Incidents Detected: 18" (number increments when new incidents appear)
  * "Plants Recovered: 847" (total count accumulates)
  * "Legal Actions Initiated: 12" (grows as prosecutions increase)
  * "Prevention Success Rate: 64%" (calculated as recovered vs. lost)
- Trend indicator showing if poaching is increasing/decreasing
- Small sparkline chart showing incident count by week

Highest Risk Species List (Auto-Sorted):
- Heading: "Most Targeted Species This Month"
- Ranked by number of incidents:
  1. Rare Orchid species - 412 plants detected
  2. Succulent species - 203 plants detected
  3. Medicinal plant species - 156 plants
  4. Cycad species - 76 plants
- List auto-sorts as new data arrives
- Each has small icon and status badge

Bottom Section: Recent Recoveries Timeline (Auto-Updating)
- Heading: "Successful Recoveries This Month"
- Timeline of successful plant rescues (newest first):
  * "March 22, 2pm: 89 Pachypodium plants recovered - Madagascar"
    - Status badge: RECOVERED (green)
    - Shows where plants are being replanted
  * "March 20, 11am: 203 medicinal plants rescued - Peru"
    - Status: QUARANTINE (yellow)
    - Shows rehabilitation timeline
  * "March 19, 4pm: 56 orchids intercepted - Madagascar"
    - Status: CUSTOMS RECOVERY (orange)
    - Shows auction process beginning
  * "March 18, 9am: 127 orchids seized - Thailand border"
    - Status: TRANSPORT (blue)
    - Shows journey to botanical garden
- Timeline events appear in chronological order, newest at top
- As time passes (demo runs), new events auto-append above
- Each event has location, species, count, status, and next action

Data Animation & Updates:
- When demo first loads, incidents appear one by one on the map
- Statistics count up: "0... 5... 12... 18"
- Plants count accumulates: "0... 200... 500... 847"
- Map colors shift as incidents are resolved
- Recovery timeline auto-adds new entries every 30-60 seconds
- Markers pulse gently when new incident detected
- Overall sense of live, real-time operation

Interactive Elements (No Input Required):
- Hover over map markers → shows expanded incident details in popup
- Hover over incident cards → shows species image and additional context
- Map zooms/highlights region when relevant incident appears
- Clicking would expand details, but demo doesn't require it
- Timeline items highlight on hover
- Statistics cards show mini trend charts on hover

### Data Being Displayed:
Current March 2026 data showing:
- 4-5 active incidents across continents
- Total 18 incidents for the month
- 847 plants recovered globally
- 12 legal actions/arrests
- 64% success rate
- Incidents in Southeast Asia, Madagascar, Peru
- Mix of detection methods (satellite, marketplace AI, ranger reports, customs)
- Mix of statuses (alert sent, CITES, recovery, intercepted, recovered)

---

## COMPONENT LIBRARY (Build ALL - Functionality Focus)

### 1. BASE COMPONENTS
- Buttons: Primary, secondary, ghost, danger variants with hover states
- Input fields: Text, email, search with icon support and validation states
- Textarea: With character counter and validation
- Checkbox and Radio buttons: Standard form controls
- Toggle switches: For feature toggles and settings
- Dropdown/Select: Single and multi-select with filtering
- Search bars: With autocomplete and filter suggestions
- Tags and Badges: Status indicators (CRITICAL, ENDANGERED, AT RISK, RECOVERED)
- Tooltips: Show additional context on hover
- Modal/Dialog: For expanded views and forms
- Alerts and Toast notifications: For user feedback
- Breadcrumbs: Navigation context
- Pagination: For data navigation
- Loading skeletons: Show during data fetch
- Data tables: Sortable, filterable, expandable rows

### 2. NAVIGATION & LAYOUT
- Top navigation bar: Logo, institution selector, user profile dropdown
- Sidebar navigation: Collapsible menu with sections (Dashboard, Species, Breeding, 
  Poaching, Seed Bank, Network)
- Tab navigation: Switch between dashboard views
- Breadcrumb navigation: Show current location in hierarchy
- Mobile bottom navigation: Touch-friendly navigation on smaller screens
- Footer: Links, contact, social media

### 3. CARD COMPONENTS
- Data cards: Display metric with icon and trend indicator
- Alert cards: Color-coded by severity for urgent information
- Species profile cards: Show species name, image, status, key metrics
- Recommendation cards: Display AI suggestions with action buttons
- Statistic cards: Show key numbers with comparison values
- Feature cards: Landing page components describing services
- Incident cards: Show poaching or conservation event details
- Institution cards: Display partner botanical gardens with metrics

### 4. DATA DISPLAY COMPONENTS
- Data tables: Multi-column layout with sorting, filtering, row selection
- List views: Species inventory, incident timeline, institution network
- Status indicators: Badges, color-coded progress, visual signals
- Progress bars: Linear and circular displays of completion
- Charts and graphs: For historical trends and projections
- Sparklines: Inline mini-charts in data cards
- Visual indicators: Color-coded severity, urgency, health levels

### 5. SPECIALIZED CONSERVATION COMPONENTS
- Extinction risk indicators: Numerical score (0-100) with color gradient and timeline
- Genetic health cards: Showing diversity score, inbreeding coefficient, allele count
- Population counters: Wild vs. captive population displays
- Breeding recommendation cards: Showing genetic benefit percentages and success rates
- Poaching alert cards: Incident details including location, species, count, status
- Seed bank status cards: Specimens stored, viability percentage, germination history
- Habitat suitability indicators: Current range vs. projected future range visualization
- Conservation priority badges: Which species need immediate attention
- Network status indicators: Number and status of participating institutions
- AI confidence scores: Percentage certainty for predictions (87% confidence, 92% confidence)
- Genetic pedigree trees: Simplified relationship visualization
- Recovery timeline charts: Project diversity recovery over years

### 6. ICONS (Lucide React - Required for ALL)
Use throughout component library:
- Navigation: Home, BarChart3, Settings, LogOut, Menu, ChevronDown, ChevronRight
- Plants: Leaf, Sprout, Trees, Flower2, Wind, Droplet, Sun
- Biology & Genetics: Dna, Heart, Shield, Eye, Target, Award, Activity
- Data & Charts: PieChart, BarChart2, LineChart, Database, Table2, GitBranch
- Actions: Plus, Edit, Trash2, Download, Upload, Share2, Copy, ExternalLink, Send
- Status & Alerts: CheckCircle2, AlertCircle, AlertTriangle, Info, Clock, Flag
- AI & Intelligence: Brain, Sparkles, Lightbulb, Wand2, Eye, Binoculars
- Organization: Building2, Users, User, MapPin, Briefcase, BookOpen, FileText

---

## REMAINING LANDING PAGE SECTIONS

### 5. SUCCESS METRICS SECTION
- Display global impact statistics
- Show species tracked, breeding programs active, institutions connected

### 6. FEATURES OVERVIEW
- Grid showing core capabilities (extinction prediction, genetic optimization, 
  poaching detection, seed banking, climate modeling, institutional coordination)

### 7. TESTIMONIALS
- Quotes from conservation leaders at botanical gardens and NGOs
- Show measurable impact achieved

### 8. CALL-TO-ACTION
- Primary CTA: "Request Platform Demo"
- Secondary CTA: "Learn More"
- Text: "Join the global conservation network"

### 9. FOOTER
- Mission statement
- Navigation links
- Contact information
- Social media links

---

## INTERACTIVE BEHAVIOR (Landing Page)

### Scroll Animations
- Sections fade/slide in as they come into view
- Numbers in statistics section count up when scrolled into view
- Demo sections appear to "load" when scrolled into viewport

### Demo Behavior (CRITICAL - No User Input)
DEMO 1 (Species Risk Dashboard):
- Loads with dashboard header and empty alert banner
- Alert count animates: "1 Species at Critical Risk" → "4 Species at Critical Risk"
- Species cards appear one by one with stagger effect
- Right panel statistics appear and numbers count up
- Every 30-60 seconds: Dashboard refreshes
  * Species rankings may shift
  * New activity appears in the network log
  * Icons pulse to show update occurred
- This continuous loop repeats for the entire time demo is visible

DEMO 2 (Genetic Optimizer):
- Loads with left panel showing baseline genetic data
- Numbers count up: Alleles "0 → 14", Diversity "0 → 42", Inbreeding "0 → 32%"
- Once baseline is set, recommendation cards appear on right panel
- Cards appear with slight delay between each
- Numbers in each card show benefit calculations
- Bottom timeline animates from left to right, drawing recovery trajectory
- Recovery score line animates upward from 42 toward 92
- Every 45-60 seconds: Recommendations may update or different crosses may appear
- The timeline may show updated projections
- Overall feeling is of continuous analysis happening

DEMO 3 (Poaching Map):
- Loads with base map visible
- First incident marker appears with animation (fade, pulse)
- Map automatically zooms/centers to that incident region
- Right sidebar statistics appear and count up
- Subsequent incident markers appear one by one across the globe
- Markers pulse when they appear (draw attention)
- Right sidebar updates: incident count increments, plants recovered count grows
- Bottom recovery timeline starts showing successful recovery events
- New recovery events auto-append to timeline every 20-30 seconds
- Older incidents may fade/change color as they're resolved
- Map may zoom to different regions as new incidents appear
- Continuous loop: system appears to be detecting new incidents in real-time

### Hover Interactions (No Required, Just Enhanced Display)
- Hover over demo cards: expanded information appears
- Hover over buttons: hint at what would happen if clicked
- Hover over chart elements: show exact values

### Overall Demo Philosophy
- All three demos show continuous, autonomous operation
- No user must interact with anything for demos to work
- Demos should feel like watching a live software system in action
- Data refreshes and updates suggest real-time processing
- Animations and transitions convey that the system is "thinking" and "analyzing"
- Users get sense that AI is working 24/7 to protect plants

---

## TECHNICAL ARCHITECTURE

### Demo Data Sources
- All demo data is pre-programmed and cycled through
- Data updates on a timer (no external APIs needed)
- Animations are CSS/JS-based transitions and transformations
- Charts use Recharts library for visualization

### Demo Components (React-Based)
DEMO 1 Components:
- Dashboard wrapper component
- Alert banner (updates state on interval)
- Species card list (maps over array, auto-sorts)
- Statistics panel (increments numbers on timer)
- Activity log (appends new items to array)
- Data refresh trigger (useEffect with setInterval)

DEMO 2 Components:
- Two-panel layout (left analysis, right recommendations)
- Genetic metrics display (animated number counters)
- Recommendation card list (staggered appearance)
- Recovery timeline chart (Recharts line chart with animation)
- Data state management (useState for current metrics, recommendations)

DEMO 3 Components:
- Map wrapper (Leaflet or Mapbox integration)
- Incident marker component (animated appearance, updateable status)
- Statistics panel (auto-increment on timer)
- Risk species list (sortable, updates)
- Recovery timeline (appends new items)
- Auto-positioning: map zooms to most urgent incident

### State Management
- Demo state lives in local React component state
- useEffect hooks trigger data updates on intervals
- setInterval and setInterval cleanup for continuous updates
- All animations driven by CSS transitions + React state changes

### No External Dependencies for Demo Data
- All data is hardcoded or generated within component
- No API calls required
- Demos work entirely client-side

---

## DELIVERABLES

- Complete design system component library (60+ components)
- Fully functional landing page with all sections
- Three embedded, autonomous, data-driven demo applications
  * Demo 1: Species Risk Dashboard
  * Demo 2: Genetic Diversity Optimizer
  * Demo 3: Global Poaching Detection Map
- Responsive design across all screen sizes
- Accessible components (ARIA labels, semantic HTML)
- Performance optimized (code splitting, lazy loading)
- SEO friendly