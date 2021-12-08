export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO'
    },
    {
      name: 'title',
      title: 'Exhibition Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      slugify: input =>
        input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200),
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description:
        'Year will be displayed but month & day will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'isSolo',
      title: 'Is this a solo exhibition',
      type: 'boolean',
      initialValue: true,
      validation: Rule => Rule.required()
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'previewImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Images',
      type: 'galleryObj',
      validation: Rule => Rule.required()
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'curator',
      title: 'Curator',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'richSection' }]
    }
  ]
}
