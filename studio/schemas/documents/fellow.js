import { IoPerson } from 'react-icons/io'

export default {
  name: 'fellow',
  title: 'Fellowship recipient',
  icon: IoPerson,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: `Fellow's Name`,
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY'
      }
    },
    {
      name: 'avatar',
      type: 'image',
      title: `Fellow's headshot image`
    },
    {
      name: 'education',
      title: 'Education',
      type: 'richText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText'
    }
  ]
}
