import { Image, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({ label, className, icon: Icon = Image }: { label: string; className?: string; icon?: LucideIcon }) {
  return (
    <div role="img" aria-label={`${label} photo placeholder`} className={cn("photo-placeholder", className)}>
      <div className="photo-placeholder-mark"><Icon size={24} strokeWidth={1} /><span>{label}</span></div>
    </div>
  );
}