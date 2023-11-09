// import { createStarryNight, all, type Grammar } from "@wooorm/starry-night";
// import { toString } from "hast-util-to-string";
// import { visit } from "unist-util-visit";
// import type * as Hast from "hast";
// import type { Plugin } from "unified";
// import "@wooorm/starry-night/style/light";

// interface Options {
//   grammars?: Grammar[];
// }

// const rehypeStarryNight: Plugin<Options[], Hast.Root> = (options) => {
//   const { grammars = all } = options || {};
//   const starryNightPromise = createStarryNight(grammars);
//   const prefix = "language-";

//   const plugin = async (tree: Hast.Root) => {
//     const starryNight = await starryNightPromise;

//     visit(tree, "element", function (node, index, parent) {
//       if (!parent || index === null || node.tagName !== "pre") {
//         return;
//       }

//       const head = node.children[0];

//       if (
//         !head ||
//         head.type !== "element" ||
//         head.tagName !== "code" ||
//         !head.properties
//       ) {
//         return;
//       }

//       const classes = head.properties.className;

//       if (!Array.isArray(classes)) return;

//       const language = classes.find(function (d) {
//         return typeof d === "string" && d.startsWith(prefix);
//       });

//       if (typeof language !== "string") return;

//       const scope = starryNight.flagToScope(language.slice(prefix.length));

//       // Maybe warn?
//       if (!scope) return;

//       const fragment = starryNight.highlight(toString(head), scope);
//       const children = /** @type {Array<ElementContent>} */ fragment.children;

//       parent.children.splice(index, 1, {
//         type: "element",
//         tagName: "div",
//         properties: {
//           className: [
//             "highlight",
//             "highlight-" + scope.replace(/^source\./, "").replace(/\./g, "-"),
//           ],
//         },
//         children: [
//           { type: "element", tagName: "pre", properties: {}, children },
//         ],
//       });
//     });
//   };
//   return plugin;
// };

// export default rehypeStarryNight;
