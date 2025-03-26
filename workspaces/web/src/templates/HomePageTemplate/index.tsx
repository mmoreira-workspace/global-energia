import { graphql, PageProps } from "gatsby";
import React from "react";
import "./index.scss";

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
            buttons: {
                buttonText: string;
                buttonUrl: string;
            }[];
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
            title: string;
            listOfFaq: {
                question: string;
                answer: string;
            }[];
        };
    };
}

export default function HomePage({ data }: PageProps<IHopePageProps>) {
    const { title, teaser, sobreNos, projetos, faq } = data.sanityHomePage;

    return (
        <>
            <main>
                {/* Main Teaser Home */}
                <section className="container home-teaser">
                    <img src={teaser.teaserBackground.asset.url} alt="Teaser Background" className="image home-teaser-image-bg"/>
                    <div className="container container-text">
                        <h1 className="text simple-h1">
                            {teaser.homeTitle}
                        </h1>
                        <img src={teaser.logo.asset.url} alt="Logo" className="image home-teaser-logo"/>
                    </div>
                    <div className="container container-box">
                        {teaser.buttons.map((button, index) => (
                            <div key={index} className="button">
                                <a href={button.buttonUrl} className="button-link">{button.buttonText}</a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Us */}
                <section className="container">
                    <div className="container">
                        <h2 className="text simple-h2">{sobreNos.title}</h2>
                        <p className="text simple-paragraph">{sobreNos.description}</p>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="container">
                    <div className="container">
                        <h2 className="text simple-h2">{projetos.title}</h2>
                        <p className="text simple-paragraph">{projetos.description}</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="container">
                    <h2 className="text simple-h2">{faq.title}</h2>
                    {faq.listOfFaq.map((item, index) => (
                        <div key={index} className="container">
                            <h3 className="text simple-h3">{item.question}</h3>
                            <p className="text simple-paragraph">{item.answer}</p>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}