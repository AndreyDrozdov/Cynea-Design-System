import { useEffect, useState } from "react";
import { Card } from "../ui/card";

interface IntelligenceUnitProps {
  isVisible?: boolean;
}

export function RescueStrategyCard({ isVisible = true }: IntelligenceUnitProps) {
  return (
    <Card className="p-5 space-y-4 rounded-[32px] border-none bg-[color-mix(in_oklab,#c0a7ef_15%,transparent)] h-full">
      <div className="space-y-0.5 border-b border-[#46014f]/10 pb-3 mb-5">
        <h4 className="text-xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#46014f]">
          Rescue Strategy
        </h4>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-bold font-['Plus_Jakarta_Sans']">
          Preservation & Mitigation Protocol
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight text-[#151515]">
          <strong className="font-bold">Protocol:</strong> In-situ Habitat Reinforcement (Zone 4)
        </p>
        <div className="space-y-2.5 pt-4">
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-70 font-bold">Threat Level:</span>
            <span className="font-bold text-[#46014f]">CRITICAL (87%)</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-70 font-bold">Time Window:</span>
            <span className="font-bold text-[#151515]">3-5 YEARS</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SystemAnalysisCard({ isVisible = true }: IntelligenceUnitProps) {
  return (
    <Card className="p-5 space-y-4 rounded-[32px] border-none bg-[#075d44]/10 h-full flex flex-col justify-between">
      <div className="space-y-0.5 border-b border-[#075d44]/15 pb-3 mb-5">
        <h4 className="text-xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#075D44]">
          System Analysis
        </h4>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-bold font-['Plus_Jakarta_Sans']">
          Real-time Risk Telemetry
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight text-[#151515]">
          <strong className="font-bold">Risk Factor:</strong> Anthropogenic Habitat Fragmentation
        </p>
        <div className="space-y-2.5 pt-4">
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-70 font-bold">Confidence:</span>
            <span className="font-bold text-[#075D44]">99.4% VERIFIED</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-70 font-bold">Risk verdict:</span>
            <span className="font-bold text-[#151515]">OPTIMIZED ALERT</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function GeneticRescueCard({ isVisible = true }: IntelligenceUnitProps) {
  return (
    <Card className="p-6 space-y-4 rounded-[32px] border-none bg-[#c0a7ef]/15 h-full">
      <div className="space-y-0.5 border-b border-[#151515]/10 pb-3 mb-5">
        <h4 className="text-xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#46014f]">
          Genetic Rescue via Outcrossing
        </h4>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-bold font-['Plus_Jakarta_Sans']">
          Advanced Mitigation Strategy
        </p>
      </div>
      <div className="space-y-5">
        <p className="text-sm font-['Plus_Jakarta_Sans'] leading-relaxed text-[#151515]">
          <strong className="font-bold">Maximum recovery strategy:</strong> Outbreed with related Camellia population at Kew Gardens
        </p>
        <div className="space-y-3 pt-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground/70 font-['Plus_Jakarta_Sans']">Expected Alleles Gain:</span>
            <span className="font-bold text-[#46014f]">+23 alleles</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground/70 font-['Plus_Jakarta_Sans']">Diversity Recovery:</span>
            <span className="font-bold text-[#151515]">42 &rarr; 72 (+71%)</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground/70 font-['Plus_Jakarta_Sans']">Complexity:</span>
            <span className="font-bold text-[#151515]">3-institution coordination</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground/70 font-['Plus_Jakarta_Sans']">Timeline:</span>
            <span className="font-bold text-[#151515]">5-year multi-generation program</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
