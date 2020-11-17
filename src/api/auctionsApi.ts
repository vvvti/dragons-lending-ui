import {axios} from './rest/axios';

export const getOffersList = (data: any) => {
    return axios.get(`/auctions`, data);
};

export const getOffersListWithoutToken = () => {
    return axios.get(`/auctions`);
};

export const postOffer = (data: any, values: any) => {
    console.log('data', data);
    return axios.post(`/auctions`, data, values);
};

export const getOffer = (id: string) => {
    return axios.get(`/auctions/${id}`);
};
