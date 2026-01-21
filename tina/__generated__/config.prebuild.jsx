// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Top Badge"
              },
              {
                type: "string",
                name: "title",
                label: "Main Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "ctaPrimary",
                label: "Primary Button Text"
              },
              {
                type: "string",
                name: "ctaSecondary",
                label: "Secondary Button Text"
              },
              {
                type: "object",
                name: "features",
                label: "Features (Checks)",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Feature Text"
                  }
                ]
              },
              {
                type: "image",
                name: "images",
                label: "Hero Images",
                list: true
              },
              {
                type: "string",
                name: "quote",
                label: "Quote Text"
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID"
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Service Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Name (e.g., Users, Globe2, Home)"
                  }
                ]
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Button Text"
              }
            ]
          },
          {
            type: "object",
            name: "reviews",
            label: "Reviews Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text (e.g., 4.9/5 en Google)"
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle"
              },
              {
                type: "object",
                name: "items",
                label: "Review Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "author",
                    label: "Author Name"
                  },
                  {
                    type: "string",
                    name: "date",
                    label: "Date (e.g., Hace 2 meses)"
                  },
                  {
                    type: "number",
                    name: "rating",
                    label: "Rating (1-5)"
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Review Text",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "initial",
                    label: "Initial Letter"
                  }
                ]
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Link Text"
              }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle"
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question"
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "ctaText",
                label: "Bottom CTA Text"
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
