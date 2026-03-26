"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Navigation } from "../components/landing/Navigation";
import { Footer } from "../components/landing/Footer";
import { 
  Leaf, 
  Palette, 
  Type, 
  Box, 
  BarChart3, 
  Info, 
  ArrowRight,
  Maximize2,
  Move,
  Plus,
  FileText,
  Settings,
  Zap,
  ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SectionTitle = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-[#D0F17A] rounded-lg">
        <Icon className="w-5 h-5 text-[#075D44]" />
      </div>
      <h2 className="text-3xl font-['Dela_Gothic_One'] tracking-tight">{title}</h2>
    </div>
    <p className="text-muted-foreground max-w-2xl font-['Plus_Jakarta_Sans']">{subtitle}</p>
  </div>
);

const ColorSwatch = ({ name, color, hex, description, shades }: { name: string, color: string, hex: string, description: string, shades: { label: string, hex: string }[] }) => (
  <div className="group space-y-4">
    <div className="space-y-3">
      <div 
        className="h-32 rounded-3xl transition-transform group-hover:scale-[1.02] duration-300 shadow-sm border border-black/5 relative overflow-hidden" 
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-70" />
      </div>
      
      <div className="space-y-1.5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Tonal Palette</p>
        {shades.map((shade, i) => (
          <div key={i} className="flex items-center gap-3 group/shade">
            <div 
              className="w-12 h-6 rounded-md border border-black/5 shadow-sm transition-transform group-hover/shade:scale-105" 
              style={{ backgroundColor: shade.hex }}
            />
            <div className="flex justify-between items-center flex-1 text-[10px] font-mono">
              <span className="text-muted-foreground uppercase">{shade.label}</span>
              <span className="font-bold opacity-0 group-hover/shade:opacity-100 transition-opacity">{shade.hex}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="pt-2 border-t border-black/5">
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-sm uppercase tracking-wider font-['Plus_Jakarta_Sans']">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{hex}</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed italic">{description}</p>
    </div>
  </div>
);

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#151515]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-black/5">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn}>
            <Badge className="bg-[#D0F17A] text-[#075D44] hover:bg-[#D0F17A]/90 mb-4 px-4 py-1 rounded-full font-bold">
              v1.0.0
            </Badge>
            <h1 className="text-6xl md:text-8xl xl:text-[100px] font-['Dela_Gothic_One'] tracking-tighter text-[#075D44] mb-6 whitespace-nowrap">
              Design System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl font-['Plus_Jakarta_Sans'] leading-relaxed">
              A comprehensive guide to the Cynea editorial botanical aesthetic. 
              Engineered for high-precision conservation interfaces and immersive brand storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 space-y-32">
        {/* Foundations: Colors */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          id="colors"
        >
          <SectionTitle 
            title="Color Palette" 
            subtitle="Our colors are inspired by lush forest canopies, luminous botanical glow, and deep architectural shadows."
            icon={Palette}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ColorSwatch 
              name="Forest Canopy" 
              color="#075D44" 
              hex="#075D44" 
              description="Primary brand color. Used for headers, main UI surfaces, and high-impact CTAs."
              shades={[
                { label: "100", hex: "#E6EFEC" },
                { label: "200", hex: "#B5CDC6" },
                { label: "300", hex: "#85AB9F" },
                { label: "400", hex: "#427E6A" },
                { label: "500", hex: "#075D44" },
                { label: "600", hex: "#06503B" },
                { label: "700", hex: "#054130" },
              ]}
            />
            <ColorSwatch 
              name="Luminous Lime" 
              color="#D0F17A" 
              hex="#D0F17A" 
              description="Secondary accent. Representing life and growth. Used for interactions, success states, and badges."
              shades={[
                { label: "100", hex: "#F6FDE5" },
                { label: "200", hex: "#EBFBBD" },
                { label: "300", hex: "#DBF48F" },
                { label: "400", hex: "#C6EA58" },
                { label: "500", hex: "#D0F17A" },
                { label: "600", hex: "#B8D76D" },
                { label: "700", hex: "#9DB65D" },
              ]}
            />
            <ColorSwatch 
              name="Digital Lavender" 
              color="#c0a7ef" 
              hex="#c0a7ef" 
              description="Tertiary color. Used for soft backgrounds, decorative elements, and alternative accents."
              shades={[
                { label: "100", hex: "#F2EDFD" },
                { label: "200", hex: "#E1D6F9" },
                { label: "300", hex: "#CDBBF4" },
                { label: "400", hex: "#B59DEB" },
                { label: "500", hex: "#c0a7ef" },
                { label: "600", hex: "#A892D1" },
                { label: "700", hex: "#8F7CAE" },
              ]}
            />
            <ColorSwatch 
              name="Midnight Obsidian" 
              color="#151515" 
              hex="#151515" 
              description="Main foreground color. Providing strong contrast for text and high-precision iconography."
              shades={[
                { label: "100", hex: "#F8F8F8" },
                { label: "200", hex: "#EBEBEB" },
                { label: "300", hex: "#D6D6D6" },
                { label: "400", hex: "#8C8C8C" },
                { label: "500", hex: "#444444" },
                { label: "600", hex: "#2A2A2A" },
                { label: "700", hex: "#151515" },
              ]}
            />
          </div>
        </motion.section>

        {/* Foundation: Typography */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          id="typography"
        >
          <SectionTitle 
            title="Typography" 
            subtitle="The pairing of a geometric Japanese display font with a modern sans-serif creates an editorial, future-forward feel."
            icon={Type}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
              <CardHeader className="bg-[#075D44] p-8">
                <CardTitle className="font-['Dela_Gothic_One'] text-2xl text-[#D0F17A]">Dela Gothic One</CardTitle>
                <CardDescription className="text-[#cfedcc]/70">Headings & Hero Elements</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2 border-b pb-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">H1 Display / 96px</p>
                  <h1 className="text-6xl font-['Dela_Gothic_One'] tracking-tight leading-none text-[#075D44]">Aetheria</h1>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">H2 Heading / 48px</p>
                  <h2 className="text-3xl font-['Dela_Gothic_One'] tracking-tight text-[#075D44]">Protecting Species.</h2>
                </div>
                <div className="pt-4 p-4 bg-[#F8F9FA] rounded-2xl">
                  <p className="text-sm font-['Plus_Jakarta_Sans'] italic text-muted-foreground">
                    "Use for major titles and emphasizing brand identity. Avoid for long body text."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
              <CardHeader className="bg-[#D0F17A] text-[#075D44] p-8">
                <CardTitle className="font-['Plus_Jakarta_Sans'] font-bold text-2xl">Plus Jakarta Sans</CardTitle>
                <CardDescription className="text-[#075D44]/70">Body, Interface & Labels</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2 border-b pb-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Body Large / 18px</p>
                  <p className="text-lg font-['Plus_Jakarta_Sans'] leading-relaxed text-[#151515]">
                    Advanced AI-powered systems designed to identify botanical threats and restore biodiversity through robotic intervention.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-12 text-xs font-bold text-muted-foreground">BOLD</span>
                    <span className="font-bold font-['Plus_Jakarta_Sans']">The future of conservation.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-12 text-xs font-bold text-muted-foreground">MEDIUM</span>
                    <span className="font-medium font-['Plus_Jakarta_Sans']">Detailed data visualization labels.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="rounded-[2rem] border border-black/5 shadow-sm bg-white p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-[#075D44]">Numeric Precision</h3>
                  <p className="text-sm text-muted-foreground">We use <strong>Space Grotesk</strong> for all numerical data, telemetry, and coordinates to ensure maximum legibility and a technical aesthetic.</p>
                </div>
                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold font-['Space_Grotesk'] text-[#075D44]">98.4%</p>
                    <p className="text-[10px] items-center gap-4 uppercase tracking-tighter font-bold opacity-70">Precision</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold font-['Space_Grotesk'] text-[#075D44]">12:43:08</p>
                    <p className="text-[10px] items-center gap-4 uppercase tracking-tighter font-bold opacity-70">Timestamp</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Color Accessibility Rules */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          id="accessibility"
        >
          <SectionTitle 
            title="Color Interaction & Pairing" 
            subtitle="Strict accessibility standards for background-to-text interactions to maintain brand consistency and technical legibility."
            icon={Info}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { 
                bg: "bg-[#D0F17A]", 
                text: "text-[#075D44]", 
                title: "text-[#075D44]",
                display: "Forest Canopy text",
                name: "Luminous Lime", 
                rule: "Requires Forest Canopy for all technical data and major headings." 
              },
              { 
                bg: "bg-[#075D44]", 
                text: "text-[#cfedcc]", 
                title: "text-[#cfedcc]",
                display: "Mint Frost (#cfedcc)",
                name: "Forest Canopy", 
                rule: "Use Luminous Lime for headlines; Mint Frost (#cfedcc) for primary body text." 
              },
              { 
                bg: "bg-[#151515]", 
                text: "text-[#D0F17A]/70", 
                title: "text-[#D0F17A]",
                display: "Luminous Lime Accent",
                name: "Midnight", 
                rule: "Optimized for Luminous Lime display headers; White secondary text." 
              },
              { 
                bg: "bg-[#c0a7ef]", 
                text: "text-[#46014f]/70", 
                title: "text-[#46014f]",
                display: "Obsidian Violet (#46014f)",
                name: "Digital Lavender", 
                rule: "Requires Obsidian Violet (#46014f) or Midnight for maximum content layering." 
              },
              { 
                bg: "bg-[#E6E8EC]", 
                text: "text-[#46014f]/70", 
                title: "text-[#46014f]",
                display: "Obsidian Violet (#46014f)",
                name: "Mist Grey", 
                rule: "Pairs Mist Grey with Obsidian Violet for high-end neutral interfaces." 
              }
            ].map((rule, idx) => (
              <div key={idx} className={`${rule.bg} ${rule.text} rounded-[2rem] p-8 border border-black/5 shadow-sm space-y-4 flex flex-col justify-between`}>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Contrast Rule {idx + 1}</p>
                  <div className="space-y-2">
                    <h3 className={`text-xl font-['Dela_Gothic_One'] ${rule.title}`}>{rule.name}</h3>
                    <p className="text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">{rule.rule}</p>
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-2 border-t border-black/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{rule.display}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Layout & Grid: Bento Systems */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          id="layout"
        >
          <SectionTitle 
            title="Bento Grid Architecture" 
            subtitle="Complex, responsive grids designed for high-density data environments and cinematic botanical storytelling."
            icon={Maximize2}
          />
          <div className="grid grid-cols-12 gap-6 md:gap-8">
             {/* Box 1: UI Forms (Primary) */}
             <div className="col-span-12 md:col-span-4 bg-[#D0F17A] rounded-[2.5rem] p-10 min-h-[400px] flex flex-col justify-between group overflow-hidden relative border border-black/5 shadow-sm">
                <div className="relative z-10">
                   <h3 className="text-3xl font-['Dela_Gothic_One'] text-[#075D44] mb-4">Add Specimen</h3>
                   <div className="space-y-4">
                      <Input 
                        placeholder="Specimen Name..." 
                        className="bg-white/50 border-white/20 h-12 rounded-2xl placeholder:text-[#075D44]/50 text-[#075D44] focus:bg-white transition-colors"
                      />
                      <div className="flex gap-2">
                        <Badge className="bg-[#075D44]/10 text-[#075D44] border-none px-4 py-2 hover:bg-[#075D44]/20 cursor-pointer rounded-full shadow-none">Seed</Badge>
                        <Badge className="bg-[#075D44]/10 text-[#075D44] border-none px-4 py-2 hover:bg-[#075D44]/20 cursor-pointer rounded-full shadow-none">Sapling</Badge>
                      </div>
                   </div>
                </div>
                <Button className="w-full h-14 bg-[#075D44] hover:bg-[#075D44]/90 text-white rounded-full font-bold group/btn relative overflow-hidden">
                   <span className="relative z-10 flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Register Species
                   </span>
                </Button>
             </div>

             {/* Box 2: Image Hero Card (Secondary) */}
             <div className="col-span-12 md:col-span-4 rounded-[2.5rem] overflow-hidden min-h-[400px] relative group border border-black/5 shadow-sm">
                <img src="https://images.unsplash.com/photo-1560369073-233ebcda63a1?q=80&w=1635&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                   <Leaf className="w-3 h-3 text-[#D0F17A]" />
                   <span className="text-[10px] font-bold text-white uppercase tracking-widest">Crimson Fernelia</span>
                </div>
             </div>

             {/* Box 3: Tab Systems (Accent) */}
             <div className="col-span-12 md:col-span-4 bg-[#c0a7ef] rounded-[2.5rem] p-10 min-h-[400px] flex flex-col justify-between border border-black/5 shadow-sm group">
                <div>
                   <h3 className="text-3xl font-['Dela_Gothic_One'] text-[#46014f] mb-6">Database</h3>
                   <div className="bg-[#46014f]/10 p-1 rounded-2xl flex gap-1">
                      <div className="flex-1 bg-white rounded-xl py-2 px-3 text-center text-[10px] font-bold text-[#46014f] shadow-sm">Global</div>
                      <div className="flex-1 rounded-xl py-2 px-3 text-center text-[10px] font-bold text-[#46014f]/40">Local</div>
                      <div className="flex-1 rounded-xl py-2 px-3 text-center text-[10px] font-bold text-[#46014f]/40">Archives</div>
                   </div>
                </div>
                <div className="space-y-3">
                   {[1, 2].map((i) => (
                      <div key={i} className="bg-white/40 p-4 rounded-2xl flex items-center justify-between border border-white/20 group-hover:translate-x-1 transition-transform cursor-pointer">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#46014f]/10 flex items-center justify-center">
                               <FileText className="w-4 h-4 text-[#46014f]/60" />
                            </div>
                            <span className="text-sm font-bold text-[#46014f]">Dataset_{i}04.iso</span>
                         </div>
                         <ArrowRight className="w-4 h-4 text-[#46014f]/30" />
                      </div>
                   ))}
                </div>
             </div>

             {/* Box 4: Action Grid (Medium) */}
             <div className="col-span-12 md:col-span-8 bg-[#075D44] rounded-[2.5rem] p-10 min-h-[300px] flex items-center justify-between overflow-hidden relative group border border-black/5 shadow-sm">
                <div className="relative z-10 max-w-sm w-full space-y-8">
                   <div className="space-y-2">
                      <h3 className="text-4xl font-['Dela_Gothic_One'] text-[#D0F17A]">Control Hub</h3>
                      <p className="text-[#cfedcc]/70 font-['Plus_Jakarta_Sans'] text-sm">Manage autonomous drones and growth cycles from the main terminal.</p>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-14 bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full">
                         <Settings className="w-4 h-4 mr-2" />
                         Settings
                      </Button>
                      <Button variant="outline" className="h-14 bg-white/10 border-white/20 hover:bg-white/20 text-[#D0F17A] rounded-full border-[#D0F17A]/30">
                         <Zap className="w-4 h-4 mr-2" />
                         Optimize
                      </Button>
                   </div>
                </div>
                {/* Visual interface elements */}
                <div className="hidden lg:flex gap-4 relative z-10">
                   <div className="w-32 aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 group-hover:rotate-6 transition-transform">
                      <div className="w-3 h-3 rounded-full bg-[#D0F17A] animate-pulse" />
                      <span className="text-[10px] font-bold opacity-70">AUTO</span>
                   </div>
                   <div className="w-32 aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 group-hover:-rotate-3 transition-transform">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <span className="text-[10px] font-bold opacity-70">MANUAL</span>
                   </div>
                </div>
             </div>

             {/* Box 5: Status Control (Small) */}
             <div className="col-span-12 md:col-span-4 bg-[#151515] text-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-[#ffffff]/5 shadow-sm group">
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-['Dela_Gothic_One'] line-clamp-1">System State</h3>
                      <div className="w-10 h-6 bg-[#075D44] rounded-full relative p-1 cursor-pointer">
                         <div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                         <span className="text-xs font-bold text-white/50">Mission Critical</span>
                         <span className="text-xs font-mono text-[#D0F17A]">ACTIVE</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                         <span className="text-xs font-bold text-white/50">Drone Network</span>
                         <span className="text-xs font-mono text-white/20">OFFLINE</span>
                      </div>
                   </div>
                </div>
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D0F17A]/70">Security Level 4</span>
                    <ShieldCheck className="w-4 h-4 text-[#D0F17A]" />
                 </div>
             </div>
          </div>
          
          <div className="mt-12 bg-white rounded-[2rem] border border-black/5 p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
             <div className="flex-1 space-y-2">
                <h4 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-[#075D44]">Core Grid Rules</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                   Use a 12-column grid system with 2rem (32px) gaps. Each card MUST have 2.5rem (40px) corner radius to maintain the organic editorial aesthetic.
                </p>
             </div>
             <div className="flex gap-4">
                <Badge variant="outline" className="px-4 py-1.5 border-black/10">12-Col Grid</Badge>
                <Badge variant="outline" className="px-4 py-1.5 border-black/10">40px Radius</Badge>
                <Badge variant="outline" className="px-4 py-1.5 border-black/10">2rem Gap</Badge>
             </div>
          </div>
        </motion.section>

        {/* Foundation: Logo Usage */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          id="logo"
        >
          <SectionTitle 
            title="Logo Architecture" 
            subtitle="Guidelines for maintaining the integrity and visibility of the Cynea brand mark across various surfaces."
            icon={Maximize2}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-[2rem] border-none shadow-sm bg-white overflow-hidden col-span-2">
              <CardContent className="p-12 flex flex-col items-center justify-center min-h-[400px] border-b">
                <div className="relative">
                  {/* Safe margins indicator */}
                  <div className="absolute -inset-10 border border-dashed border-[#075D44]/20 rounded-xl flex items-center justify-center">
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold text-[#075D44]/40 tracking-widest">Safe Area (x)</span>
                  </div>
                  <img src="/cyanea_logo.svg" alt="Cynea Logo" className="h-16 w-auto relative z-10" />
                </div>
              </CardContent>
              <div className="bg-[#F8F9FA] p-8 grid grid-cols-2 gap-8 text-sm">
                <div className="space-y-2">
                  <p className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Move className="w-3 h-3" /> Minimum Clear Space
                  </p>
                  <p className="text-muted-foreground">
                    Always maintain a clear space equal to the height of the 'C' character around the logo.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Maximize2 className="w-3 h-3" /> Size Requirements
                  </p>
                  <p className="text-muted-foreground">
                    Digital: 32px height minimum. <br />
                    Print: 10mm height minimum.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-8">
              <div className="p-8 bg-[#075D44] rounded-[2rem] flex items-center justify-center h-1/2">
                <img src="/cyanea_logo.svg" alt="Cynea Logo White" className="h-10 w-auto invert brightness-0 underline" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="p-8 bg-white border border-black/5 rounded-[2rem] flex items-center justify-center h-1/2">
                <img src="/cyanea_logo.svg" alt="Cynea Logo Dark" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* UI Components */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          id="components"
        >
          <SectionTitle 
            title="Core Components" 
            subtitle="Interactive building blocks engineered for consistent user interaction and brand expression."
            icon={Box}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Buttons */}
            <Card className="rounded-[2rem] border-none shadow-sm bg-white p-8">
              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] mb-6 flex items-center gap-2">
                Buttons <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="space-y-2 text-center">
                  <Button className="bg-[#075D44] hover:bg-[#075D44]/90 rounded-full px-8">Primary</Button>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Default</p>
                </div>
                <div className="space-y-2 text-center">
                  <Button variant="secondary" className="bg-[#D0F17A] text-[#075D44] hover:bg-[#D0F17A]/80 rounded-full px-8 border-none">Secondary</Button>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Interaction</p>
                </div>
                <div className="space-y-2 text-center">
                  <Button variant="outline" className="rounded-full border-black/10 px-8">Outline</Button>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Subtle</p>
                </div>
                <div className="space-y-2 text-center">
                  <Button variant="ghost" className="text-[#075D44] hover:bg-[#D0F17A]/20 rounded-full px-8">Ghost</Button>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Nav / Meta</p>
                </div>
              </div>
            </Card>

            {/* Badges / Status */}
            <Card className="rounded-[2rem] border-none shadow-sm bg-white p-8">
              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] mb-6 flex items-center gap-2">
                Status Tags <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge className="bg-[#d4183d] rounded-full px-4">Critical Risk</Badge>
                <Badge className="bg-[#ff8c42] rounded-full px-4 text-white">Endangered</Badge>
                <Badge className="bg-[#ffd24c] text-black rounded-full px-4">At Risk</Badge>
                <Badge className="bg-[#4caf50] rounded-full px-4">Recovered</Badge>
                <Badge className="bg-[#075D44] rounded-full px-4">System Active</Badge>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Tags should use vibrant but controlled colors to indicate environmental status or system health. 
                Full rounded (Pill) shape is mandatory.
              </p>
            </Card>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
