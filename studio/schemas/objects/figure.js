export default {
  name: 'figure',
  title: 'Image',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'src',
      title: 'source',
      type: 'image'
    },
    {
      name: 'alt',
      title: 'Alt Text',
      description: 'Describe the image',
      placeholder: 'exterior of mainspring headquarters',
      type: 'string'
    },
    {
      name: 'figcaption',
      title: 'Caption',
      type: 'richTextSingle',
      options: {
        collapsible: false,
        collapsed: false
      }
    }
  ]
}
