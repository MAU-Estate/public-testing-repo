// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          defaultQuality: 50,
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        replaceAttrValues: {
          '#000000': 'currentColor',
          '#000': 'currentColor',
        },
      },
    },
    `gatsby-plugin-modal-routing-3`,
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        ...clientConfig.sanity,
        customImageTypes: ['SanityPreviewImage', 'SanityFigure'],
        defaultImageConfig: {
          quality: 35,
          maxWidth: 1000,
          format: 'webp',
          fit: 'clip',
          auto: 'format',
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
}
