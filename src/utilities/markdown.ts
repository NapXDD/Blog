import type { AstroUserConfig } from "astro";
import rehypeCustomEmoji from "rehype-custom-emoji";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

export const emojis: Record<string, string> = {
  adore: "/assets/emoji/adore.png",
  argggg: "/assets/emoji/argggg.png",
  christ: "/assets/emoji/christ.png",
  confused: "/assets/emoji/confused.png",
  cry: "/assets/emoji/cry.png",
  doubt: "/assets/emoji/doubt.png",
  go: "/assets/emoji/go.png",
  gun: "/assets/emoji/gun.png",
  lookdown: "/assets/emoji/look_down.png",
  moka: "/assets/emoji/moka.png",
  mokas: "/assets/emoji/mokas.png",
  ok: "/assets/emoji/ok.png",
  okay: "/assets/emoji/okay.png",
  pepe_surrender: "/assets/emoji/pepe_surrender.png",
  popcorn: "/assets/emoji/popcorn.png",
  rage: "/assets/emoji/rage.png",
  sad: "/assets/emoji/sad.png",
  smug: "/assets/emoji/smug.png",
  snug: "/assets/emoji/snug.png",
  stab: "/assets/emoji/stab.png",
  surrender: "/assets/emoji/surrender.png",
  yikes: "/assets/emoji/yikes.png",
  sosad: "/assets/emoji/sosad.gif",
  nosebleed: "/assets/emoji/nosebleed.png",
  smoke: "/assets/emoji/smoke.png",
};

const markdown: AstroUserConfig["markdown"] = {
  remarkPlugins: [
    remarkParse as unknown as string,
    remarkGfm as unknown as string,
    [remarkRehype as unknown as string, { allowDangerousHtml: true }],
  ],
  rehypePlugins: [
    [rehypeStringify as unknown as string, { allowDangerousHtml: true }],
    [rehypeCustomEmoji, { emojis }],
  ],
};

export default markdown;
