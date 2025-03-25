import { graphql } from "gatsby";

export const query = graphql`
    fragment HomePageQuery on SanityHomePage {
        _id
        title
        teaser {
            _id
            homeTitle
            logo {
                asset {
                    url
                }
            }
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
        sobreNos {
            _id
            title
            description
        }
        projetos {
            _id
            title
            description
        }
        faq {
            _id
            title
            listOfFaq {
                question
                answer
            }
        }
        # image {
        #     asset {
        #         url
        #     }
        # }
    },
`;