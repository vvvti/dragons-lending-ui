import {axios} from './rest/axios';
import {InvestFormValues} from '../helpers/types';

export const getOffersList = () => {
    return axios.get(`/offers/user`);
};

export const postOffersList = (values: InvestFormValues) => {
    return axios.post(`/offers`, values);
};

export const deleteOfferItem = (id: string) => {
    return axios.delete(`/offers/${id}`);
};
