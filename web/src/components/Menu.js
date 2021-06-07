import React, { useState } from 'react'
import { Link } from 'gatsby'

const NAV_ITEMS = [
  { path: '/', label: 'About Mary Ann' },
  { path: '/work', label: 'Work' },
  { path: '/exhibitions', label: 'Exhibitions' },
  { path: '/press', label: 'Press' },
  { path: '/fellowships', label: 'Fellowships' },
  { path: '/contact', label: 'Contact' },
  { path: '/cv', label: 'CV' },
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="fixed z-10 flex items-start justify-center left-0 top-0 bottom-0"
      style={{ width: '41px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-10 flex-1 self-stretch bg-black"
      >
        <span
          className="absolute top-11 text-white transform -translate-x-full origin-right -rotate-90"
          style={{ lineHeight: 0 }}
        >
          EXPLORE
        </span>
      </button>

      {/* Page Links */}
      <div
        className={`absolute inset-0 flex-1 pt-s pl-20 transition-transform duration-300 transform ${
          isOpen ? '' : '-translate-x-full'
        }`}
        style={{ width: '60vw', marginLeft: '41px', backgroundColor: 'green' }}
      >
        <nav>
          <ul>
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
  )
}
