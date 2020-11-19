import {axios} from './rest/axios';
import {CreateOfferFormArray} from '../helpers/types';

export const getOffersList = (data: any) => {
    return axios.get<CreateOfferFormArray>(`/auctions`, data);
};

export const getOffersListWithoutToken = () => {
    return axios.get<CreateOfferFormArray>(`/auctions`);
};

export const postOffer = (data: any, values: any) => {
    return axios.post(`/auctions`, data, values);
};

export const getOffer = (id: string) => {
    return axios.get(`/auctions/${id}`);
};
