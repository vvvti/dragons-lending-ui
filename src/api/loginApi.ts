import {axios} from './rest/axios';
import {LoginFormValues} from '../helpers/types';

export const getLoginValues = (values: LoginFormValues) => {
    return axios.get(`/login`, {params: values});
};
