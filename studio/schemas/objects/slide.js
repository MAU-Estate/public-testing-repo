export default {
  name: 'slide',
  title: 'Slide',
  type: 'object',
  preview: {
    select: {
      title: 'image.alt',
      media: 'image.src'
    }
  },
  fields: [
    {
      name: 'image',
      type: 'figure',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link / Url',
      validation: Rule => Rule.required().uri({ allowRelative: true })
    }
  ]
}
