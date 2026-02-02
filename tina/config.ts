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
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,

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
                templates: [
                    {
                        name: "home",
                        label: "Home Page",
                        fields: [
                            {
                                type: "string",
                                name: "title",
                                label: "Internal Title",
                                isTitle: true,
                                required: true,
                            },
                            {
                                type: "object",
                                name: "hero",
                                label: "Hero Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Top Badge" },
                                    { type: "string", name: "title", label: "Main Title" },
                                    { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                                    { type: "string", name: "ctaPrimary", label: "Primary Button Text" },
                                    { type: "string", name: "ctaSecondary", label: "Secondary Button Text" },
                                    { type: "string", name: "quote", label: "Quote Text" },
                                    {
                                        type: "object",
                                        name: "features",
                                        label: "Features (Checks)",
                                        list: true,
                                        fields: [{ type: "string", name: "text", label: "Feature Text" }],
                                    },
                                    { type: "image", name: "images", label: "Hero Images", list: true },
                                ],
                            },
                            {
                                type: "object",
                                name: "services",
                                label: "Services Preview Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Badge Text" },
                                    { type: "string", name: "title", label: "Section Title" },
                                    { type: "string", name: "subtitle", label: "Section Subtitle", ui: { component: "textarea" } },
                                    { type: "string", name: "ctaText", label: "CTA Button Text" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "Service Items",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "id", label: "ID" },
                                            { type: "string", name: "title", label: "Service Title" },
                                            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                            { type: "string", name: "icon", label: "Icon Name" },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "object",
                                name: "reviews",
                                label: "Reviews Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Badge Text" },
                                    { type: "string", name: "title", label: "Section Title" },
                                    { type: "string", name: "subtitle", label: "Section Subtitle" },
                                    { type: "string", name: "ctaText", label: "CTA Link Text" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "Review Items",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "author", label: "Author Name" },
                                            { type: "string", name: "date", label: "Date" },
                                            { type: "number", name: "rating", label: "Rating (1-5)" },
                                            { type: "string", name: "text", label: "Review Text", ui: { component: "textarea" } },
                                            { type: "string", name: "initial", label: "Initial Letter" },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "object",
                                name: "faq",
                                label: "FAQ Section",
                                fields: [
                                    { type: "string", name: "title", label: "Section Title" },
                                    { type: "string", name: "subtitle", label: "Section Subtitle" },
                                    { type: "string", name: "ctaText", label: "Bottom CTA Text" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "FAQ Items",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "question", label: "Question" },
                                            { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "about",
                        label: "About Page",
                        fields: [
                            {
                                type: "string",
                                name: "title",
                                label: "Internal Title",
                                isTitle: true,
                                required: true,
                            },
                            {
                                type: "object",
                                name: "hero",
                                label: "Hero Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Top Badge" },
                                    { type: "string", name: "title", label: "Title" },
                                    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                    { type: "image", name: "image", label: "Hero Image" },
                                ],
                            },
                            {
                                type: "object",
                                name: "team",
                                label: "Team Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Badge" },
                                    { type: "string", name: "title", label: "Title" },
                                    { type: "string", name: "description1", label: "Description Paragraph 1", ui: { component: "textarea" } },
                                    { type: "string", name: "description2", label: "Description Paragraph 2", ui: { component: "textarea" } },
                                    { type: "image", name: "image", label: "Team Image" },
                                ],
                            },
                            {
                                type: "object",
                                name: "model",
                                label: "Flexible Model Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Badge" },
                                    { type: "string", name: "title", label: "Title" },
                                    { type: "string", name: "description1", label: "Description 1", ui: { component: "textarea" } },
                                    { type: "string", name: "description2", label: "Description 2", ui: { component: "textarea" } },
                                    { type: "string", name: "boxTitle", label: "Box Title" },
                                    {
                                        type: "object",
                                        name: "features",
                                        label: "Features List",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "title", label: "Feature Title" },
                                            { type: "string", name: "description", label: "Feature Description", ui: { component: "textarea" } },
                                            { type: "string", name: "icon", label: "Icon Name" },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "object",
                                name: "values",
                                label: "Values Section",
                                fields: [
                                    { type: "string", name: "title", label: "Title" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "Values List",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "title", label: "Value Title" },
                                            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                            { type: "string", name: "icon", label: "Icon Name" },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "services",
                        label: "Services Page",
                        fields: [
                            {
                                type: "string",
                                name: "title",
                                label: "Internal Title",
                                isTitle: true,
                                required: true,
                            },
                            {
                                type: "object",
                                name: "hero",
                                label: "Hero Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Top Badge" },
                                    { type: "string", name: "title", label: "Title" },
                                    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                    { type: "image", name: "image", label: "Hero Image" },
                                ],
                            },
                            {
                                type: "object",
                                name: "immigration",
                                label: "Immigration Services",
                                fields: [
                                    { type: "string", name: "title", label: "Section Title" },
                                    { type: "string", name: "subtitle", label: "Subtitle" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "Services List",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "title", label: "Service Title" },
                                            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "object",
                                name: "admin",
                                label: "Administrative Services",
                                fields: [
                                    { type: "string", name: "title", label: "Section Title" },
                                    { type: "string", name: "subtitle", label: "Subtitle" },
                                    {
                                        type: "object",
                                        name: "items",
                                        label: "Services List",
                                        list: true,
                                        fields: [
                                            { type: "string", name: "title", label: "Service Title" },
                                            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "contact",
                        label: "Contact Page",
                        fields: [
                            {
                                type: "string",
                                name: "title",
                                label: "Internal Title",
                                isTitle: true,
                                required: true,
                            },
                            {
                                type: "object",
                                name: "hero",
                                label: "Hero Section",
                                fields: [
                                    { type: "string", name: "badge", label: "Top Badge" },
                                    { type: "string", name: "title", label: "Title" },
                                    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                                    { type: "image", name: "image", label: "Hero Image" },
                                ],
                            },
                            {
                                type: "object",
                                name: "info",
                                label: "Contact Info Cards",
                                fields: [
                                    {
                                        type: "object",
                                        name: "location",
                                        label: "Location Card",
                                        fields: [
                                            { type: "string", name: "title", label: "Title" },
                                            { type: "string", name: "line1", label: "Line 1" },
                                            { type: "string", name: "line2", label: "Line 2" },
                                            { type: "string", name: "note", label: "Note" },
                                        ],
                                    },
                                    {
                                        type: "object",
                                        name: "phone",
                                        label: "Phone Card",
                                        fields: [
                                            { type: "string", name: "title", label: "Title" },
                                            { type: "string", name: "number", label: "Phone Number" },
                                            { type: "string", name: "email", label: "Email" },
                                            { type: "string", name: "hours", label: "Hours" },
                                        ],
                                    },
                                    {
                                        type: "object",
                                        name: "social",
                                        label: "Social Card",
                                        fields: [
                                            { type: "string", name: "title", label: "Title" },
                                            { type: "string", name: "description", label: "Description" },
                                            { type: "string", name: "handle", label: "Social Handle" },
                                            { type: "string", name: "link", label: "Social Link" },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
