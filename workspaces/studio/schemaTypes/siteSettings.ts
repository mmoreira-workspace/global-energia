import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo do Site',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'headerButtons',
      title: 'Botões do Header',
      type: 'array',
      of: [{ type: 'headerButton' }], 
    }),
    defineField({
      name: 'footerText',
      title: 'Texto do Footer',
      type: 'string',
    }),
  ],
})
