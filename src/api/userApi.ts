import {axios} from './rest/axios';

export const getUserValues = (config: any) => {
    return axios.get(`/users/self`, config);
};
