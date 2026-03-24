import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ExtinctionRiskIndicator, 
  GeneticHealthCard, 
  SpeciesCard,
  BreedingRecommendationCard,
  PoachingIncidentCard,
  StatCard 
} from "./dendrogene";
import { 
  Leaf, Database, AlertTriangle, TrendingUp, 
  Users, CheckCircle2, Settings, Search 
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

export function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Cyanea Design System</span>
          </div>
          <h1 className="text-5xl font-bold">Component Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive design system for AI-powered plant conservation software
          </p>
        </div>

        {/* Color Palette */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Brand Colors</h2>
            <p className="text-muted-foreground">Core color palette extracted from branding guidelines</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Deep Forest", color: "#075D44", text: "white" },
              { name: "Fresh Meadow", color: "#D0F17A", text: "#075D44" },
              { name: "Wild Orchid", color: "#b091eb", text: "#1A1A1A" },
              { name: "Soft Mist", color: "#E6E8EC", text: "#1A1A1A" },
              { name: "Forest Sage", color: "#71A888", text: "white" },
              { name: "Onyx", color: "#1A1A1A", text: "white" }
            ].map((item) => (
              <Card key={item.name} className="overflow-hidden">
                <div 
                  className="h-24 flex items-center justify-center"
                  style={{ backgroundColor: item.color, color: item.text }}
                >
                  <span className="font-semibold text-sm">{item.color}</span>
                </div>
                <div className="p-3 text-center">
                  <p className="font-semibold text-sm">{item.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Base Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Base Components</h2>
            <p className="text-muted-foreground">Foundational UI elements</p>
          </div>

          <Tabs defaultValue="buttons">
            <TabsList>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive Button</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Buttons with Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Search className="mr-2 w-4 h-4" />
                    Search Species
                  </Button>
                  <Button variant="outline">
                    <Settings className="mr-2 w-4 h-4" />
                    Settings
                  </Button>
                  <Button className="bg-primary">
                    <Leaf className="mr-2 w-4 h-4" />
                    Add Species
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="inputs" className="space-y-4">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Text Input</label>
                  <Input placeholder="Enter species name..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Input</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Select</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select conservation status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="endangered">Endangered</SelectItem>
                      <SelectItem value="at-risk">At Risk</SelectItem>
                      <SelectItem value="stable">Stable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Textarea</label>
                  <Textarea placeholder="Enter observation notes..." rows={4} />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">Accept terms</label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch id="notifications" />
                    <label htmlFor="notifications" className="text-sm">Enable notifications</label>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="badges" className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Status Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#d4183d] text-white">CRITICAL</Badge>
                  <Badge className="bg-[#ff8c42] text-white">ENDANGERED</Badge>
                  <Badge className="bg-[#ffd24c] text-[#1A1A1A]">AT RISK</Badge>
                  <Badge className="bg-[#4caf50] text-white">RECOVERED</Badge>
                  <Badge className="bg-[#71A888] text-white">INTERCEPTED</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Badge Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="cards" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Simple Card</h3>
                  <p className="text-muted-foreground text-sm">
                    This is a basic card component with padding and border radius.
                  </p>
                </Card>

                <Card className="p-6 bg-primary text-white">
                  <h3 className="font-semibold mb-2">Colored Card</h3>
                  <p className="text-white/80 text-sm">
                    Cards can have custom background colors and styling.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="font-semibold mb-2">Interactive Card</h3>
                  <p className="text-muted-foreground text-sm">
                    This card has hover effects for interactivity.
                  </p>
                </Card>

                <Card className="p-0 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-primary to-secondary" />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">Media Card</h3>
                    <p className="text-muted-foreground text-sm">
                      Cards can include images or gradient backgrounds.
                    </p>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* Conservation-Specific Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Conservation Components</h2>
            <p className="text-muted-foreground">
              Specialized components for plant conservation and genetic analysis
            </p>
          </div>

          <div className="space-y-6">
            {/* Extinction Risk Indicators */}
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold">Extinction Risk Indicators</h3>
              <div className="flex flex-wrap gap-4">
                <ExtinctionRiskIndicator risk={87} timeline="3-5 years" />
                <ExtinctionRiskIndicator risk={62} timeline="10-15 years" />
                <ExtinctionRiskIndicator risk={45} timeline="25-30 years" />
                <ExtinctionRiskIndicator risk={18} timeline="50+ years" />
              </div>
            </Card>

            {/* Stat Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <StatCard
                label="Total Species"
                value="847"
                icon={Database}
                color="primary"
              />
              <StatCard
                label="Critical Cases"
                value="32"
                icon={AlertTriangle}
                color="accent"
                trend={{ value: 12, label: "from last month" }}
              />
              <StatCard
                label="Breeding Programs"
                value="312"
                icon={TrendingUp}
                color="sage"
              />
              <StatCard
                label="Network Size"
                value="76"
                icon={Users}
                color="orchid"
              />
            </div>

            {/* Genetic Health Card */}
            <div className="grid md:grid-cols-2 gap-6">
              <GeneticHealthCard
                diversityScore={42}
                inbreedingCoefficient={32}
                alleleCount={14}
                historicalAlleleCount={47}
              />

              <GeneticHealthCard
                diversityScore={78}
                inbreedingCoefficient={12}
                alleleCount={38}
                historicalAlleleCount={41}
              />
            </div>

            {/* Species Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <SpeciesCard
                commonName="Middlemist Red Camellia"
                scientificName="Camellia middlemistii"
                extinctionRisk={87}
                timeline="3-5 years"
                wildPopulation="2 known plants"
                recommendation="Initiate genetic rescue breeding program immediately"
                status="critical"
              />

              <SpeciesCard
                commonName="Rothschild's Slipper Orchid"
                scientificName="Paphiopedilum rothschildianum"
                extinctionRisk={62}
                timeline="10-15 years"
                wildPopulation="<50 plants"
                recommendation="Establish anti-poaching patrols and increase habitat protection"
                status="endangered"
              />
            </div>

            {/* Breeding Recommendation Cards */}
            <div className="grid md:grid-cols-2 gap-4">
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

              <BreedingRecommendationCard
                specimen1="Specimen #12"
                specimen2="Specimen #31"
                institution1="Royal Botanic Gardens, Kew"
                institution2="Missouri Botanical Garden"
                allelesGain={15}
                diversityImprovement={{ from: 42, to: 54, percentage: 29 }}
                inbreedingReduction={{ from: 32, to: 26 }}
                successProbability={89}
                timeline="3-year breeding program"
              />
            </div>

            {/* Poaching Incident Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <PoachingIncidentCard
                location="Thailand/Laos Border"
                species="Paphiopedilum rothschildianum"
                specimenCount={127}
                detectionMethod="Satellite + Dark Web"
                status="alert"
                date="March 21, 2026"
              />

              <PoachingIncidentCard
                location="Madagascar"
                species="Pachypodium (rare variant)"
                specimenCount={89}
                detectionMethod="Nursery Network AI"
                status="recovered"
                date="March 22, 2026"
              />

              <PoachingIncidentCard
                location="Peru (Amazon)"
                species="Medicinal plant variant"
                specimenCount={203}
                detectionMethod="GPS Camera + Rangers"
                status="in-progress"
                date="March 20, 2026"
              />
            </div>

            {/* Progress Indicators */}
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold">Progress Indicators</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Genetic Recovery</span>
                    <span className="text-sm font-semibold">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Population Growth</span>
                    <span className="text-sm font-semibold">62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Network Coverage</span>
                    <span className="text-sm font-semibold">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Typography */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Typography</h2>
            <p className="text-muted-foreground">Text styles and hierarchy</p>
          </div>

          <Card className="p-6 space-y-4">
            <div>
              <h1 className="mb-2">Heading 1</h1>
              <p className="text-sm text-muted-foreground">Used for main page titles</p>
            </div>
            <div>
              <h2 className="mb-2">Heading 2</h2>
              <p className="text-sm text-muted-foreground">Used for section titles</p>
            </div>
            <div>
              <h3 className="mb-2">Heading 3</h3>
              <p className="text-sm text-muted-foreground">Used for subsection titles</p>
            </div>
            <div>
              <h4 className="mb-2">Heading 4</h4>
              <p className="text-sm text-muted-foreground">Used for card titles</p>
            </div>
            <div>
              <p className="mb-2">
                Body text - This is the standard paragraph text used throughout the application. 
                It's designed for optimal readability with appropriate line height and spacing.
              </p>
              <p className="text-sm text-muted-foreground">
                Muted text - Used for secondary information and descriptions.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}