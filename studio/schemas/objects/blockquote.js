import { FaQuoteRight } from 'react-icons/fa';

export default {
  name: 'blockquote',
  title: 'Blockquote',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  icon: FaQuoteRight,
  fields: [
    {
      name: 'text',
      title: 'Quote Text',
      type: 'text'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    }
  ]
};
