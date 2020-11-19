import {InvestFormValues, LoginFormValues, OfferValues, RegisterFormValues, WithdrawMoney} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    LOGIN,
}

export const POSTSPERPAGE = 6;

export const CALCULATORPAGE = 'https://dragons-investments-ui.ersa-team.uat.fintechchallenge.pl/';

export const INITIAL_REGISTER_VALUES: RegisterFormValues = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

export const INITIAL_LOGIN_VALUES: LoginFormValues = {
    email: '',
    password: '',
};

export const OFFER_VALUES: OfferValues = {
    id: '',
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7,
    endDate: '',
};

export const INITIAL_INVEST_VALUES: InvestFormValues = {
    investAmount: 3,
    investRate: 500,
};
export const INITIAL_WITHDRAW_VALUES: WithdrawMoney = {
    account: '',
    amount: '',
};
