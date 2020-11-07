import {CreateOfferFormValues, InvestFormValues, LoginFormValues, RegisterFormValues} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    LOGIN,
}

export const CALCULATOR = 'https://dragons-investments-ui.ersa-team.fintechchallenge.pl/';

export const INITIAL_REGISTER_VALUES: RegisterFormValues = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    personalId: null,
};

export const INITIAL_LOGIN_VALUES: LoginFormValues = {
    email: '',
    password: '',
};

export const INITIAL_INVEST_VALUES: InvestFormValues = {
    investAmount: null,
    investRate: null,
};

export const INITIAL_CREATEOFFER_VALUES: CreateOfferFormValues = {
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7.5,
    paymentFrequency: 'monthly',
    endDate: '',
};
