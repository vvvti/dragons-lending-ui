import {axios} from './rest/axios';
import {configType, DepositAmount, WithdrawnAmount} from '../helpers/types';

export const getAccountBalance = (config: configType) => {
    return axios.get(`/account/self`, config);
};

export const postWithdraw = (values: WithdrawnAmount, config: configType) => {
    return axios.post(`/account/withdraw`, values, config);
};

export const postDeposit = (values: DepositAmount, config: configType) => {
    return axios.post(`/paymentplatform/deposit`, values, config);
};
