import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'headerButton',
  title: 'Botão do Header',
  type: 'object',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Texto do Botão',
      type: 'string',
    }),
    defineField({
      name: 'buttonUrl',
      title: 'URL do Botão',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
})
