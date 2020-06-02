require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 
module.exports = {
  siteMetadata: {
    title: `GitHub Search`,
    description: `Code project`,
    author: `@stuart_wood`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  /* {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "GITHUB",
        // This is the field under which it's accessible
        fieldName: "github",
        // URL to query from
        url: "https://api.github.com/graphql",
        headers: function(){
          // Learn about environment variables: https://gatsby.dev/env-vars
         return {Authorization: `Bearer ${process.env.GITHUB_TOKEN}`}
        },
      },
    }, */ 
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
