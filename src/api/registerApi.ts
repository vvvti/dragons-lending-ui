import {axios} from './rest/axios';
import {RegisterFormValues} from '../helpers/types';

export const postRegisterValues = (values: RegisterFormValues) => {
    return axios.post(`/users/sign-up`, values);
};
