const imageProperties = [
    'question_ecg_image',
    'question_ecg_image_2',
    'question_ecg_image_3',
    'question_ecg_image_4',
    'question_ecg_image_5',
];

const markedImageProperties = [
    'question_ecg_image_marked',
    'question_ecg_image_marked_2',
    'question_ecg_image_marked_3',
    'question_ecg_image_marked_4',
    'question_ecg_image_marked_5',
];

const videoProperties = [
    'question_ecg_video',
    'question_ecg_video_2',
    'question_ecg_video_3',
    'question_ecg_video_4',
    'question_ecg_video_5',
    'question_ecg_video_6',
];

export const optionalProperties = [...imageProperties, ...markedImageProperties, ...videoProperties];
