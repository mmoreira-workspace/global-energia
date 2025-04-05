import { graphql } from "gatsby";

export const ProjectPageQuery = graphql`
  fragment ProjectCardFields on SanityProjectPage {
    title
    slug {
      current
    }
    description
    location
    category
    mainImage {
      asset {
        url
      }
    }
  }

  query AllProjects {
    allSanityProjectPage(sort: { date: DESC }) {
      nodes {
        ...ProjectCardFields
      }
    }
  }
`;
