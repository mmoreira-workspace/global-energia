import { defineType, defineField } from "sanity";

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        defineField({
            name: 'teaser',
            title: 'Teaser Principal (Home)',
            type: 'reference',
            to: [{ type: 'teaser' }],
        }),
        defineField({
            name: 'sobreNos',
            title: 'Sobre Nós',
            type: 'reference',
            to: [{ type: 'sobreNos' }], 
        }),
        defineField({
            name: 'projetos',
            title: 'Projetos',
            type: 'reference',
            to: [{ type: 'projetos' }], 
        }),
        defineField({
            name: 'faq',
            title: 'Perguntas Frequentes',
            type: 'reference',
            to: [{ type: 'faq' }], 
        }),
    ],
});