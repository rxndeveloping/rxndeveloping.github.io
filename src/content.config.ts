import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().optional(),
  position: z.string().optional()
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    shortDescription: z.string().min(1),
    category: z.string().optional(),
    status: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    systems: z.array(z.string()).default([]),
    contributors: z.array(z.object({
      member: z.enum(['ryze', 'ninja']),
      role: z.string().min(1)
    })).default([]),
    cover: imageSchema.optional(),
    gallery: z.array(imageSchema).default([]),
    videos: z.array(z.object({
      type: z.enum(['youtube', 'vimeo', 'local']),
      url: z.string().optional(),
      title: z.string().min(1),
      poster: z.string().optional(),
      mp4: z.string().optional(),
      webm: z.string().optional(),
      caption: z.string().optional()
    })).default([]),
    links: z.object({
      github: z.url().optional(),
      demo: z.url().optional(),
      download: z.url().optional()
    }).default({}),
    developmentPeriod: z.string().optional(),
    featured: z.boolean().default(false),
    featuredOrder: z.number().int().nonnegative().optional(),
    draft: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional()
    }).optional()
  })
});

export const collections = { projects };
