import ratingStars from "@/assets/social-proof-stars.png";

export function SocialProofRibbon() {
  return (
    <section className="border-y border-mges-gold/10 bg-background">
      <div className="container-prose py-6 md:py-7">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:flex-nowrap">
          <div className="flex items-center gap-3 shrink-0">
            <img
              src={ratingStars}
              alt="Summit rating stars"
              width={180}
              height={32}
              loading="lazy"
              className="h-[1.8rem] w-auto md:h-[2.45rem]"
            />
            <span className="font-display text-2xl font-bold leading-none text-foreground md:text-4xl">
              4.90
            </span>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left min-w-0">
            <span className="font-display font-semibold leading-tight text-accent text-xl md:text-2xl md:whitespace-nowrap">
              Highest Rated Economic Summit in the Region
            </span>
            <p className="mt-1 text-xs leading-snug text-foreground/90 md:text-base">
              Based on January 2026 Summit evaluation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}