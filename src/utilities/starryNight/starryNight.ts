import { createStarryNight, type Grammar, all } from "@wooorm/starry-night";
import { visit } from "unist-util-visit";
import * as Hast from "hast";
/**
 * @typedef {import('@wooorm/starry-night').Grammar} Grammar
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 */

/**
 * @typedef Options
 *   Configuration (optional)
 * @property {Array<Grammar> | null | undefined} [grammars]
 *   Grammars to support (default: `common`).
 */

import { toString } from "hast-util-to-string";

/**
 * Highlight code with `starry-night`.
 *
 * @param {Options | null | undefined} options
 *   Configuration (optional).
 * @returns
 *   Transform.
 */

interface Options {
  grammars?: Grammar[];
}

export default function rehypeStarryNight(options: Options) {
  const { grammars = all } = options;
  const starryNightPromise = createStarryNight(grammars);
  const prefix = "language-";

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {Promise<undefined>}
   *   Nothing.
   */
  return async function (tree: Hast.Root) {
    const starryNight = await starryNightPromise;

    visit(tree, "element", function (node, index, parent) {
      if (!parent || index === null || node.tagName !== "pre") {
        return;
      }

      const head = node.children[0];

      if (
        !head ||
        head.type !== "element" ||
        head.tagName !== "code" ||
        !head.properties
      ) {
        return;
      }

      const classes = head.properties.className;

      if (!Array.isArray(classes)) return;

      const language = classes.find(function (d) {
        return typeof d === "string" && d.startsWith(prefix);
      });

      if (typeof language !== "string") return;

      const scope = starryNight.flagToScope(language.slice(prefix.length));

      // Maybe warn?
      if (!scope) return;

      const fragment = starryNight.highlight(toString(head), scope);
      const children = /** @type {Array<ElementContent>} */ fragment.children;

      parent.children.splice(index, 1, {
        type: "element",
        tagName: "div",
        properties: {
          className: [
            "highlight",
            "highlight-" + scope.replace(/^source\./, "").replace(/\./g, "-"),
          ],
        },
        children: [
          { type: "element", tagName: "pre", properties: {}, children },
        ],
      });
    });
  };
}
