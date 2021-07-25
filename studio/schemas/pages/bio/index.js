export default {
  name: 'bio',
  title: 'Bio',
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
      name: 'section1',
      title: 'Intro',
      type: 'bioSection1'
    },
    {
      name: 'section2',
      title: 'Coming of age',
      type: 'bioSection2'
    },
    {
      name: 'section3',
      title: 'Diagnosis',
      type: 'bioSection3'
    },
    {
      name: 'section4',
      title: 'Legacy',
      type: 'bioSection4'
    },
    {
      name: 'section5',
      title: 'Across the Bering Strait',
      type: 'bioSection5'
    },
    {
      name: 'section6',
      title: 'Posthumous',
      type: 'bioSection6'
    },
    {
      name: 'section7',
      title: '15 year retrospective',
      type: 'bioSection7'
    },
    {
      name: 'bioCta',
      title: 'CTA - Explore',
      type: 'bioCta'
    }
  ]
}
