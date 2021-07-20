export default {
  name: 'cv',
  title: 'CV',
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
      name: 'headerImages',
      title: 'Header background image',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'life',
      type: 'string',
      title: 'Lived',
      initialValue: '1945-1998'
    },
    {
      name: 'lifeTitle',
      type: 'string',
      title: 'Lived Section Title',
      initialValue: 'Lived'
    },
    {
      name: 'educationTitle',
      type: 'string',
      title: 'Education Section Title',
      initialValue: 'Education'
    },
    {
      name: 'educationBody',
      type: 'richText',
      title: 'Education Body'
    },
    {
      name: 'exhibitionsTitle',
      type: 'string',
      title: 'Solo Exhibitions Section Title',
      initialValue: 'Solo Exhibitions'
    },
    {
      name: 'exhibitionsBody',
      type: 'richText',
      title: 'Exhibitions Body'
    },
    {
      name: 'downloadCVLabel',
      type: 'string',
      title: 'Download Label',
      initialValue: 'Lived'
    },
    {
      name: 'download',
      type: 'file',
      title: 'CV File'
    },
    {
      name: 'awardsTitle',
      type: 'string',
      title: 'Awards Section Title',
      initialValue: 'Awards'
    },
    {
      name: 'awardsBody',
      type: 'richText',
      title: 'Awards Body'
    },
    {
      name: 'publicCollectionsTitle',
      type: 'string',
      title: 'Public Collections Section Title',
      initialValue: 'Public Collections'
    },
    {
      name: 'publicCollectionsBody',
      type: 'richText',
      title: 'Public Collections Body'
    },
    {
      name: 'commisionsTitle',
      type: 'string',
      title: 'Commissions Section Title',
      initialValue: 'Permanent Site Commissions'
    },
    {
      name: 'permanentSiteCommissionsBody',
      type: 'richText',
      title: 'Permanent Site Commissions Body'
    },
    {
      name: 'groupExhibitionsTitle',
      type: 'string',
      title: 'Group Exhibitions Section Title',
      initialValue: 'Selected Group Exhibitions'
    },
    {
      name: 'groupExhibitionsBody',
      type: 'richText',
      title: 'Group Exhibitions - Left'
    },
    {
      name: 'groupExhibitionsBody2',
      type: 'richText',
      title: 'Group Exhibitions - Right'
    },
    {
      name: 'bibliographyTitle',
      type: 'string',
      title: 'Bibliography Section Title',
      initialValue: 'Selected Bibliography'
    },
    {
      name: 'selectedBibliographyBody',
      type: 'richText',
      title: 'Selected Bibliography - Left'
    },
    {
      name: 'selectedBibliographyBody2',
      type: 'richText',
      title: 'Selected Bibliography - Right'
    }
  ]
}
