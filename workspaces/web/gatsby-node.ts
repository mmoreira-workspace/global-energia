import {GatsbyNode, graphql} from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode["createPages"] = async ({
    graphql, actions
}) => {
    const {createPage} = actions

    const queryResponse = await graphql(`
        query NodesQuery {
            allSanityHomePage {
                nodes {
                    _id
                }
            }
            allSanityProjectPage {
                nodes {
                    _id
                }
            }
        }
    `);

    if(queryResponse.errors){
        throw queryResponse.errors;
    }

    const homePage: any[] = queryResponse.data.allSanityHomePage.nodes ?? [];

    homePage.forEach(node => {
        createPage({
            path: `/`,
            component: path.resolve("./src/templates/HomePageTemplate/index.tsx"),
            context: { _id: node._id },
        });
    });
};
