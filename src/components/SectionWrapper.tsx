import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}
