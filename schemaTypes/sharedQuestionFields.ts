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
        title: 'Question Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
        fieldset: 'basicFields',
    }),
    defineField({
        title: 'Question Text (Explanation)',
        name: 'text',
        type: 'array',
        of: [{type: 'block'}],
        fieldset: 'basicFields',
    }),
    defineField({
        title: 'Secondary Question Text',
        name: 'secondaryText',
        type: 'text',
        fieldset: 'basicFields',
    }),
    defineField({
        title: 'Correct Answers (Deprecated)',
        name: 'correctAnswersDeprecated',
        type: 'array',
        of: [{type: 'block'}],
        fieldset: 'basicFields',
        deprecated: {reason: 'Mark the correct answers in the individual diagnosis blocks below instead'},
        readOnly: true,
    }),
    defineField({
        title: 'Images',
        name: 'images',
        type: 'array',
        of: [{type: 'image'}],
        fieldset: 'mediaFields',
    }),
    defineField({
        title: 'Marked Images',
        name: 'marked_images',
        type: 'array',
        of: [{type: 'image'}],
        fieldset: 'mediaFields',
    }),
    defineField({
        title: 'Videos',
        name: 'videos',
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
