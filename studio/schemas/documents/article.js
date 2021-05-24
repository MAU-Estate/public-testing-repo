import { BsNewspaper } from 'react-icons/bs';

export default {
  name: 'article',
  title: 'Press & Essays',
  icon: BsNewspaper,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Articles name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'publication',
      title: 'Publication',
      type: 'string'
    },
    {
      name: 'url',
      title: 'External Url',
      type: 'url'
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description: 'Year & month will be displayed but all will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    }
  ]
};
