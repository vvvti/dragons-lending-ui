import {axios} from './rest/axios';

export const getLoginValues = () => {
    return axios.get(`/login`);
};
