import { graphql } from "gatsby";

export const query = graphql`
    fragment HomePageQuery on SanityHomePage {
        _id
        title
        # image {
        #     asset {
        #         url
        #     }
        # }
    },
`;