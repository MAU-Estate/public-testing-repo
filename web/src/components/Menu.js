import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Icon from '../components/Icon'
import useKeyPress from '../hooks/useKeyPress'

const NAV_ITEMS = [
  { path: '/#intro', label: 'About Mary Ann' },
  { path: '/work', label: 'Work' },
  { path: '/exhibitions', label: 'Exhibitions' },
  { path: '/press', label: 'Press' },
  { path: '/fellowships', label: 'Fellowships' },
  { path: '/contact', label: 'Contact' },
  { path: '/cv', label: 'CV' },
]

export default function Menu({ bgImage }) {
  const [isOpen, setIsOpen] = useState(false)
  const esc = useKeyPress('Escape')

  useEffect(() => {
    esc && isOpen && setIsOpen(false)
  }, [esc, isOpen])

  return (
    <>
      <Helmet bodyAttributes={{ class: `${isOpen ? 'no-scroll' : ''}` }} />
      <div
        className={`${
          isOpen ? '' : 'pointer-events-none'
        } fixed z-30 inset-0 flex`}
      >
        <button
          className={`absolute h-full w-full inset-0 block bg-black transition-all ${
            isOpen
              ? 'opacity-50 visible'
              : 'opacity-0 pointer-events-none invisible'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <span className="sr-only">Close menu</span>
        </button>
        <div
          className={`flex flex-col justify-top pl-20 pr-96 transition-transform duration-300 transform ${
            isOpen ? '' : '-translate-x-full'
          }`}
          style={{ marginLeft: '41px' }}
        >
          <div
            className="left-0 top-0 bottom-0 absolute flex"
            style={{ backgroundColor: 'green' }}
          >
            <GatsbyImage image={bgImage} alt="" objectFit="cover" />
          </div>
          <nav className="relative z-10 mt-11">
            <Icon name="logo" className="text-white" />
            <ul className="pt-s">
              {NAV_ITEMS.map(item => (
                <li key={item.path} className="f-1">
                  <Link
                    className="pb-5 block text-white"
                    to={item.path}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="fixed z-30 flex items-start justify-center left-0 top-0 bottom-0"
        style={{ width: '41px' }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 flex-1 self-stretch bg-black"
        >
          <span
            className="absolute top-11 text-white left-[10px] transform -translate-x-full  origin-top-right -rotate-90 flex items-center"
            style={{ lineHeight: 1, fontSize: '20.5px' }}
          >
            EXPLORE{' '}
            <div className="transform rotate-90 ml-3">
              <Icon name={isOpen ? 'menuClose' : 'menu'} className="w-4 h-4" />
            </div>
          </span>
        </button>
      </div>
    </>
  )
}
