export default {
  name: 'fellowship',
  title: 'Fellowships',
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
      name: 'header',
      title: 'Intro Text',
      type: 'textColumns'
    },
    {
      name: 'recipientLabel',
      title: 'Fellowship Recipient Label',
      type: 'string'
    }
  ]
};
