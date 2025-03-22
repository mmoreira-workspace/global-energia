import { defineType, defineField } from "sanity";

export default defineType({
    name: 'perguntaResposta',
    title: 'Perguntas e Resposta',
    type: 'object',
    fields: [
        defineField({
            name: 'pergunta',
            title: 'Resposta',
            type: 'text',
        }),
        defineField({
            name: 'resposta',
            title: 'Resposta',
            type: 'text',
        })
    ],
});