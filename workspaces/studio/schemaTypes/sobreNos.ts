import { defineType, defineField } from "sanity";

export default defineType({
    name: 'sobreNos',
    title: 'Sobre Nós',
    type: 'document',
    fields: [
        defineField({
            name: 'tituloSobreNos',
            title: 'Título Sobre Nós',
            type: 'string',
            description: 'Ex: Sobre Nós',
        }),
        defineField({
            name: 'imagemSobreNos',
            title: 'Imagem Sobre Nós',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'descricaoSobreNos',
            title: 'Descricao Sobre Nós',
            type: 'string',
        }),
    ],
});