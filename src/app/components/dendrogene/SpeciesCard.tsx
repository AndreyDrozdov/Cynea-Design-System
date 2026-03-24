import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ExtinctionRiskIndicator } from "./ExtinctionRiskIndicator";
import { Badge } from "../ui/badge";
import { Leaf, Users } from "lucide-react";
import { cn } from "../ui/utils";

interface SpeciesCardProps {
  commonName: string;
  scientificName: string;
  extinctionRisk: number;
  timeline: string;
  wildPopulation: string;
  recommendation: string;
  status: "critical" | "endangered" | "at-risk" | "stable";
  className?: string;
  imageUrl?: string;
}

export function SpeciesCard({
  commonName,
  scientificName,
  extinctionRisk,
  timeline,
  wildPopulation,
  recommendation,
  status,
  className,
  imageUrl
}: SpeciesCardProps) {
  const statusColors = {
    critical: "bg-[#b091eb]/30 text-[#151515]",
    endangered: "bg-[#D0F17A]/30 text-[#075D44]",
    "at-risk": "bg-[#075D44]/30 text-[#075D44]",
    stable: "bg-[#075D44]/30 text-[#075D44]"
  };

  return (
    <Card className={cn(
      "overflow-hidden hover:shadow-lg transition-all duration-300",
      className
    )}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={commonName}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-5 space-y-4">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
          <div className="space-y-1 flex-1">
              <h3 className="text-lg font-['Dela_Gothic_One']">{commonName}</h3>
          </div>
        </div>

        <ExtinctionRiskIndicator risk={extinctionRisk} timeline={timeline} />

        <div className="flex items-center gap-2 text-sm font-['Plus_Jakarta_Sans']">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Wild Population:</span>
          <span className="font-semibold">{wildPopulation}</span>
        </div>

        <div className="bg-[#E6E8EC]/30 p-3 rounded-3xl">
          <p className="text-xs text-muted-foreground mb-1 font-['Plus_Jakarta_Sans']">AI RECOMMENDATION</p>
          <p className="text-sm font-['Plus_Jakarta_Sans']">{recommendation}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button variant="default" size="sm" className="flex-1 bg-[#075D44] hover:bg-[#075D44]/90 text-[#E6E8EC] rounded-3xl h-10 w-full sm:w-auto">
            View Full Analysis
          </Button>
          <Button size="sm" className="flex-1 rounded-3xl bg-[#E6E8EC] text-[#075D44] hover:bg-[#E6E8EC]/80 h-10 w-full sm:w-auto">
            Request Collaboration
          </Button>
        </div>
      </div>
    </Card>
  );
}