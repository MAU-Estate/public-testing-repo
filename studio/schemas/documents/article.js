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
      type: 'string'
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'previewImage'
    },
    {
      name: 'external',
      title: 'Is this article external?',
      type: 'boolean',
      validation: Rule => Rule.required(),
      initialValue: true
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'galleryObj',
      inputComponent: ConditionalField,
      options: {
        condition: document => !document.external
      }
    },
    {
      name: 'url',
      title: 'External Url',
      type: 'url',
      inputComponent: ConditionalField,
      options: {
        condition: document => document.external
      }
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
      name: 'date',
      title: 'Year',
      type: 'date',
      description:
        'Year & month will be displayed but all will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    }
  ]
}
