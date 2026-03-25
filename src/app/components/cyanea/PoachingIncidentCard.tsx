import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { cn } from "../ui/utils";

interface PoachingIncidentCardProps {
  location: string;
  species: string;
  specimenCount: number;
  detectionMethod: string;
  status: "alert" | "in-progress" | "recovered" | "intercepted";
  date: string;
  className?: string;
  headerTitle?: string;
  headerSubtitle?: string;
}

export function PoachingIncidentCard({
  location,
  species,
  specimenCount,
  detectionMethod,
  status,
  date,
  className,
  headerTitle,
  headerSubtitle
}: PoachingIncidentCardProps) {
  const statusConfig = {
    alert: {
      color: "bg-[#b091eb] text-[#151515]",
      icon: AlertCircle,
      label: "ALERT SENT"
    },
    "in-progress": {
      color: "bg-[#D0F17A] text-[#075D44]",
      icon: Clock,
      label: "IN PROGRESS"
    },
    recovered: {
      color: "bg-[#075D44] text-[#E6E8EC]",
      icon: CheckCircle2,
      label: "RECOVERED"
    },
    intercepted: {
      color: "bg-[#E6E8EC] text-[#151515]",
      icon: CheckCircle2,
      label: "INTERCEPTED"
    }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card className={cn("p-5 space-y-4 transition-all rounded-[32px] border-none bg-[#D0F17A]/30 shadow-none", className)}>
      {headerTitle && (
        <div className="space-y-0.5 border-b border-[#075D44]/10 pb-3 mb-1">
          <h3 className="text-xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#151515]">
            {headerTitle}
          </h3>
          {headerSubtitle && (
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold font-['Plus_Jakarta_Sans']">
              {headerSubtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="flex items-start justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#075D44]" />
            <span className="font-bold font-['Dela_Gothic_One'] text-sm tracking-tight">{location}</span>
          </div>
          
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-widest text-[#075D44] font-bold font-['Plus_Jakarta_Sans'] opacity-70">
              {species}
            </p>
            <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One'] leading-none">
              {specimenCount} <span className="text-xl">plants</span>
            </p>
          </div>
        </div>

        <Badge className={cn("text-[10px] font-bold px-2.5 py-0.5 rounded-full font-['Plus_Jakarta_Sans']", config.color)}>
          <StatusIcon className="w-3 h-3 mr-1" />
          {config.label}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#075D44]/5">
        <div className="space-y-0.5">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold font-['Plus_Jakarta_Sans'] opacity-50">Detection</span>
          <p className="text-[11px] font-semibold font-['Plus_Jakarta_Sans'] text-[#151515]">{detectionMethod}</p>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold font-['Plus_Jakarta_Sans'] opacity-50">Discovery Date</span>
          <p className="text-[11px] font-semibold font-['Plus_Jakarta_Sans'] text-[#151515]">{date}</p>
        </div>
      </div>
    </Card>
  );
}