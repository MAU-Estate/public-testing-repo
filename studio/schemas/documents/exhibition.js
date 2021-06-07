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
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{ type: 'figure' }]
    },
    {
      name: 'details',
      title: 'Details',
      description:
        'Additional information to be in parenthesis after exhibition name in CV',
      type: 'string'
    }
  ]
}
