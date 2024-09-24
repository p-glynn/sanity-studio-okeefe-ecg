import get from 'axios';
import {configDotenv} from 'dotenv';

import {writeData} from './writeData';
import {WPQueryOptions, WPAuthHeaders, Question} from './types';
configDotenv();

const {WP_REST_API_USER, WP_REST_API_PW} = process.env;

const pageSize = 25;
const requireAuth = false;

const questionTypes = ['angiogram', 'ecg', 'echo', 'cv_image'];

// base WordPress REST API endpoint
const path = `https://okeefeecg.com/wp-json/okeefe_ecg/api/migration/questions`;

async function fetchWordpressQuestions(fetchAll = false) {
    console.log(`Fetching WordPress API data`);

    for (const questionType of questionTypes) {
        const authHeaders = getWpRequestConfig(requireAuth);
        const allData = await fetchAllDataRecursive([], {path, questionType, page: 1, pageSize}, authHeaders, fetchAll);
        const subDir = fetchAll ? 'full' : 'test';
        writeData({data: allData}, `input/questions/${subDir}`, questionType);
    }
}

async function fetchAllDataRecursive(
    currentData: Question[] = [],
    {path, questionType, page, pageSize}: WPQueryOptions,
    authHeaders: WPAuthHeaders,
    fetchAll: boolean
) {
    const size = fetchAll ? pageSize : 5;
    const {questions} = await fetchSinglePageData({path, questionType, page, pageSize: size}, authHeaders);
    const newData = [...currentData, ...questions];
    if (fetchAll && questions.length === pageSize) {
        const nextPage = page + 1;
        return fetchAllDataRecursive(newData, {path, questionType, page: nextPage, pageSize}, authHeaders, fetchAll);
    }
    return newData;
}

async function fetchSinglePageData({path, questionType, page, pageSize}: WPQueryOptions, authHeaders: WPAuthHeaders) {
    const requestUrl = `${path}?question_type=${questionType}&page=${page}&per_page=${pageSize}`;
    console.log(`Fetching page ${page} of ${questionType} questions`);
    const {data} = await get(requestUrl, authHeaders);
    try {
        return data;
    } catch (error) {
        console.log(error);
    }
}

function getWpRequestConfig(requireAuth: boolean): WPAuthHeaders {
    if (requireAuth) {
        return {
            headers: {
                Authorization: `Basic ${Buffer.from(`${WP_REST_API_USER}:${WP_REST_API_PW}`).toString('base64')}`,
            },
        };
    }
    return {};
}

function main() {
    const args = process.argv.slice(2); // Ignore the first two arguments (node and script path)
    const fullFetch = args[0] === 'full';
    fetchWordpressQuestions(fullFetch);
}

main();
