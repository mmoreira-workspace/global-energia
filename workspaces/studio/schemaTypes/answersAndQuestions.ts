import { defineField } from "sanity";

export default ({
    name: 'answerAndQuestions',
    title: 'Perguntas e Respostas',
    type: 'object',
    fields: [
        defineField({
            name: 'question',
            title: 'Pergunta',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Resposta',
            type: 'text',
        }),
    ],
});