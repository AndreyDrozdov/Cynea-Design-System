import { Card } from "../ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "../ui/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  color?: "primary" | "accent" | "sage" | "orchid";
  className?: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  color = "primary",
  className
}: StatCardProps) {
  const colorClasses = {
    primary: "bg-[#075D44] text-[#E6E8EC]",
    accent: "bg-[#D0F17A] text-[#075D44]",
    sage: "bg-[#71A888] text-[#E6E8EC]",
    orchid: "bg-[#FFC5EE] text-[#075D44]"
  };

  const iconBgClasses = {
    primary: "bg-[#E6E8EC]/30",
    accent: "bg-[#075D44]/30",
    sage: "bg-[#E6E8EC]/30",
    orchid: "bg-[#075D44]/30"
  };

  return (
    <Card className={cn(
      "p-6 flex flex-col min-h-[140px] rounded-3xl",
      colorClasses[color],
      className
    )}>
      {Icon && (
        <div className={cn("inline-flex p-2 rounded-3xl self-start mb-2", iconBgClasses[color])}>
          <Icon className="w-5 h-5" />
        </div>
      )}
      <p className="text-4xl tracking-tight font-['Dela_Gothic_One']">{value}</p>
      <p className="text-sm opacity-90 font-['Plus_Jakarta_Sans'] mt-2">{label}</p>

      {trend && (
        <div className="pt-2">
          <p className="text-sm opacity-75 font-['Plus_Jakarta_Sans']">
            <span className="font-semibold">{trend.value > 0 ? '+' : ''}{trend.value}%</span>
            {' '}{trend.label}
          </p>
        </div>
      )}
    </Card>
  );
}