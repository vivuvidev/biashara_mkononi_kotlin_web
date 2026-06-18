import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-muted hover:bg-card transition-colors py-0 ring-0 border border-border hover:border-foreground">
      <CardContent className="p-6">
        <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
