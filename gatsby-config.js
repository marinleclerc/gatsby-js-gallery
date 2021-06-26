module.exports = {
  siteMetadata: {
    title: "Gallery",
  },
  plugins: ["gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
  ]
};
