import {axios} from './rest/axios';
import {CreateOfferFormValues} from '../helpers/types';

export const getOffersList = (data: any) => {
    console.log('data', data);
    return axios.get(`/auctions`, data);
};

export const getOffersListWithoutToken = () => {
    return axios.get(`/auctions`);
};

export const postOffer = (values: CreateOfferFormValues) => {
    return axios.post(`/auctions`, values);
};

export const getOffer = (id: string) => {
    return axios.get(`/auctions/${id}`);
};
