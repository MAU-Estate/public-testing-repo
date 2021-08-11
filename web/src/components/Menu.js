import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Icon from '../components/Icon'
import useKeyPress from '../hooks/useKeyPress'
import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint'

const NAV_ITEMS = [
  { path: '/#intro', label: 'About Mary Ann' },
  { path: '/work', label: 'Work' },
  { path: '/exhibitions', label: 'Exhibitions' },
  { path: '/press', label: 'Press & Essays' },
  { path: '/fellowships', label: 'Fellowships' },
  { path: '/contact', label: 'Contact' },
  { path: '/cv', label: 'CV' },
]

export default function Menu({ bgImage, menuBgClass }) {
  const [isOpen, setIsOpen] = useState(false)
  const esc = useKeyPress('Escape')
  const { isMedium, isLarge } = useCurrentBreakpoint()

  // look at location and set whether button bg is black or black-c (contact, cv, fellowships)

  useEffect(() => {
    esc && isOpen && setIsOpen(false)
  }, [esc, isOpen])
  return (
    <>
      <Helmet bodyAttributes={{ class: `${isOpen ? 'no-scroll' : ''}` }} />
      <div
        className={`
          ${isOpen ? '' : 'pointer-events-none'}
          fixed z-30 inset-0 flex`}
      >
        {isMedium && (
          <button
            className={`absolute h-full w-full inset-0 block transition-all
              ${
                isOpen
                  ? 'opacity-50 visible'
                  : 'opacity-0 pointer-events-none invisible'
              }`}
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
          </button>
        )}
        <div
          className={`
            flex flex-col justify-top transition-transform duration-300 transform
            ${isLarge ? 'pl-20 pr-96' : 'flex-1 px-6'}
            ${isOpen ? '' : '-translate-x-full'}
          `}
          style={{ marginLeft: isMedium ? '41px' : '' }}
        >
          <div className="left-0 top-0 bottom-0 absolute flex">
            <GatsbyImage image={bgImage} alt="" objectFit="cover" />
          </div>
          <nav
            className={`
              relative z-10
              ${isMedium ? 'mt-11' : 'mt-6'}
            `}
          >
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              <Icon name="logo" className="text-white" />
            </Link>
            <ul className="pt-12 md:pt-s">
              {NAV_ITEMS.map(item => (
                <li key={item.path} className="f-1">
                  <Link
                    style={{
                      textDecorationThickness: '4px',
                      textUnderlineOffset: '4px',
                    }}
                    className="pb-5 block text-white hover:underline"
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

      {isMedium ? (
        <div
          className="fixed z-30 flex items-start justify-center left-0 top-0 bottom-0"
          style={{ width: '41px' }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`z-10 flex-1 self-stretch transition-colors ${menuBgClass}`}
          >
            <span
              className="absolute top-11 text-white left-[10px] transform -translate-x-full  origin-top-right -rotate-90 flex items-center"
              style={{ lineHeight: 1, fontSize: '20.5px' }}
            >
              EXPLORE{' '}
              <div className="transform rotate-90 ml-3">
                <Icon
                  name={isOpen ? 'menuClose' : 'menu'}
                  className="w-4 h-4"
                />
              </div>
            </span>
          </button>
        </div>
      ) : (
        <div className="fixed z-30 top-0 left-0 right-0 h-17 flex items-center justify-end px-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`z-10 transition-colors`}
          >
            <span className="sr-only">menu {isOpen ? 'close' : 'open'}</span>
            <Icon
              name={isOpen ? 'menuClose' : 'menu'}
              className="w-5 h-5 text-white"
            />
          </button>
        </div>
      )}
    </>
  )
}
