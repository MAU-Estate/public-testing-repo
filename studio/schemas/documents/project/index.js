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
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string'
    },
    {
      title: 'Collection',
      name: 'collections',
      type: 'reference',
      to: [{ type: 'collections' }]
    },
    {
      title: 'Medium',
      name: 'mediums',
      type: 'reference',
      to: [{ type: 'mediums' }]
    },
    {
      name: 'materials',
      type: 'array',
      validation: Rule => Rule.unique().required(),
      of: [{ type: 'projectMaterials' }]
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
