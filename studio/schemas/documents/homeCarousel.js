export default {
  name: 'homeCarousel',
  title: 'Home Carousel',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      layout: 'grid',
      of: [{ type: 'slide' }, { type: 'newsSlide' }],
      validation: Rule => Rule.required().min(1)
    }
  ]
}
