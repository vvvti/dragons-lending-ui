import {axios} from './rest/axios';
import {InvestFormValues} from '../helpers/types';

export const postValuesToInvest = (values: InvestFormValues) => {
    return axios.post(`/invest`, values);
};
