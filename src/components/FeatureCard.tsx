import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6 hover:bg-white hover:border-[#7B1C1C] transition-colors">
      <div className="w-10 h-10 rounded-lg bg-[#7B1C1C]/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#7B1C1C]" />
      </div>
      <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2">{title}</h3>
      <p className="text-base text-[#6B7280]">{description}</p>
    </div>
  );
}
