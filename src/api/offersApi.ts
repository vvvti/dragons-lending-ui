import {axios} from './rest/axios';
import {InvestFormValues} from '../helpers/types';

export const getOffersList = () => {
    return axios.get(`/offers/user`);
};

export const getReceivedOffersList = () => {
    return axios.get(`/offers/received`);
};

export const postOffersList = (values: InvestFormValues) => {
    return axios.post(`/offers`, values);
};

export const deleteOfferItem = (id: any) => {
    return axios.delete(`/offers/${id}`);
};
