import {axios} from './rest/axios';
import {configType} from '../helpers/types';

export const getUserValues = (config: configType) => {
    return axios.get(`/users/self`, config);
};
