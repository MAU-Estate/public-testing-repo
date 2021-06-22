import React from 'react'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-l.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-r.svg'
import { ReactComponent as arrowCta } from '../assets/icons/arrowCta.svg'

const icons = {
  logo: Logo,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowCta,
}

export default props => {
  if (props.name in icons) {
    return <>{icons[props.name](props)}</>
  } else {
    return <>Undefined icon name: {props.name}</>
  }
}
