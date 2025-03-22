import { defineField } from "sanity";

export default ({
    name: 'faq',
    title: 'Perguntas Frequentes',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Pergunta',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Respostas',
            type: 'text'
        }),
    ],
});