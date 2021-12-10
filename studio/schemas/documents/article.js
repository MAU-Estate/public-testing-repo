import { BsNewspaper } from 'react-icons/bs'
import ConditionalField from 'sanity-plugin-conditional-field'

export default {
  name: 'article',
  title: 'Press & Essays',
  icon: BsNewspaper,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Articles name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'previewImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'external',
      title: 'Is this article external?',
      type: 'boolean',
      validation: Rule => Rule.required(),
      initialValue: true
    },
    {
      name: 'media',
      title: 'PDF or Image',
      type: 'array',
      of: [
        { type: 'image' },
        { type: 'file', title: 'PDF', options: { accept: '.pdf' } }
      ],
      inputComponent: ConditionalField,
      options: {
        condition: document => !document.external
      },
      validation: Rule =>
        Rule.custom((content, context) => {
          if (context.document.external || content?.length) return true
          else {
            return 'You must add an image or PDF'
          }
        }).length(1)
    },
    {
      name: 'url',
      title: 'External Url',
      type: 'url',
      inputComponent: ConditionalField,
      options: {
        condition: document => document.external
      },
      validation: Rule =>
        Rule.custom((content, context) => {
          if (!context.document.external) return true
          if (!content) {
            return 'You must choose a valid url for an external document'
          } else {
            return true
          }
        })
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'publication',
      title: 'Publication',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description:
        'Year & month will be displayed but all will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      },
      validation: Rule => Rule.required()
    }
  ]
}
