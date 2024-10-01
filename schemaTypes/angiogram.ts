import {defineType, defineField} from 'sanity';

import {sharedQuestionFields, sharedQuestionFieldsets} from './sharedQuestionFields';

export default defineType({
    title: 'Angiogram Question',
    name: 'angiogram',
    type: 'document',
    fieldsets: [
        ...sharedQuestionFieldsets,
        {
            name: 'normal_angiogram',
            title: 'Normal Angiogram',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'severe_stenosis',
            title: 'Severe Stenosis',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'moderate_stenosis',
            title: 'Moderate Stenosis',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'insignificant_stenosis',
            title: 'Insignificant Stenosis',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'total_occlusion',
            title: 'Total Occlusion',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'filled_by_collaterals',
            title: 'Filled by Collaterals',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'coronary_spasm',
            title: 'Coronary Spasm',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'myocardial_bridging',
            title: 'Myocardial Bridging',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'anomalous_coronary_origin',
            title: 'Anomalous Coronary Origin',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'coronary_fistula',
            title: 'Coronary Fistula',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'coronary_artery_thrombus_present',
            title: 'Coronary Artery Thrombus Present',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'bypass_graft',
            title: 'Bypass Graft',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'dissection',
            title: 'Dissection',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'severe_ectasia',
            title: 'Severe Ectasia / Aneurysm',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'stent_occluded',
            title: 'Occluded Coronary Stent',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'patent_coronary_stent',
            title: 'Patent Coronary Stent',
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
            description: 'The question number (index) for this Angiogram question (e.g. "1", "2A", "2B", "3", etc.)',
            validation: (Rule) => Rule.required().regex(/^[0-9A-Z]+$/),
        }),
        // base fields (title, text, images, videos, etc.)
        ...sharedQuestionFields,
        defineField({
            title: 'Normal Angiogram',
            name: 'normal_angiogram_01',
            type: 'number',
            fieldset: 'normal_angiogram',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Severe Stenosis',
            name: 'left_main_severe_12',
            type: 'number',
            fieldset: 'severe_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Severe Stenosis',
            name: 'left_anterior_severe_13',
            type: 'number',
            fieldset: 'severe_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Severe Stenosis',
            name: 'left_circumflex_severe_14',
            type: 'number',
            fieldset: 'severe_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Severe Stenosis',
            name: 'right_severe_15',
            type: 'number',
            fieldset: 'severe_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Severe Stenosis',
            name: 'bypass_severe_16',
            type: 'number',
            fieldset: 'severe_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Moderate Stenosis',
            name: 'left_main_moderate_07',
            type: 'number',
            fieldset: 'moderate_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Moderate Stenosis',
            name: 'left_anterior_moderate_08',
            type: 'number',
            fieldset: 'moderate_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Moderate Stenosis',
            name: 'left_circumflex_moderate_09',
            type: 'number',
            fieldset: 'moderate_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Moderate Stenosis',
            name: 'right_moderate_10',
            type: 'number',
            fieldset: 'moderate_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Moderate Stenosis',
            name: 'bypass_moderate_11',
            type: 'number',
            fieldset: 'moderate_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Insignificant Stenosis',
            name: 'left_main_insignificant_02',
            type: 'number',
            fieldset: 'insignificant_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Insignificant Stenosis',
            name: 'left_anterior_insignificant_03',
            type: 'number',
            fieldset: 'insignificant_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Insignificant Stenosis',
            name: 'left_circumflex_insignificant_04',
            type: 'number',
            fieldset: 'insignificant_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Insignificant Stenosis',
            name: 'right_insignificant_05',
            type: 'number',
            fieldset: 'insignificant_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Insignificant Stenosis',
            name: 'bypass_insignificant_06',
            type: 'number',
            fieldset: 'insignificant_stenosis',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Total Occlusion',
            name: 'left_main_total_occlusion_17',
            type: 'number',
            fieldset: 'total_occlusion',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Total Occlusion',
            name: 'left_anterior_total_occlusion_18',
            type: 'number',
            fieldset: 'total_occlusion',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Total Occlusion',
            name: 'left_circumflex_total_occlusion_19',
            type: 'number',
            fieldset: 'total_occlusion',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Total Occlusion',
            name: 'right_total_occlusion_20',
            type: 'number',
            fieldset: 'total_occlusion',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Total Occlusion',
            name: 'bypass_total_occlusion_21',
            type: 'number',
            fieldset: 'total_occlusion',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Collateral Filling',
            name: 'left_anterior_filled_collaterals_22',
            type: 'number',
            fieldset: 'filled_by_collaterals',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Collateral Filling',
            name: 'left_circumflex_filled_collaterals_23',
            type: 'number',
            fieldset: 'filled_by_collaterals',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Collateral Filling',
            name: 'right_filled_collaterals_24',
            type: 'number',
            fieldset: 'filled_by_collaterals',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Collateral Filling',
            name: 'bypass_filled_collaterals_25',
            type: 'number',
            fieldset: 'filled_by_collaterals',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Coronary Spasm',
            name: 'left_anterior_coronary_spasm_26',
            type: 'number',
            fieldset: 'coronary_spasm',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Coronary Spasm',
            name: 'left_circumflex_coronary_spasm_27',
            type: 'number',
            fieldset: 'coronary_spasm',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Coronary Spasm',
            name: 'right_coronary_spasm_28',
            type: 'number',
            fieldset: 'coronary_spasm',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Coronary Spasm',
            name: 'bypass_coronary_spasm_29',
            type: 'number',
            fieldset: 'coronary_spasm',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Myocardial Bridging',
            name: 'left_anterior_myocardial_bridge_34',
            type: 'number',
            fieldset: 'myocardial_bridging',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Myocardial Bridging',
            name: 'left_circumflex_myocardial_bridge_35',
            type: 'number',
            fieldset: 'myocardial_bridging',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Myocardial Bridging',
            name: 'right_coronary_myocardial_bridge_36',
            type: 'number',
            fieldset: 'myocardial_bridging',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Anomalous Coronary Origin',
            name: 'left_main_anomalous_coronary_37',
            type: 'number',
            fieldset: 'anomalous_coronary_origin',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Anomalous Coronary Origin',
            name: 'left_anterior_anomalous_coronary_38',
            type: 'number',
            fieldset: 'anomalous_coronary_origin',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Anomalous Coronary Origin',
            name: 'left_circumflex_anomalous_coronary_39',
            type: 'number',
            fieldset: 'anomalous_coronary_origin',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Anomalous Coronary Origin',
            name: 'right_anomalous_coronary_40',
            type: 'number',
            fieldset: 'anomalous_coronary_origin',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Coronary Fistula',
            name: 'left_main_coronary_fistula_41',
            type: 'number',
            fieldset: 'coronary_fistula',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Coronary Fistula',
            name: 'left_anterior_coronary_fistula_42',
            type: 'number',
            fieldset: 'coronary_fistula',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Coronary Fistula',
            name: 'left_circumflex_coronary_fistula_43',
            type: 'number',
            fieldset: 'coronary_fistula',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Coronary Fistula',
            name: 'right_coronary_fistula_44',
            type: 'number',
            fieldset: 'coronary_fistula',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Coronary Thrombus Present',
            name: 'left_anterior_coronary_thrombus_30',
            type: 'number',
            fieldset: 'coronary_artery_thrombus_present',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Coronary Thrombus Present',
            name: 'left_circumflex_coronary_thrombus_31',
            type: 'number',
            fieldset: 'coronary_artery_thrombus_present',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Coronary Thrombus Present',
            name: 'right_coronary_thrombus_32',
            type: 'number',
            fieldset: 'coronary_artery_thrombus_present',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Coronary Thrombus Present',
            name: 'bypass_coronary_thrombus_33',
            type: 'number',
            fieldset: 'coronary_artery_thrombus_present',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft to Left Anterior Descending',
            name: 'left_anterior_bypass_graft_50',
            type: 'number',
            fieldset: 'bypass_graft',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft to Left Circumflex',
            name: 'left_circumflex_bypass_graft_51',
            type: 'number',
            fieldset: 'bypass_graft',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft to Right',
            name: 'right_bypass_graft_52',
            type: 'number',
            fieldset: 'bypass_graft',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Dissection',
            name: 'left_main_dissection_53',
            type: 'number',
            fieldset: 'dissection',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Dissection',
            name: 'left_anterior_dissection_54',
            type: 'number',
            fieldset: 'dissection',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Dissection',
            name: 'left_circumflex_dissection_55',
            type: 'number',
            fieldset: 'dissection',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Dissection',
            name: 'right_dissection_56',
            type: 'number',
            fieldset: 'dissection',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Severe Ectasia',
            name: 'left_main_severe_ectasia_45',
            type: 'number',
            fieldset: 'severe_ectasia',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Severe Ectasia',
            name: 'left_anterior_severe_ectasia_46',
            type: 'number',
            fieldset: 'severe_ectasia',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Severe Ectasia',
            name: 'left_circumflex_severe_ectasia_47',
            type: 'number',
            fieldset: 'severe_ectasia',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Severe Ectasia',
            name: 'right_severe_ectasia_48',
            type: 'number',
            fieldset: 'severe_ectasia',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Severe Ectasia',
            name: 'bypass_severe_ectasia_49',
            type: 'number',
            fieldset: 'severe_ectasia',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Occluded Coronary Stent',
            name: 'left_main_stent_occluded_63',
            type: 'number',
            fieldset: 'stent_occluded',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Occluded Coronary Stent',
            name: 'left_anterior_stent_occluded_64',
            type: 'number',
            fieldset: 'stent_occluded',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Occluded Coronary Stent',
            name: 'left_circumflex_stent_occluded_65',
            type: 'number',
            fieldset: 'stent_occluded',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Occluded Coronary Stent',
            name: 'right_stent_occluded_66',
            type: 'number',
            fieldset: 'stent_occluded',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Occluded Coronary Stent',
            name: 'bypass_stent_occluded_67',
            type: 'number',
            fieldset: 'stent_occluded',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Main - Patent Coronary Stent',
            name: 'left_main_stent_patent_58',
            type: 'number',
            fieldset: 'patent_coronary_stent',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Anterior - Patent Coronary Stent',
            name: 'left_anterior_stent_patent_59',
            type: 'number',
            fieldset: 'patent_coronary_stent',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Left Circumflex - Patent Coronary Stent',
            name: 'left_circumflex_stent_patent_60',
            type: 'number',
            fieldset: 'patent_coronary_stent',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Right - Patent Coronary Stent',
            name: 'right_stent_patent_61',
            type: 'number',
            fieldset: 'patent_coronary_stent',
            validation: (Rule) => Rule.positive(),
        }),
        defineField({
            title: 'Bypass Graft - Patent Coronary Stent',
            name: 'bypass_stent_patent_62',
            type: 'number',
            fieldset: 'patent_coronary_stent',
            validation: (Rule) => Rule.positive(),
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
                title: `Angiogram ${index}`,
                subtitle: title,
                media: () => images.length + markedImages.length + videos.length,
            };
        },
    },
});
