import { graphql, PageProps } from "gatsby";
import React from "react";

export const data = graphql`
    query($_id: String) {
        sanityHomePage(_id: {eq: $_id}) {
            ...HomePageQuery
        }
    }
`;

export interface IHopePageProps {
    sanityHomePage: {
        title: string;
        teaser: string;
    };
}

export default function HomePage({ data }: PageProps<IHopePageProps>) {
    return (
        <>
            <main>
                {data.sanityHomePage.title}
            </main>
        </>

    )
}