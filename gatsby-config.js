const path = require('path');
module.exports = {
  siteMetadata: {
    title: `Nazar Vovk`,
    titleLong: `Nazar Vovk – Web Developer`,
    description: `Nazar Vovk, frontend-oriented fullstack developer. I work with JavaScript, React and many more technologies to bring your ideas to life.`,
    authorGithub: `@nazarvovk`,
    authorGithubLink: `https://github.com/nazarvovk`,
    authorTwitter: `@nvovk_`,
    authorTwitterLink: `https://twitter.com/nvovk_`,
    locale: `en_US`,
    url: `https://nvovk.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nazar Vovk`,
        short_name: `Nazar Vovk`,
        start_url: `/`,
        background_color: `#060719`,
        theme_color: `#060719`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-153567385-1',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
  ],
};
