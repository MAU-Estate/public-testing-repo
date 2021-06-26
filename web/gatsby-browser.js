/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ContextProvider } from './src/context'
import Layout from './src/components/Layout'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
