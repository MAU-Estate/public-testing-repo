export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Exhibition Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description:
        'Year will be displayed but month & day will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    },
    {
      name: 'isSolo',
      title: 'Is this a solo exhibition',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'previewImage'
    },
    {
      name: 'gallery',
      title: 'Images',
      type: 'galleryObj'
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string'
    },
    {
      name: 'curator',
      title: 'Curator',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
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
