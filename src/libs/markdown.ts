import type { AstroUserConfig } from "astro";
import rehypeCustomEmoji from "rehype-custom-emoji";
// import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import rehypeStarryNight from "./starryNight";
import "@wooorm/starry-night/style/light";

export const emojis: Record<string, string> = {
  worry: "/assets/emoji/worry.png",
  nice: "/assets/emoji/nice.png",
  holyshiet: "/assets/emoji/holyshiet.png",
  angry: "/assets/emoji/angry.png",
  fucc: "/assets/emoji/fucc.png",
  ehe: "/assets/emoji/ehe.png",
  thonking: "/assets/emoji/thonking.png",
  happy: "/assets/emoji/happy.png",
  disappointed: "/assets/emoji/disappointed.png",
};

const markdown: AstroUserConfig["markdown"] = {
  remarkPlugins: [
    // remarkParse as unknown as string,
    // remarkGfm,
    // [remarkRehype as unknown as string, { allowDangerousHtml: true }],
  ],
  rehypePlugins: [
    // [rehypeStringify as unknown as string, { allowDangerousHtml: true }],
    [rehypeCustomEmoji, { emojis }],
    // rehypeStarryNight,
  ],
};

export default markdown;
