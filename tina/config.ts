import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // token: process.env.TINA_TOKEN,


    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
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
                        required: true,
                    },
                    {
                        type: "object",
                        name: "hero",
                        label: "Hero Section",
                        fields: [
                            {
                                type: "string",
                                name: "badge",
                                label: "Top Badge (e.g. MIGRAR CON PLAN...)",
                            },
                            {
                                type: "string",
                                name: "title",
                                label: "Main Title",
                            },
                            {
                                type: "string",
                                name: "subtitle",
                                label: "Subtitle / Description",
                                ui: {
                                    component: "textarea",
                                },
                            },
                            {
                                type: "string",
                                name: "ctaPrimary",
                                label: "Primary Button Text",
                            },
                            {
                                type: "string",
                                name: "ctaSecondary",
                                label: "Secondary Button Text",
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
                                        label: "Feature Text",
                                    },
                                ],
                            },
                            {
                                type: "image",
                                name: "images",
                                label: "Hero Images",
                                list: true,
                            },
                            {
                                type: "string",
                                name: "quote",
                                label: "Quote Text",
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
