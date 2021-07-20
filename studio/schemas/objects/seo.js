export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}
