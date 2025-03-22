import { defineType, defineField } from "sanity";

export default defineType({
    name: 'projetos',
    title: 'Projetos',
    type: 'document',
    fields: [
        defineField({
            name: 'imagemProjeto',
            title: 'Imagem do Projeto',
            type: 'image',
        }),
        defineField({
            name: 'imagemProjeto2',
            title: 'Imagem do Projeto 2',
            type: 'image',
        }),
        defineField({
            name: 'textoBotao',
            title: 'Texto do Botão',
            type: 'string',
            description: 'Ex: Veja todos nossos projetos',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'linkInterno',
            title: 'Link Interno',
            type: 'reference',
            to: [{ type: 'page' }],
            description: 'Selecione a página interna para onde o botão deve redirecionar',
            // validation: Rule => Rule.required(),
        }),
    ],
});