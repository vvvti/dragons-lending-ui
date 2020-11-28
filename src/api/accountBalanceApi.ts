import {axios} from './rest/axios';
import {DepositAmount, WithdrawnAmount} from '../helpers/types';

export const getAccountBalance = () => {
    return axios.get(`/account/self`);
};

export const postWithdraw = (values: WithdrawnAmount) => {
    return axios.post(`/account/withdraw`, values);
};

export const postDeposit = (values: DepositAmount) => {
    return axios.post(`/paymentplatform/deposit`, values);
};
