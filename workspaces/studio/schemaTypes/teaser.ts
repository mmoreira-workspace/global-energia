import { defineType, defineField } from "sanity";

export default defineType({
    name: 'teaser',
    title: 'Teaser Principal',
    type: 'document',
    fields: [
        defineField({
            name: 'homeTitle',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'teaserBackground',
            title: 'Imagem de Fundo',
            type: 'image',
        }),
        defineField({
            name: 'orcamentoBotao',
            title: 'Botao de Orçamento',
            type: 'string',
            description: 'Ex: Solicitar seu orçamento',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'urlBotao',
            title: 'URL do Botao',
            type: 'url',
            description: 'Link whats',
            validation: Rule => Rule.required().uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        }),
    ],
});