import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-prose pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-display font-medium text-balance leading-[0.95]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
