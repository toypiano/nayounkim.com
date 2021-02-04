module.exports = {
  siteMetadata: {
    title: `Nayoun Kim Illustrator`,
    description: `Illustrator Nayoun Kim's Website`,
    author: `Sid Hayoun Lee`,
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nayoun Kim`,
        short_name: `N`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-portal',
      options: {
        key: 'sidebar-root',
        id: 'sidebar-root',
      },
    },
    {
      resolve: 'gatsby-plugin-portal',
      options: {
        key: 'backdrop-root',
        id: 'backdrop-root',
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve('./src/components/layout.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyCzkljDHvmPSVRtoknLENk2OjP6l6MD2OQ',
          authDomain: 'nayounkim-likes.firebaseapp.com',
          projectId: 'nayounkim-likes',
          storageBucket: 'nayounkim-likes.appspot.com',
          messagingSenderId: '444459006097',
          appId: '1:444459006097:web:d18e4127da70220f51e730',
          measurementId: 'G-W0X88HJS7L',
        },
      },
    },
  ],
}
