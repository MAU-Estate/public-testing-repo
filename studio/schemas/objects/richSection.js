export default {
  name: 'richSection',
  title: 'Rich Section',
  type: 'object',
  options: {
    collapsible: true
  },
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText'
    }
  ]
}
