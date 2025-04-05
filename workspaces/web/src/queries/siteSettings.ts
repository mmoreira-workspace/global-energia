import { graphql } from "gatsby";

export const siteSettingsQuery = graphql`
  query HomePageAndSettingsQuery($_id: String) {
    sanityHomePage(_id: { eq: $_id }) {
      teaser {
        homeTitle
        teaserBackground {
          asset {
            url
          }
        }
        buttons {
          buttonText
          buttonUrl
        }
      }
    }

    sanitySiteSettings {
      logo {
        asset {
          url
        }
      }
      headerButtons {
        buttonText
        buttonUrl
      }
      footerText
    }
  }
`;