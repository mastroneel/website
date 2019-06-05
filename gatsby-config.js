module.exports = {
  siteMetadata: {
    title: 'CTR Capital',
    author: 'Tamas Kertesz',
    description:
      'CTR Capital - A community of socially-responsible, impact investors who fund initiatives that raise human consciousness, generating Return on Investment and Return on Impact a result called “Double ROI”.',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'json-content',
        path: `./src/content/json/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${ __dirname }/src/content/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `layout`,
        path: `${ __dirname }/src/pages`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/layout.js`),
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 400,
              className: 'anchor-link',
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
        ],
        defaultLayouts: {
          layout: require.resolve(`./src/templates/page.js`),
        },
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1348,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Muli:400,700,900'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ctr-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128586738-1',
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MQNKZBH',
        includeInDevelopment: false,
        // Specify optional GTM environment details.
        gtmAuth: 'ryZWMYNq_FGo_YbcgchEXg',
        gtmPreview: 'env-2',
        dataLayerName: 'GTM-MQNKZBH',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://capital.us20.list-manage.com/subscribe/post?u=d9334738aae0dbbf985cec350&amp;id=d1125285d4',
      },
    },
  ],
}
