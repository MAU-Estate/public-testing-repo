export default {
  name: 'contact',
  title: 'Contact',
  __experimental_actions: ['update', 'delete', 'create', 'publish'],
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
      title: 'Title',
      type: 'string'
    }
    {
      name: 'body',
      title: 'Body',
      type: 'richText'
    },
    // Estate Address
    // Gallery Address
    // Currently on view (does this link to exhibition page?)
    // Survived by (people with links)
    // Director
    // Advisors
    // CV (should be in site settings)
  ]
};
