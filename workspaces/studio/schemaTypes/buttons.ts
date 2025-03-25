import { defineField } from "sanity";

export default ({
    name: 'buttons',
    title: 'Buttons',
    type: 'object',
    fields: [
        defineField({
            name: 'buttonText',
            title: 'Texto do Botao',
            type: 'string',
        }),
        defineField({
            name: 'buttonUrl',
            title: 'URL do botao ou página interna',
            type: 'url',
            validation: Rule => Rule.required().uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
    ],
});