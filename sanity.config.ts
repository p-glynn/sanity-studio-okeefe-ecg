import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {media} from 'sanity-plugin-media';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes';
import {structure} from './structure';

export default defineConfig({
    name: 'default',
    title: "O'Keefe ECG",

    projectId: '3g00hitf',
    dataset: 'production',

    plugins: [structureTool({structure}), visionTool(), media()],

    schema: {
        types: schemaTypes,
    },
});
