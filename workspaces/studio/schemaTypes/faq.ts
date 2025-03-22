import { defineField } from "sanity";

export default ({
    name: 'faq',
    title: 'Perguntas Frequentes',
    type: 'document',
    fields: [
        defineField({
            name: 'tituloFaq',
            title: 'Título Pergunta Frequentes',
            type: 'string',
        }),
        defineField({
            name: 'faq',
            title: 'Perguntas Frequentes',
            type: 'array',
            of: [{ type: 'perguntaResposta'}],
        }),
    ],
});