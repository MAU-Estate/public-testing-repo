import React from 'react'

import Footer from './Footer'
import Menu from './Menu'

const Layout = ({ children, className = '' }) => {
  // const isHome = location.pathname === '/'
  // const pathname = isHome ? 'home' : location.pathname.slice(1)
  // const cleanedPathname = pathname.replace(/\//i, '')

  return (
    <div className={`overflow-x-hidden flex flex-col flex-1`}>
      <Menu />
      <div
        className="flex flex-col flex-1 relative"
        style={{ marginLeft: '41px' }}
      >
        <header className="pt-a absolute z-10 left-0 right-0">
          <div className="container text-white">Mary Ann Unger Estate</div>
        </header>
        <main className={`${className}`}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
