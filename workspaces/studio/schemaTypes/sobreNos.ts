import { defineType, defineField } from "sanity";

export default defineType({
    name: 'sobreNos',
    title: 'Sobre Nós',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título Sobre Nós',
            type: 'string',
            description: 'Ex: Sobre Nós',
        }),
        defineField({
            name: 'image',
            title: 'Imagem Sobre Nós',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Descricao Sobre Nós',
            type: 'string',
        }),
    ],
});