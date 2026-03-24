import { AlertTriangle } from "lucide-react";
import { cn } from "../ui/utils";

interface ExtinctionRiskIndicatorProps {
  risk: number; // 0-100
  timeline?: string;
  className?: string;
}

export function ExtinctionRiskIndicator({ 
  risk, 
  timeline, 
  className 
}: ExtinctionRiskIndicatorProps) {
  const getRiskColor = (risk: number) => {
    if (risk >= 70) return "bg-[#b091eb]/30 text-[#151515]";
    if (risk >= 50) return "bg-[#D0F17A]/30 text-[#075D44]";
    if (risk >= 30) return "bg-[#075D44]/30 text-[#075D44]";
    return "bg-[#075D44]/30 text-[#075D44]";
  };

  const getRiskLevel = (risk: number) => {
    if (risk >= 70) return "CRITICAL";
    if (risk >= 50) return "ENDANGERED";
    if (risk >= 30) return "AT RISK";
    return "STABLE";
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <div className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-3xl transition-all",
        getRiskColor(risk)
      )}>
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span className="font-semibold font-['Dela_Gothic_One']">{risk}%</span>
        <span className="text-xs opacity-90 font-['Plus_Jakarta_Sans'] whitespace-nowrap">{getRiskLevel(risk)}</span>
      </div>
      {timeline && (
        <span className="text-sm text-muted-foreground font-['Plus_Jakarta_Sans']">{timeline}</span>
      )}
    </div>
  );
}