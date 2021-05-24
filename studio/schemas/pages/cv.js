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
      name: 'exhibitionsTitle',
      type: 'string',
      title: 'Solo Exhibitions Section Title',
      initialValue: 'Solo Exhibitions'
    },
    {
      name: 'awardsTitle',
      type: 'string',
      title: 'Awards Section Title',
      initialValue: 'Awards'
    },
    {
      name: 'publicCollectionsTitle',
      type: 'string',
      title: 'Public Collections Section Title',
      initialValue: 'Public Collections'
    },
    {
      name: 'commisionsTitle',
      type: 'string',
      title: 'Commissions Section Title',
      initialValue: 'Permanent Site Commissions'
    },
    {
      name: 'groupExhibitionsTitle',
      type: 'string',
      title: 'Group Exhibitions Section Title',
      initialValue: 'Selected Group Exhibitions'
    },
    {
      name: 'bibliographyTitle',
      type: 'string',
      title: 'Bibliography Section Title',
      initialValue: 'Selected Bibliography'
    }
  ]
};
