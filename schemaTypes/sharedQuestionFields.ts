import {defineField} from 'sanity';

export const sharedQuestionFields = [
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
        fieldset: 'basicFields',
    }),
    defineField({
        name: 'title',
        type: 'string',
        title: 'Question Title',
        validation: (Rule) => Rule.required(),
        fieldset: 'basicFields',
    }),
    defineField({
        name: 'text',
        type: 'array',
        title: 'Question Text (Explanation)',
        of: [{type: 'block'}],
        fieldset: 'basicFields',
    }),
    defineField({
        name: 'secondaryText',
        type: 'text',
        title: 'Secondary Question Text',
        fieldset: 'basicFields',
    }),
    defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image'}],
        fieldset: 'mediaFields',
    }),
    defineField({
        name: 'marked_images',
        title: 'Marked Images',
        type: 'array',
        of: [{type: 'image'}],
        fieldset: 'mediaFields',
    }),
    defineField({
        name: 'videos',
        title: 'Videos',
        type: 'array',
        of: [{type: 'file'}],
        fieldset: 'mediaFields',
    }),
];

export const sharedQuestionFieldsets = [
    {
        name: 'basicFields',
        title: 'Basic Question Fields (title, text, etc.)',
        options: {collapsible: true, collapsed: false},
    },
    {
        name: 'mediaFields',
        title: 'Question Media Fields (images / videos)',
        options: {collapsible: true, collapsed: false},
    },
];
