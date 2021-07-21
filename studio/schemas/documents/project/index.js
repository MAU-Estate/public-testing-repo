import { BiPaint } from 'react-icons/bi'

export default {
  name: 'project',
  title: 'Projects',
  icon: BiPaint,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  },
  fields: [
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Project Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'yearText',
      type: 'string',
      title: 'Display Year',
      validation: Rule => Rule.required()
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'previewImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Project Images',
      type: 'galleryObj',
      validation: Rule => Rule.required()
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string'
    },
    {
      name: 'collectionsText',
      type: 'string',
      title: 'Display Collections',
      validation: Rule => Rule.required()
    },
    {
      title: 'Collections',
      name: 'collection',
      type: 'array',
      of: [{ type: 'projectCollections' }],
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(3)
          .error('Please choose between 1 and 3 collections')
    },
    {
      name: 'materialsText',
      type: 'string',
      title: 'Display Materials'
    },
    {
      name: 'era',
      type: 'string',
      title: 'era',
      hidden: true
    },
    {
      title: 'Materials',
      name: 'material',
      type: 'array',
      of: [{ type: 'projectMaterials' }]
    },
    {
      title: 'Mediums',
      name: 'medium',
      type: 'array',
      of: [{ type: 'projectMediums' }]
    },
    {
      name: 'body',
      type: 'richTextSingle',
      title: 'Body'
    }
  ],
  initialValue: {
    date: '2021-01-01'
  }
}
