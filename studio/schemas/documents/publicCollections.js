export default {
  name: 'publicCollections',
  title: 'Public Collections',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Collection & Location',
      type: 'string'
    },
    {
      name: 'url',
      title: 'External Url',
      type: 'url'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ]
};
