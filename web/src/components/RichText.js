import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  //   // list: props => {
  //   //   const { type } = props
  //   //   const bullet = type === 'bullet'
  //   //   if (bullet) {
  //   //     return <ul>{<prop></prop>s.children}</ul>
  //   //   }
  //   //   return <ol>{props.children}</ol>
  //   // },
  //   // listItem: props => <li>{props.children}</li>,
  marks: {
    serif: props => {
      return <span className="f-6 inline-block">{props.children}</span>
    },
  },
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    block: props => {
      return <p className="f-7">{props.children}</p>
    },
  },
}

const RichText = ({ content, className }) => {
  return (
    <BlockContent
      className={`richText ${className}`}
      blocks={content}
      renderContainerOnSingleChild={true}
      serializers={serializers}
    />
  )
}

export default RichText
