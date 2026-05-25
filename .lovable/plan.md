## Plan: New background for the Bratislava section

Replace the existing `bratislava-panorama-home.png` background behind "Bratislava — at the heart of Central Europe" with a custom, AI-generated image of **Bratislava Castle at blue hour**, tuned to the navy + champagne palette so it integrates with the rest of the site.

### What I'll do

1. **Generate the image** (premium quality, 1920×768, JPG) and save it to `src/assets/bratislava-castle-blue-hour.jpg`.
   - Prompt direction: Bratislava Castle on the hill, floodlit white walls and four corner towers, deep navy blue-hour sky with a faint warm horizon glow, Danube river in the foreground catching reflections, distant Old Town lights, wide cinematic 21:9 framing, photorealistic, premium editorial photography, no text or logos.
   - The composition is right-weighted so the left side stays clean — the existing left-to-right navy gradient overlay continues to keep the headline readable.

2. **Wire it into `src/routes/index.tsx`** — swap the `bratislavaImg` import to the new file and update the `alt` text to "Bratislava Castle at blue hour above the Danube". No layout, gradient, or copy changes.

3. **Delete the old** `src/assets/bratislava-panorama-home.png` once the swap is in place, since it's only used in that one spot.

### Technical notes

- Single asset import; surgical edit to one route file.
- Existing overlay (`bg-gradient-to-r from-mges-navy/95 via-mges-navy/75 to-mges-navy/40`) is preserved, so contrast on the headline and CTAs is unchanged.
- If you'd rather review the generated image before I commit to it, say the word and I'll generate it first and show it before swapping.
