import {axios} from './rest/axios';
import {AuctionValues, configType} from '../helpers/types';

export const getAuctionsList = (config?: configType) => {
    return axios.get(`/auctions`, config);
};

export const getAuctionsListWithoutToken = () => {
    return axios.get(`/auctions/public`);
};

export const postAuction = (values: AuctionValues) => {
    return axios.post(`/auctions`, values);
};
export const deleteAuctionItem = (id: any) => {
    return axios.delete(`/auctions/${id}`);
};
