import { createStarryNight, all, type Grammar } from "@wooorm/starry-night";
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import type * as Hast from "hast";
import type { Plugin } from "unified";

interface Options {
  grammars?: Grammar[];
}

const rehypeStarryNight: Plugin<Options, Root> = (options) => {
  const plugin = async;
};

export default rehyperStarryNight;
