import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './Footer'
import Menu from './Menu'
import Icon from './Icon'

const Layout = ({ children, className = '' }) => {
  // const isHome = location.pathname === '/'
  // const pathname = isHome ? 'home' : location.pathname.slice(1)
  // const cleanedPathname = pathname.replace(/\//i, '')

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          sanitySiteSettings {
            menuBgImage {
              asset {
                gatsbyImageData(fit: FILLMAX)
              }
            }
          }
        }
      `}
      render={({ sanitySiteSettings }) => (
        <div className={`overflow-x-hidden flex flex-col flex-1`}>
          <Menu
            bgImage={sanitySiteSettings.menuBgImage.asset.gatsbyImageData}
          />
          <div
            className="flex flex-col flex-1 relative"
            style={{ marginLeft: '41px' }}
          >
            <header className="pt-a absolute z-10 left-0 right-0">
              <div className="container text-white">
                <Icon name="logo" />
              </div>
            </header>
            <main className={`${className}`}>{children}</main>
            <Footer />
          </div>
        </div>
      )}
    />
  )
}

export default Layout
