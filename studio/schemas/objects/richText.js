// import React from 'react';

export default {
  name: 'richText',
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
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
              // {
              //   title: 'Superscript',
              //   value: 'superscript',
              //   blockEditor: {
              //     icon: () => 'S',
              //     render: ({ children }) => <sup>{children}</sup>
              //   }
              // }
            ]
          }
        }
      ]
    }
  ]
};
