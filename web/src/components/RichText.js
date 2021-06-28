import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  //   // list: props => {
  //   //   const { type } = props
  //   //   const bullet = type === 'bullet'
  //   //   if (bullet) {
  //   //     return <ul>{props.children}</ul>
  //   //   }
  //   //   return <ol>{props.children}</ol>
  //   // },
  //   // listItem: props => <li>{props.children}</li>,
  marks: {
    serif: props => {
      return <span className="font-serif">{props.children}</span>
    },
  },
  // types: {
  //   code: props => (
  //     <pre data-language={props.node.language}>
  //       <code>{props.node.code}</code>
  //     </pre>
  //   ),
  // block: props => {
  //   const style = props.node.style || 'normal'
  //   if (style === 'serif') {
  //     return <p className="font-serif">{props.children}</p>
  //   } else {
  //     return <p>{props.children}</p>
  //   }
  // },
  // },
  // },
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
