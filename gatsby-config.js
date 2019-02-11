module.exports = {
  siteMetadata: {
    title: 'CTR Capital',
    author: 'Tamaz Kertez',
    description: 'CTR Capital - A community of socially-responsible, impact investors who fund initiatives that raise human consciousness, generating Return on Investment and Return on Impact a result called “Double ROI”.',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/src/markdown`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
