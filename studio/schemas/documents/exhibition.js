export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
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
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'richText'
    },
    {
      name: 'artistStatementBody',
      title: 'Artist Statement',
      type: 'richText'
    },
    {
      name: 'quotedBody',
      title: 'Quoted',
      type: 'richText'
    }
  ]
}
