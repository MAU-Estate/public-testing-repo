export default {
  name: 'work',
  title: 'Work',
  __experimental_actions: ['update', 'publish'],
  type: 'document',
  preview: {
    select: {
      title: 'seo.title'
    }
  },
  fieldsets: [
    { name: 'labels', title: 'Filter Labels', options: { collapsible: true, collapsed: true } }
  ],
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
      title: 'Featured Projects',
      name: 'featured',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ]
    },
    {
      name: 'featuredFilterLabel',
      title: 'Featured Filter label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'allFilterLabel',
      title: 'All Filter label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'filterButtonLabel',
      title: 'Filter Button label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'filteredButtonLabel',
      title: 'Filtered Button label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'closeButtonLabel',
      title: 'Close Button label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'resetButtonLabel',
      title: 'Reset Filter Button label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'mediumFilterLabel',
      title: 'Medium Filter label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'eraFilterLabel',
      title: 'Era Filter label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'collectionFilterLabel',
      title: 'Collection Filter label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'materialFilterLabel',
      title: 'Material Filter label',
      type: 'string',
      fieldset: 'labels'
    },
    {
      name: 'loadMoreButtonLabel',
      title: 'Load More Button label',
      type: 'string',
      fieldset: 'labels'
    }
  ]
};

// work categories
