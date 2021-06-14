export default {
  name: 'gallery',
  title: 'Galleries',
  type: 'document',
  preview: {
    select: {
      title: 'seo.title'
    }
  },
  fields: [
    {
      title: 'SEO',
      type: 'seo',
      name: 'seo'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'seo.title'
      }
    },
    {
      name: 'backUrl',
      type: 'string',
      title: 'Route to path on close'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'figure' }],
      options: {
        layout: 'grid'
      }
    }
  ]
}
