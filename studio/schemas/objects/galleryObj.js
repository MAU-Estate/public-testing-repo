export default {
  name: 'galleryObj',
  title: 'Gallery',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'galleryRef',
      title: 'Select a gallery',
      type: 'reference',
      weak: true,
      to: [{ type: 'gallery' }],
      description:
        'Galleries must be created & published in the Documents section before adding below'
    }
  ]
}
