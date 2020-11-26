import {axios} from './rest/axios';
import {InvestFormValues} from '../helpers/types';

export const getOffersList = (config: any) => {
    return axios.get(`/offers/user`, config);
};

export const postOffersList = (values: InvestFormValues, config: any) => {
    return axios.post(`/offers`, values, config);
};

export const deleteOfferItem = (id: string, config: any) => {
    return axios.delete(`/offers/${id}`, config);
};
