import { AiFillTags } from 'react-icons/ai'

export default {
  name: 'material',
  title: 'Material',
  icon: AiFillTags,
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Material name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Do not change this value or expect bad things to happen'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ]
}
