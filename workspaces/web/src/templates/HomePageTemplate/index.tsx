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
        teaser: {
            _id: string;
            homeTitle: string;
            logo: {
                asset: {
                    url: string;
                };
            };
            teaserBackground: {
                asset: {
                    url: string;
                };
            };
            orcamentoBotao: string;
            urlBotao: string;
        };
        sobreNos: {
            _id: string;
            title: string;
            description: string;
        };
        projetos: {
            _id: string;
            title: string;
            description: string;
        };
        faq: {
            _id: string;
            question: string;
            answer: string;
        };
    };
}

export default function HomePage({ data }: PageProps<IHopePageProps>) {
    const { title, teaser, sobreNos, projetos, faq } = data.sanityHomePage;

    return (
        <>
            <main>
                <section>
                    <img src={teaser.teaserBackground.asset.url} alt="Teaser Background" />
                    <div>
                        <h1>
                            {teaser.homeTitle}
                        </h1>
                        <img src={teaser.logo.asset.url} alt="Logo" />
                    </div>
                    <div>
                        <p>{teaser.orcamentoBotao}</p>
                        <a href={teaser.urlBotao}></a>
                    </div>
                </section>
            </main>
        </>

    )
}