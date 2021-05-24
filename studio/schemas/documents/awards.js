import { FiAward } from 'react-icons/fi';

export default {
  name: 'awards',
  title: 'Awards',
  icon: FiAward,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name of award',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description: 'Year will be displayed but month & day will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    },
    {
      title: 'Additional years',
      name: 'repeat',
      type: 'array',
      of: [{ type: 'date', title: 'Year', options: { dateFormat: 'YYYY' } }]
    }
  ]
};
