import {axios} from './rest/axios';
import {OfferValues} from '../helpers/types';

export const getOffersList = (config: any) => {
    return axios.get(`/auctions`, config);
};

export const getOffersListWithoutToken = () => {
    return axios.get(`/auctions/public`);
};

export const postOffer = (values: OfferValues, config: any) => {
    return axios.post(`/auctions`, values, config);
};

//   return axios.get<OffersArray>(`/auctions?yours=true `, config);
// export const getOwnOffersList = (config: any) => {
//     return axios.get<OffersArray>(`/auctions`, config);
// };
