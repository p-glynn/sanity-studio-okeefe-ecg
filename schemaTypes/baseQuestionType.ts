import {defineType, defineField} from 'sanity'

export const baseQuestionType = defineType({
  name: 'baseQuestion',
  title: 'Base Question',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Question Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'questionType',
      type: 'string',
      title: 'Question Type',
      options: {
        list: [
          {title: 'ECG', value: 'ecg'},
          {title: 'QBank', value: 'qbank'},
          {title: 'Echo', value: 'echo'},
          {title: 'Angiogram', value: 'angiogram'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Question Text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'marked_images',
      title: 'Marked Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'secondaryText',
      type: 'text',
      title: 'Secondary Question Text',
    }),
  ],
})
