import { graphql, PageProps } from "gatsby";
import React, { useState } from "react";
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
            buttons: any;
            _id: string;
            title: string;
            description: string;
        };
        projetos: {
            _id: string;
            title: string;
            description: string;
            image2: {
                asset: {
                    url: string;
                };
            };
            image1: {
                asset: {
                    url: string;
                };
            };
            buttons: {
                buttonText: string;
                buttonUrl: string;
            }[];
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
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <>
            <main>
                {/* Main Teaser Home */}
                <section className="container home-teaser">
                    <img src={teaser.teaserBackground.asset.url} alt="Teaser Background" className="image home-teaser-image-bg" />
                    <div className="container container-text">
                        <h1 className="text simple-h1">
                            {teaser.homeTitle}
                        </h1>
                        <img src={teaser.logo.asset.url} alt="Logo" className="image home-teaser-logo" />
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
                <section className="container about-us">
                    <div className="container container-about-us">
                        <h2 className="text simple-h2">{sobreNos.title}</h2>
                        <p className="text simple-paragraph">{sobreNos.description}</p>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="container projects">
                    <div className="container container-projects">
                        <h2 className="text simple-h2">{projetos.title}</h2>
                        <div className="project-images">
                            {projetos.image1 && (
                                <img
                                    src={projetos.image1.asset.url}
                                    alt="Project Image 1"
                                    className="project-image"
                                />
                            )}
                            {projetos.image2 && (
                                <img
                                    src={projetos.image2.asset.url}
                                    alt="Project Image 2"
                                    className="project-image"
                                />
                            )}
                        </div>
                        {Array.isArray(projetos.buttons) && projetos.buttons.map((button, index) => (
                            <div key={index} className="button">
                                <a
                                    href={button.buttonUrl}
                                    className="button-link"
                                >
                                    {button.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="container faq">
                    <h2 className="text simple-h2">{faq.title}</h2>
                    {faq.listOfFaq.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                                style={{ cursor: "pointer", fontWeight: "bold" }}
                            >
                                {item.question}
                            </div>

                            {openFaqIndex === index && (
                                <div className="faq-answer" style={{ marginTop: "8px", paddingLeft: "16px" }}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}