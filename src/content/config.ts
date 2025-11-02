import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    ogImage: z.string().optional(),
    publishDate: z.date().optional(),
    author: z.string().default('CMDX'),
    // Dodatkowe pola SEO
    canonical: z.string().optional(),
    noindex: z.boolean().default(false),
    nofollow: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('CMDX'),
    ogImage: z.string().optional(),
    coverImage: image().optional(),
    coverImageAlt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // SEO
    canonical: z.string().optional(),
    noindex: z.boolean().default(false),
    nofollow: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    publishDate: z.date(),
    author: z.string().default('CMDX'),
    // Pola specyficzne dla portfolio
    client: z.string().optional(),
    projectDate: z.date().optional(),
    coverImage: image().optional(),
    coverImageAlt: z.string().optional(),
    gallery: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    projectUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    // SEO
    ogImage: z.string().optional(),
    canonical: z.string().optional(),
    noindex: z.boolean().default(false),
    nofollow: z.boolean().default(false),
  }),
});

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
  portfolio: portfolioCollection,
};
