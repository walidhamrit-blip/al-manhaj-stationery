import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "dummy-client-id",
  token: "dummy-token",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "ID de la catégorie (ex: school, books)",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "category",
        label: "Catégories",
        path: "content/categories",
        format: "json",
        fields: [
          {
            type: "string",
            name: "categoryId",
            label: "Identifiant (ID)",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "nameEn",
            label: "Nom (Anglais)",
          },
          {
            type: "string",
            name: "nameAr",
            label: "Nom (Arabe)",
            required: true,
          },
          {
            type: "string",
            name: "descEn",
            label: "Description (Anglais)",
          },
          {
            type: "string",
            name: "descAr",
            label: "Description (Arabe)",
          },
          {
            type: "string",
            name: "image",
            label: "Chemin de l'image",
          },
        ],
      },
    ],
  },
});