import React from 'react'

const SerifStyle = props => (
  <span style={{ fontFamily: 'times new roman' }}>{props.children}</span>
)

export default {
  name: 'richTextSingle',
  title: 'Rich Text',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'text',
      title: 'Rich Text',
      type: 'array',
      of: [
        {
          type: 'block',
          lists: [],
          styles: [],
          marks: {
            decorators: [{ title: 'Emphasis', value: 'em' }]
          }
        }
      ]
    }
  ]
}
