import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `web`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "j87m344w",
      "dataset": "production",
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Inter`,
          file: `https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap`,
        },
        {
          name: `Roboto Condensed`,
          file: `https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap`,
        },
      ],
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", `gatsby-plugin-sass`]
};

export default config;
