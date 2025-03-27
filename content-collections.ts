import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

function getCollection(name: string, directory: string, root: string = "content") {
  return defineCollection({
    name,
    directory: `${root}/${directory}`,
    include: ["**/*.md", "**/*.mdx"],
    schema: (z) => ({
      title: z.string(),
    }),
    transform: async (document, context) => {
      const mdx = await compileMDX(context, document, {
        remarkPlugins: [],
      });

      return {
        ...document,
        mdx,
        id: `${directory}/${document._meta.path}`,
        order: parseInt(document._meta.fileName.split("_")[0]),
      };
    },
  });
}

const digitalNutritionApplication = getCollection(
  "digitalNutritionApplication",
  "projects/digital-nutrition/application",
);
const digitalNutritionInfra = getCollection("digitalNutritionInfra", "projects/digital-nutrition/infra");
const uniitech = getCollection("uniitech", "projects/uniitech");

export default defineConfig({
  collections: [digitalNutritionApplication, digitalNutritionInfra, uniitech],
});
