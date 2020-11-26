import {axios} from './rest/axios';
import {AuctionValues} from '../helpers/types';

export const getAuctionsList = (config: any) => {
    return axios.get(`/auctions`, config);
};

export const getAuctionsListWithoutToken = () => {
    return axios.get(`/auctions/public`);
};

export const postAuction = (values: AuctionValues, config: any) => {
    return axios.post(`/auctions`, values, config);
};
