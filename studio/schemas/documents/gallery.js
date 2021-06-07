export default {
  name: 'gallery',
  title: 'Galleries',
  type: 'document',
  fields: [
    {
      title: 'Name of Gallery',
      type: 'string',
      name: 'title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
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
