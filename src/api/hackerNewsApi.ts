import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchStoryIds = async (type: string) => {
    //console.log(type);
    const response = await axios.get<number[]>(`${BASE_URL}/${type}.json`);
    //console.log(response.data);
    return response.data;
};

export const fetchStory = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/item/${id}.json`);
    return response.data;
};

export const fetchComment = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/item/${id}.json`);
    return response.data;
};
