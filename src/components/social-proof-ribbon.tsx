import ratingStars from "@/assets/social-proof-stars.png";

export function SocialProofRibbon() {
  return (
    <section className="border-y border-mges-gold/10 bg-background">
      <div className="container-prose py-6 md:py-7">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="font-display text-3xl font-bold leading-none text-foreground md:text-4xl">
              4.90
            </span>
            <img
              src={ratingStars}
              alt="Summit rating stars"
              width={180}
              height={32}
              loading="lazy"
              className="h-[2.1rem] w-auto md:h-[2.45rem]"
            />
            <span className="max-w-xl font-display text-lg font-semibold leading-tight text-accent md:text-2xl">
              Highest Rated Economic Summit in the Region
            </span>
          </div>
          <p className="text-sm leading-none text-foreground/90 md:text-base">
            Based on January 2026 Summit evaluation
          </p>
        </div>
      </div>
    </section>
  );
}