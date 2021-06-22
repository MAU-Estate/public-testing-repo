import defaultResolve, {
  PublishAction
} from 'part:@sanity/base/document-actions'
import { useDocumentOperation } from '@sanity/react-hooks'

const handleAction = props => {
  const { patch, publish } = useDocumentOperation(props.id, props.type)
  return {
    disabled: publish.disabled,
    label: 'Publish',
    onHandle: () => {
      const projectYear = new Date(props.draft.date).getFullYear()
      /// Set the slug field of this document
      patch.execute([
        { set: { era: (projectYear - (projectYear % 10)).toString() } }
      ])

      // Perform the publish
      publish.execute()

      // Signal that the action is completed
      props.onComplete()
    }
  }
}

/// Publish Actions
export default function useDocumentActions(props) {
  /// Leave the code below commented out to run this action for all documents
  /// Uncomment the code below to restrict this action to specific documents only
  // if (["tag"].indexOf(props.type) !== -1) {
  return defaultResolve(props).map(Action => {
    if (props.type === 'project' && Action === PublishAction) {
      return handleAction
    }
    return Action
  })
  // }

  // return defaultResolve(props)
}
