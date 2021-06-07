export default {
  name: 'caption',
  title: 'Caption',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'body',
      title: 'Caption Body',
      type: 'richText',
      options: {
        collapsed: false
      }
    },
    {
      name: 'credit',
      title: 'Credit / Details',
      type: 'string'
    }
  ]
};
