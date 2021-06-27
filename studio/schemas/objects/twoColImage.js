export default {
  name: 'twoColImage',
  title: '2 Column Image',
  type: 'object',
  options: {
    collapsible: true
  },
  preview: {
    select: {
      title: 'imageL.alt',
      media: 'imageL.src'
    }
  },
  fields: [
    {
      name: 'imageL',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'imageR',
      title: 'Image',
      type: 'figure'
    }
  ]
}
