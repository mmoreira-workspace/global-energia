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
                <section className="relative bg-red-500">
                    <img src={teaser.teaserBackground.asset.url} alt="Teaser Background" className='absolute w-full h-full object-cover'/>
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold">
                            {teaser.homeTitle}
                        </h1>
                        <img src={teaser.logo.asset.url} alt="Logo"/>
                    </div>
                    <div>
                        {teaser.buttons.map((button, index) => (
                            <div key={index}>
                                <a href={button.buttonUrl}>{button.buttonText}</a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Us */}
                <section>
                    <div>
                        <h2>{sobreNos.title}</h2>
                        <p>{sobreNos.description}</p>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <div>
                        <h2>{projetos.title}</h2>
                        <p>{projetos.description}</p>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2>{faq.title}</h2>
                    {faq.listOfFaq.map((item, index) => (
                        <div key={index}>
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}