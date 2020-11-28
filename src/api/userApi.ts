import {axios} from './rest/axios';

export const getUserValues = () => {
    return axios.get(`/users/self`);
};
