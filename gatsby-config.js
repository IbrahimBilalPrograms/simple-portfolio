module.exports = {
    siteMetadata: {
        title: `portfolio: willjw3`,
        description: `Portfolio of Will Ward`,
        author: `willjw3`
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `tech`,
            path: `${__dirname}/tech`
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `projects`,
            path: `${__dirname}/projects`
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `limelight`,
                `Arimo`,
                `Rajdhani`,
                `Inter`,
                `Inconsolata`,
                `Roboto Slab`,
                `Roboto Mono`,
                `Roboto`,
                `Cabin`,
                `League Spartan`,
                `Futura PT`,
                `Monda`,
                `Rubik`,
                `Raleway`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
        }
    ]
}