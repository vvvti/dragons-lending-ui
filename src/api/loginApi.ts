import {axios} from './rest/axios';
import {LoginFormValues} from '../helpers/types';

export const postLoginValues = (values: LoginFormValues) => {
    return axios.post(`/login`, values);
};
