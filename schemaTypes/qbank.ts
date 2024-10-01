import {defineType, defineField} from 'sanity';

import {sharedQuestionFields, sharedQuestionFieldsets} from './_sharedQuestionFields';

export default defineType({
    title: 'QBank Question',
    name: 'qbank',
    type: 'document',
    fieldsets: [
        ...sharedQuestionFieldsets,
        {
            title: 'Question 1',
            name: 'q1',
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
        {
            title: 'Question 2',
            name: 'q2',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            title: 'Question 3',
            name: 'q3',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            title: 'Question 4',
            name: 'q4',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            title: 'Question 5',
            name: 'q5',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
    fields: [
        defineField({
            title: 'Question Number (Index)',
            name: 'index',
            type: 'string',
            description: 'The question number (index) for this QBank question (e.g. "1", "2A", "2B", "3", etc.)',
            validation: (Rule) => Rule.required().regex(/^[0-9A-Z]+$/),
        }),
        // base fields (title, text, images, videos, etc.)
        ...sharedQuestionFields,
        // question 1 fields
        defineField({
            name: 'q1Text',
            title: 'Question 1 Text',
            type: 'string',
            fieldset: 'q1',
        }),
        defineField({
            name: 'q1A',
            title: 'Question 1 Answer A',
            type: 'string',
            fieldset: 'q1',
        }),
        defineField({
            name: 'q1B',
            title: 'Question 1 Answer B',
            type: 'string',
            fieldset: 'q1',
        }),
        defineField({
            name: 'q1C',
            title: 'Question 1 Answer C',
            type: 'string',
            fieldset: 'q1',
        }),
        defineField({
            name: 'q1D',
            title: 'Question 1 Answer D',
            type: 'string',
            fieldset: 'q1',
        }),
        defineField({
            name: 'q1E',
            title: 'Question 1 Answer E',
            type: 'string',
            fieldset: 'q1',
        }),
        defineField({
            name: 'q1CorrectAnswer',
            title: 'Question 1 Correct Answer',
            type: 'string',
            fieldset: 'q1',
            options: {
                list: [
                    {title: 'A', value: 'q1A'},
                    {title: 'B', value: 'q1B'},
                    {title: 'C', value: 'q1C'},
                    {title: 'D', value: 'q1D'},
                    {title: 'E', value: 'q1E'},
                ],
                layout: 'radio',
            },
            validation: (Rule) =>
                Rule.custom((fieldValue, context) => {
                    // Get the value of the question text
                    const q1Value = context?.document?.q1Text;

                    // If question has text but no correct answer is set, show an error
                    if (q1Value && !fieldValue) {
                        return 'Please mark a correct answer for Question 1';
                    }

                    // Return true if validation passes
                    return true;
                }),
        }),
        // question 2 fields
        defineField({
            name: 'q2Text',
            title: 'Question 2 Text',
            type: 'string',
            fieldset: 'q2',
        }),
        defineField({
            name: 'q2A',
            title: 'Question 2 Answer A',
            type: 'string',
            fieldset: 'q2',
        }),
        defineField({
            name: 'q2B',
            title: 'Question 2 Answer B',
            type: 'string',
            fieldset: 'q2',
        }),
        defineField({
            name: 'q2C',
            title: 'Question 2 Answer C',
            type: 'string',
            fieldset: 'q2',
        }),
        defineField({
            name: 'q2D',
            title: 'Question 2 Answer D',
            type: 'string',
            fieldset: 'q2',
        }),
        defineField({
            name: 'q2E',
            title: 'Question 2 Answer E',
            type: 'string',
            fieldset: 'q2',
        }),
        defineField({
            name: 'q2CorrectAnswer',
            title: 'Question 2 Correct Answer',
            type: 'string',
            fieldset: 'q2',
            options: {
                list: [
                    {title: 'A', value: 'q2A'},
                    {title: 'B', value: 'q2B'},
                    {title: 'C', value: 'q2C'},
                    {title: 'D', value: 'q2D'},
                    {title: 'E', value: 'q2E'},
                ],
                layout: 'radio',
            },
            validation: (Rule) =>
                Rule.custom((fieldValue, context) => {
                    // Get the value of the question text
                    const q2Value = context?.document?.q2Text;

                    // If question has text but no correct answer is set, show an error
                    if (q2Value && !fieldValue) {
                        return 'Please mark a correct answer for Question 2';
                    }

                    // Return true if validation passes
                    return true;
                }),
        }),
        // question 3 fields
        defineField({
            name: 'q3Text',
            title: 'Question 3 Text',
            type: 'string',
            fieldset: 'q3',
        }),
        defineField({
            name: 'q3A',
            title: 'Question 3 Answer A',
            type: 'string',
            fieldset: 'q3',
        }),
        defineField({
            name: 'q3B',
            title: 'Question 3 Answer B',
            type: 'string',
            fieldset: 'q3',
        }),
        defineField({
            name: 'q3C',
            title: 'Question 3 Answer C',
            type: 'string',
            fieldset: 'q3',
        }),
        defineField({
            name: 'q3D',
            title: 'Question 3 Answer D',
            type: 'string',
            fieldset: 'q3',
        }),
        defineField({
            name: 'q3E',
            title: 'Question 3 Answer E',
            type: 'string',
            fieldset: 'q3',
        }),
        defineField({
            name: 'q3CorrectAnswer',
            title: 'Question 3 Correct Answer',
            type: 'string',
            fieldset: 'q3',
            options: {
                list: [
                    {title: 'A', value: 'q3A'},
                    {title: 'B', value: 'q3B'},
                    {title: 'C', value: 'q3C'},
                    {title: 'D', value: 'q3D'},
                    {title: 'E', value: 'q3E'},
                ],
                layout: 'radio',
            },
            validation: (Rule) =>
                Rule.custom((fieldValue, context) => {
                    // Get the value of the question text
                    const q3Value = context?.document?.q3Text;

                    // If question has text but no correct answer is set, show an error
                    if (q3Value && !fieldValue) {
                        return 'Please mark a correct answer for Question 3';
                    }

                    // Return true if validation passes
                    return true;
                }),
        }),
        // question 4 fields
        defineField({
            name: 'q4Text',
            title: 'Question 4 Text',
            type: 'string',
            fieldset: 'q4',
        }),
        defineField({
            name: 'q4A',
            title: 'Question 4 Answer A',
            type: 'string',
            fieldset: 'q4',
        }),
        defineField({
            name: 'q4B',
            title: 'Question 4 Answer B',
            type: 'string',
            fieldset: 'q4',
        }),
        defineField({
            name: 'q4C',
            title: 'Question 4 Answer C',
            type: 'string',
            fieldset: 'q4',
        }),
        defineField({
            name: 'q4D',
            title: 'Question 4 Answer D',
            type: 'string',
            fieldset: 'q4',
        }),
        defineField({
            name: 'q4E',
            title: 'Question 4 Answer E',
            type: 'string',
            fieldset: 'q4',
        }),
        defineField({
            name: 'q4CorrectAnswer',
            title: 'Question 4 Correct Answer',
            type: 'string',
            fieldset: 'q4',
            options: {
                list: [
                    {title: 'A', value: 'q4A'},
                    {title: 'B', value: 'q4B'},
                    {title: 'C', value: 'q4C'},
                    {title: 'D', value: 'q4D'},
                    {title: 'E', value: 'q4E'},
                ],
                layout: 'radio',
            },
            validation: (Rule) =>
                Rule.custom((fieldValue, context) => {
                    // Get the value of the question text
                    const q4Value = context?.document?.q4Text;

                    // If question has text but no correct answer is set, show an error
                    if (q4Value && !fieldValue) {
                        return 'Please mark a correct answer for Question 4';
                    }

                    // Return true if validation passes
                    return true;
                }),
        }),
        // question 5 fields
        defineField({
            name: 'q5Text',
            title: 'Question 5 Text',
            type: 'string',
            fieldset: 'q5',
        }),
        defineField({
            name: 'q5A',
            title: 'Question 5 Answer A',
            type: 'string',
            fieldset: 'q5',
        }),
        defineField({
            name: 'q5B',
            title: 'Question 5 Answer B',
            type: 'string',
            fieldset: 'q5',
        }),
        defineField({
            name: 'q5C',
            title: 'Question 5 Answer C',
            type: 'string',
            fieldset: 'q5',
        }),
        defineField({
            name: 'q5D',
            title: 'Question 5 Answer D',
            type: 'string',
            fieldset: 'q5',
        }),
        defineField({
            name: 'q5E',
            title: 'Question 5 Answer E',
            type: 'string',
            fieldset: 'q5',
        }),
        defineField({
            name: 'q5CorrectAnswer',
            title: 'Question 5 Correct Answer',
            type: 'string',
            fieldset: 'q5',
            options: {
                list: [
                    {title: 'A', value: 'q5A'},
                    {title: 'B', value: 'q5B'},
                    {title: 'C', value: 'q5C'},
                    {title: 'D', value: 'q5D'},
                    {title: 'E', value: 'q5E'},
                ],
                layout: 'radio',
            },
            validation: (Rule) =>
                Rule.custom((fieldValue, context) => {
                    // Get the value of the question text
                    const q5Value = context?.document?.q5Text;

                    // If question has text but no correct answer is set, show an error
                    if (q5Value && !fieldValue) {
                        return 'Please mark a correct answer for Question 5';
                    }

                    // Return true if validation passes
                    return true;
                }),
        }),
    ],
    preview: {
        select: {
            index: 'index',
            title: 'title',
            images: 'images',
            markedImages: 'markedImages',
            videos: 'videos',
        },
        prepare(selection) {
            const {title, index, images, markedImages, videos} = selection;
            return {
                title: `QBank ${index}`,
                subtitle: title,
                media: () => images.length + markedImages.length + videos.length,
            };
        },
    },
});
