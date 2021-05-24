import { AiFillTags } from 'react-icons/ai';

export default {
  name: 'collections',
  title: 'Collections',
  icon: AiFillTags,
  type: 'document',
  fields: [
    {
      name: 'collections',
      title: 'Collection name',
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
