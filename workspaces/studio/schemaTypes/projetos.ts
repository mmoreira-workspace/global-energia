import { defineType, defineField } from "sanity";

export default defineType({
    name: 'projetos',
    title: 'Projetos',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Project Description',
            type: 'text'
        }),
        defineField({
            name: 'image1',
            title: 'Imagem 1',
            type: 'image'
        }),
        defineField({
            name: 'image2',
            title: 'Imagem 2',
            type: 'image'
        })
    ],
});