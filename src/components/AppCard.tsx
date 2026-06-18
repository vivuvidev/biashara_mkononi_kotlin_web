import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MotionLink = motion.create(Link);

interface AppCardProps {
  name: string;
  tagline: string;
  description: string;
  icon?: ReactNode;
  iconSrc?: string;
  href?: string;
  playStoreUrl?: string;
  badge?: string;
}

export default function AppCard({
  name,
  tagline,
  description,
  icon,
  iconSrc,
  href,
  playStoreUrl,
  badge,
}: AppCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverAnimation = prefersReducedMotion ? undefined : { y: -4, scale: 1.025 };

  const cardContent = (
    <>
      {/* Icon + name header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 flex-none rounded-2xl bg-foreground/5 border border-border/40 flex items-center justify-center overflow-hidden">
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt={`${name} icon`}
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          ) : icon ? (
            <div className="flex items-center justify-center w-8 h-8">{icon}</div>
          ) : (
            <span className="text-2xl font-bold text-foreground/30 select-none">
              {name[0]}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground leading-tight">{name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{tagline}</p>
        </div>
        {badge && (
          <Badge variant="outline" className="flex-none rounded-full h-auto px-3 py-1 text-muted-foreground">
            {badge}
          </Badge>
        )}
      </div>

      <p className="text-base text-muted-foreground flex-1">{description}</p>

      {playStoreUrl && !href && (
        <Button asChild className="mt-6 w-full h-auto py-3 px-6">
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
            Get on Play Store
          </a>
        </Button>
      )}
    </>
  );

  if (href) {
    return (
      <MotionLink
        href={href}
        className="h-full bg-muted border border-border rounded-xl p-6 hover:bg-card hover:border-foreground transition-colors flex flex-col cursor-pointer"
        whileHover={hoverAnimation}
        transition={{ duration: 0.2, ease: "easeOut" as const }}
      >
        {cardContent}
      </MotionLink>
    );
  }

  return (
    <motion.div
      className="h-full bg-muted border border-border rounded-xl p-6 hover:bg-card hover:border-foreground transition-colors flex flex-col"
      whileHover={hoverAnimation}
      transition={{ duration: 0.2, ease: "easeOut" as const }}
    >
      {cardContent}
    </motion.div>
  );
}
