import React from 'react'
import { Link, navigate } from 'gatsby'
import useKeyPress from '../hooks/useKeyPress'

import Icon from './Icon'

export default function ProjectHeader({
  className = '',
  title,
  backPath,
  nextPath,
  prevPath,
}) {
  const left = useKeyPress('ArrowLeft')
  const right = useKeyPress('ArrowRight')

  if (left) {
    navigate(prevPath)
  }
  if (right) {
    navigate(nextPath)
  }

  return (
    <div className={`${className} sticky py-11 top-0 bg-white z-10`}>
      <div className="border-t border-grey-b mb-t w-full"></div>
      <div className="flex justify-between items-end">
        <h1 className="f-21">{title}</h1>
        <div className="h-11 flex items-center">
          <Link to={backPath} className="flex">
            <Icon name="grid" className="mx-6" />
          </Link>
          <div className="border-r border-grey-b self-stretch"></div>
          <Link to={prevPath} className="flex pl-6 pr-3">
            <Icon name="arrowLeft" className="w-[22px]" />
          </Link>
          <Link to={nextPath} className="flex pl-3">
            <Icon name="arrowRight" className="w-[22px]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
