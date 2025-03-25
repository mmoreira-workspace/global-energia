import { defineField } from "sanity";

export default ({
    name: 'faq',
    title: 'Perguntas Frequentes',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            description: 'Ex. "Perguntas Frequentes"',
            type: 'string',
        }),
        defineField({
            name: 'listOfFaq',
            title: 'Perguntas Frequentes',
            type: 'array',
            of: [{
                type: 'answerAndQuestions'
            }]
        })
    ]
});