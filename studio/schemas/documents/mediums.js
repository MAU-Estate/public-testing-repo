import { AiFillTags } from 'react-icons/ai';

export default {
  name: 'mediums',
  title: 'Mediums',
  icon: AiFillTags,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Medium name',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ]
};
