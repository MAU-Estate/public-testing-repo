import { BiPaint } from 'react-icons/bi'

export default {
  name: 'project',
  title: 'Projects',
  icon: BiPaint,
  type: 'document',
  fields: [
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Project Title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime'
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'figure'
    },
    {
      name: 'gallery',
      title: 'Images',
      type: 'gallery'
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string'
    },
    {
      title: 'Collections',
      name: 'collection',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'projectCollections' }]
    },
    {
      title: 'Mediums',
      name: 'medium',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'projectMediums' }]
    },
    {
      title: 'Materials',
      name: 'material',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'projectMaterials' }]
    },
    {
      name: 'era',
      type: 'string'
      // hidden: true
    }

    // year
    // dimensions string
    // categories
    // // medium
    // // collection
    // // materials
    // Quotes
    // Images...some two column
    // // add single image / add image grid
  ],
  initialValue: {
    date: '1990-01-01 00:00'
  }
}

// label
// relationship
// slug of page
