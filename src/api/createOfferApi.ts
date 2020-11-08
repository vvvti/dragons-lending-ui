import {axios} from './rest/axios';
import {CreateOfferFormValues} from '../helpers/types';

export const getOffersList = () => {
    return axios.get(`/offers`);
};

export const postOffer = (values: CreateOfferFormValues) => {
    return axios.post(`/offers`, values);
};

export const getOffer = (id: string) => {
    return axios.get(`/offers/${id}`);
};

export const putOffer = (id: string, values: CreateOfferFormValues) => {
    return axios.put(`/offers/${id}`, values);
};
