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
}

export function PoachingIncidentCard({
  location,
  species,
  specimenCount,
  detectionMethod,
  status,
  date,
  className
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
    <Card className={cn("p-6 space-y-5 transition-all rounded-[32px] border-none bg-[#D0F17A]/30 shadow-none", className)}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-semibold font-['Dela_Gothic_One']">{location}</span>
        </div>
        <Badge className={cn("text-xs font-['Plus_Jakarta_Sans']", config.color)}>
          <StatusIcon className="w-3 h-3 mr-1" />
          {config.label}
        </Badge>
      </div>

      <div className="space-y-1">
        <p className="text-sm font-medium font-['Plus_Jakarta_Sans']">{species}</p>
        <p className="text-2xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{specimenCount} plants</p>
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground font-['Plus_Jakarta_Sans']">Detection:</span>
          <span className="font-medium font-['Plus_Jakarta_Sans']">{detectionMethod}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-['Plus_Jakarta_Sans']">Date:</span>
          <span className="font-medium font-['Plus_Jakarta_Sans']">{date}</span>
        </div>
      </div>
    </Card>
  );
}