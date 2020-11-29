import {axios} from './rest/axios';

export const getLoansList = () => {
    return axios.get(`/loans/self`);
};

export const getRepaymentLoan = (id: any) => {
    return axios.get(`/loans/${id}`);
};
