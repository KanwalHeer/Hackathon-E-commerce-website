// schemas/blog.ts
import { SchemaTypeDefinition } from 'sanity';

export const blog: SchemaTypeDefinition = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(150),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    //   validation: (Rule) => Rule.required().min(20).max(300),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allow better cropping of the image
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
