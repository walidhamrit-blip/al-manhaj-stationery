// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  // Remarque : clientId et token sont volontairement retirés pour une architecture 100% locale
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "category", label: "ID de la cat\xE9gorie (ex: school, books)", required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      {
        name: "category",
        label: "Cat\xE9gories",
        path: "content/categories",
        format: "json",
        fields: [
          { type: "string", name: "categoryId", label: "Identifiant (ID)", isTitle: true, required: true },
          { type: "string", name: "nameEn", label: "Nom (Anglais)" },
          { type: "string", name: "nameAr", label: "Nom (Arabe)", required: true },
          { type: "string", name: "descEn", label: "Description (Anglais)" },
          { type: "string", name: "descAr", label: "Description (Arabe)" },
          { type: "string", name: "image", label: "Chemin de l'image" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
