import { useEffect, useState } from "react";
import { Card } from "../ui/card";

interface IntelligenceUnitProps {
  isVisible?: boolean;
}

export function RescueStrategyCard({ isVisible = true }: IntelligenceUnitProps) {
  return (
    <Card className="p-5 space-y-4 rounded-[32px] border-none bg-[#b091eb]/15 h-full">
      <h4 className="text-base font-medium font-['Dela_Gothic_One'] tracking-tight text-[#46014f]">
        Rescue Strategy
      </h4>
      <div className="space-y-4">
        <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight text-[#151515]">
          <strong className="font-bold">Outbreed:</strong> Kew Gardens Related Population
        </p>
        <div className="space-y-2.5 pt-4">
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-60 font-medium">Target Gain:</span>
            <span className="font-bold text-[#075D44]">+23 AI-ALLELES</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-60 font-medium">Est. Recovery:</span>
            <span className="font-bold text-[#151515]">71%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SystemAnalysisCard({ isVisible = true }: IntelligenceUnitProps) {
  return (
    <Card className="p-5 space-y-4 rounded-[32px] border-none bg-[#075d44]/10 h-full flex flex-col justify-between">
      <h4 className="text-base font-medium font-['Dela_Gothic_One'] tracking-tight text-[#075D44]">
        System Analysis
      </h4>
      <div className="space-y-4">
        <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight text-[#151515]">
          <strong className="font-bold">Deep Ancestry:</strong> Predictive Verification (v2.1)
        </p>
        <div className="space-y-2.5 pt-4">
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-60 font-medium">Confidence:</span>
            <span className="font-bold text-[#075D44]">99.4% ACCURACY</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="uppercase tracking-widest text-muted-foreground opacity-60 font-medium">Status:</span>
            <span className="font-bold text-[#151515]">OPTIMIZED</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
