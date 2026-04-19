import logo from "@/assets/mges-logo.png";
import { cn } from "@/lib/utils";

export function MgesLogo({ className, alt = "MGES — Model Global Economic Summit" }: { className?: string; alt?: string }) {
  return <img src={logo} alt={alt} className={cn("block h-auto w-auto select-none", className)} loading="eager" />;
}
