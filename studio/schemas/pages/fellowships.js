export default {
  name: 'fellowships',
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
      name: 'headerImage',
      title: 'Header background image',
      type: 'image'
    },
    {
      name: 'headerBodyLeft',
      title: 'Intro Text - Left Column',
      type: 'richText'
    },
    {
      name: 'headerBodyRight',
      title: 'Intro Text - Right Column',
      type: 'richText'
    },
    {
      name: 'recipientLabel',
      title: 'Fellowship Recipient Label',
      type: 'string'
    }
  ]
}
