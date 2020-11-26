import {axios} from './rest/axios';
import {configType, InvestFormValues} from '../helpers/types';

export const getOffersList = (config: configType) => {
    return axios.get(`/offers/user`, config);
};

export const postOffersList = (values: InvestFormValues, config: configType) => {
    return axios.post(`/offers`, values, config);
};

export const deleteOfferItem = (id: string, config: configType) => {
    return axios.delete(`/offers/${id}`, config);
};
