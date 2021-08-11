import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Footer from './Footer'
import Menu from './Menu'
import Icon from './Icon'
import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint'

const Layout = ({ location, children, className = '' }) => {
  // const isHome = location.pathname === '/'
  // const pathname = isHome ? 'home' : location.pathname.slice(1)
  // const cleanedPathname = pathname.replace(/\//i, '')

  const { isMedium } = useCurrentBreakpoint()

  let menuBgClass
  switch (location.pathname) {
    case '/contact':
    case '/cv':
    case '/fellowships':
      menuBgClass = 'bg-black-c'
      break
    default:
      menuBgClass = 'bg-black'
      break
  }

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
        <div className={`flex flex-col flex-1`}>
          <Menu
            menuBgClass={menuBgClass}
            bgImage={sanitySiteSettings.menuBgImage.asset.gatsbyImageData}
          />

          <div
            className="flex flex-col flex-1 relative"
            style={{ marginLeft: isMedium ? '41px' : '' }}
          >
            <header className="pt-a absolute z-10 left-0 right-0">
              <div className="container">
                <Link to="/" className="text-white">
                  <Icon id="logo" name="logo" />
                </Link>
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
