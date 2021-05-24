import { AiFillTags } from 'react-icons/ai';

export default {
  name: 'materials',
  title: 'Materials',
  icon: AiFillTags,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Material name',
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
