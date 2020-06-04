module.exports = {
  siteMetadata: {
    title: `HL7-FHIR Implementation Guides`,
    description: `Description for SEO / Google`,
    author: `CIT`,
    menuLinks: [
      { name: 'About', link: '/about' },
      { name: 'How To', link: '/howto' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images`}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages/`}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `data`, path: `${__dirname}/src/data/`, ignore: [`**/\.*`]}
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
}
