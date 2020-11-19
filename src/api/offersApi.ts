import {axios} from './rest/axios';
import {OffersArray} from '../helpers/types';

export const getOffersList = (data: any) => {
    return axios.get<OffersArray>(`/auctions`, data);
};

export const getOffersListWithoutToken = () => {
    return axios.get<OffersArray>(`/auctions`);
};

export const postOffer = (data: any, values: any) => {
    return axios.post(`/auctions`, data, values);
};

export const getOffer = (id: string) => {
    return axios.get(`/auctions/${id}`);
};
