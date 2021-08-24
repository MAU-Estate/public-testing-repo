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

export default function Menu({ bgImage, menuBgClass, onMenuToggle, isOpen }) {
  const esc = useKeyPress('Escape')
  const { atMedium, isLarge } = useCurrentBreakpoint()

  const handleOnMenuToggle = (value = !isOpen) => {
    console.log(value)
    onMenuToggle(value)
  }

  useEffect(() => {
    if (esc && isOpen) {
      handleOnMenuToggle(false)
    }
  }, [esc, isOpen])

  return (
    <>
      {isOpen && <Helmet bodyAttributes={{ class: 'no-scroll' }} />}
      <div
        className={`
          ${isOpen ? '' : 'pointer-events-none'}
          fixed z-30 inset-0 flex`}
      >
        {atMedium && (
          <button
            className={`absolute h-full w-full inset-0 block transition-all
              ${
                isOpen
                  ? 'opacity-50 visible'
                  : 'opacity-0 pointer-events-none invisible'
              }`}
            onClick={() => handleOnMenuToggle(false)}
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
          style={{ marginLeft: atMedium ? '41px' : '' }}
        >
          <div className="left-0 top-0 bottom-0 absolute flex">
            <GatsbyImage image={bgImage} alt="" objectFit="cover" />
          </div>
          <nav
            className={`
              relative z-10
              ${atMedium ? 'mt-11' : 'mt-6'}
            `}
          >
            {atMedium && (
              <Link to="/" onClick={handleOnMenuToggle}>
                <Icon name="logo" className="text-white" />
              </Link>
            )}
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
                    onClick={handleOnMenuToggle}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {atMedium && (
        <div
          className="fixed z-30 flex items-start justify-center left-0 top-0 bottom-0"
          style={{ width: '41px' }}
        >
          <button
            onClick={() => handleOnMenuToggle()}
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
      )}
    </>
  )
}

// : (
//   <div
//     className={`
//       h-17 flex items-center justify-between px-6
//       transition-colors
//       ${isPinned ? 'bg-white' : ''}
//     `}
//   >
//     <Link
//       to="/"
//       className={`transition-colors ${
//         isPinned ? 'text-black' : 'text-white'
//       }`}
//     >
//       <Icon id="logo" name="logo" />
//     </Link>
//     <button
//       onClick={() => setIsOpen(!isOpen)}
//       className={`z-10 transition-colors`}
//     >
//       <span className="sr-only">menu {isOpen ? 'close' : 'open'}</span>
//       <Icon
//         name={isOpen ? 'menuClose' : 'menu'}
//         className={`
//           Menu-toggle w-5 h-5 transition-colors
//           ${isPinned ? '!text-black' : '!text-white'}
//         `}
//       />
//     </button>
//   </div>
// )}
