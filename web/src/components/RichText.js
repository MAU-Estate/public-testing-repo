import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

// const serializers = {

//   list: props => {
//     const { type } = props
//     const bullet = type === 'bullet'
//     if (bullet) {
//       return <ul>{props.children}</ul>
//     }
//     return <ol>{props.children}</ol>
//   },
//   listItem: props => <li>{props.children}</li>,
//   marks: {
//     superscript: props => {
//       return <sup>{props.children}</sup>
//     },
//   },
// }

const RichText = ({ content, className }) => {
  return (
    <BlockContent
      className={`richText ${className}`}
      blocks={content}
      renderContainerOnSingleChild={true}
      // serializers={serializers}
    />
  )
}

export default RichText
