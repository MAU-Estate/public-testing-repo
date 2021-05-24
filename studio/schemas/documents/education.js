import { MdSchool } from 'react-icons/md';

export default {
  name: 'education',
  title: 'Education',
  icon: MdSchool,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Medium name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Study Type',
      description: 'Graduate, MFA, etc',
      type: 'string'
    },
    {
      name: 'school',
      title: 'College / School',
      type: 'richText'
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description: 'Month & Year will be displayed but day will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    }
  ]
};
