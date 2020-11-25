import {axios} from './rest/axios';
import {DepositAmount, WithdrawnAmount} from '../helpers/types';

export const getAccountBalance = (config: any) => {
    return axios.get(`/account/self`, config);
};

export const postWithdraw = (values: WithdrawnAmount, config: any) => {
    return axios.post(`/account/withdraw`, values, config);
};

export const postDeposit = (values: DepositAmount, config: any) => {
    return axios.post(`/paymentplatform/deposit`, values, config);
};
