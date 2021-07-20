export default {
  name: 'homeCarousel',
  title: 'Home Carousel',
  type: 'document',
  __experimental_actions: ['update', 'delete', 'create', 'publish'],
  fields: [
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [{ type: 'figure' }, { type: 'newsSlide' }],
      validation: Rule => Rule.required().min(1)
    }
  ]
}

// slides
// single image / caption / alt / ref to project / exhibition / article
// news card / image with alt / caption / link
//// title // subhead
