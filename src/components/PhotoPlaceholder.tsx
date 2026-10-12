import { Image } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`${label} photo placeholder`} className={cn("photo-placeholder", className)}>
      <div className="photo-placeholder-mark"><Image size={24} strokeWidth={1} /><span>{label}</span></div>
    </div>
  );
}