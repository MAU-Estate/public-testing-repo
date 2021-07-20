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
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      type: 'image',
      title: `Fellow's headshot image`,
      validation: Rule => Rule.required()
    },
    {
      name: 'education',
      title: 'Education',
      type: 'richText',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
      validation: Rule => Rule.required()
    },
    {
      name: 'infoBody',
      title: 'Additional Info',
      type: 'richText'
    }
  ]
}
