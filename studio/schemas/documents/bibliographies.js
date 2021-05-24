import { BiBook } from 'react-icons/bi';

export default {
  name: 'bibliographies',
  title: 'Bibliographies',
  icon: BiBook,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name of bibliography',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description: 'Month & Year will be displayed but day will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    },
    {
      name: 'url',
      title: 'External Url',
      type: 'url'
    }
  ]
};
