export default {
  name: 'press',
  title: 'Press',
  __experimental_actions: ['update', 'publish'],
  type: 'document',
  preview: {
    select: {
      title: 'seo.title'
    }
  },
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'loadMoreButtonLabel',
      title: 'Load More Button Label',
      type: 'string'
    }
  ]
};
