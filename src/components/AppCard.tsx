import { ReactNode } from "react";

interface AppCardProps {
  name: string;
  tagline: string;
  description: string;
  icon?: ReactNode;
  playStoreUrl?: string;
  badge?: string;
}

export default function AppCard({
  name,
  tagline,
  description,
  icon,
  playStoreUrl,
  badge,
}: AppCardProps) {
  return (
    <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6 hover:bg-white hover:border-[#7B1C1C] transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-[#7B1C1C]/10 flex items-center justify-center">
            {icon}
          </div>
        )}
        {badge && (
          <span className="text-xs font-medium text-[#6B7280] border border-[#E5E7EB] rounded-full px-3 py-1">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-[#0D0D0D]">{name}</h3>
      <p className="text-sm text-[#7B1C1C] font-medium mt-1">{tagline}</p>
      <p className="text-base text-[#6B7280] mt-3 flex-1">{description}</p>

      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-[#7B1C1C] hover:bg-[#6B1A1A] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get on Play Store
        </a>
      )}
    </div>
  );
}
