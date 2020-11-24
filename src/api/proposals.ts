import {axios} from './rest/axios';
import {InvestFormValues} from '../helpers/types';

export const getProposalsList = (config: any) => {
    return axios.get(`/offers/user`, config);
};

export const postProposalsList = (values: InvestFormValues, config: any) => {
    return axios.post(`/offers`, values, config);
};
