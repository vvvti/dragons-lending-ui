import {axios} from './rest/axios';
import {AccountBalance, DepositAmount, WithdrawnAmount} from '../helpers/types';

export const getAccountBalance = () => {
    return axios.get<AccountBalance>(`/account/self`);
};

export const postWithdraw = () => {
    return axios.post<WithdrawnAmount>(`/account/withdraw`);
};

export const postDeposit = () => {
    return axios.post<DepositAmount>(`/paymentplatform/deposit`);
};
