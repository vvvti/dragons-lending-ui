import {axios} from './rest/axios';

export const getOffersList = (data: any) => {
    return axios.get(`/auctions`, data);
};

export const getOffersListWithoutToken = () => {
    return axios.get(`/auctions`);
};

export const postOffer = (data: any, header: any) => {
    console.log('data', data);
    return axios.post(`/auctions`, data, header);
};

export const getOffer = (id: string) => {
    return axios.get(`/auctions/${id}`);
};
