import {axios} from './rest/axios';

export const getLoansList = () => {
    return axios.get(`/loans/self`);
};

export const getAcceptLoan = (id: any) => {
    return axios.post(`/offers/${id}/select`);
};
