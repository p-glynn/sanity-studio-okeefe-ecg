import {mediaProperties} from '../../constants';

export interface InputData {
    id: string;
    label: string;
}

export interface Group extends InputData {
    data: InputData[];
}

export interface Field {
    name: string;
    type: string;
    title: string;
    fieldset: string;
}

export interface Fieldset {
    name: string;
    title: string;
    options: {
        collapsible: boolean;
        collapsed: boolean;
    };
}

export interface WPQueryOptions {
    path: string;
    page: number;
    pageSize: number;
    questionType?: string;
}

export interface WPAuthHeaders {
    headers?: {
        Authorization: string;
    };
}

export interface WPResponse {
    data?: Question[];
}

export interface Question extends OptionalMediaProps<typeof mediaProperties> {
    id: number;
    question_title: string;
    question_type: string;
    explanation: string;
    secondary_text?: string;
}

type OptionalMediaProps<T extends readonly string[]> = {
    [K in T[number]]?: string | number;
};
