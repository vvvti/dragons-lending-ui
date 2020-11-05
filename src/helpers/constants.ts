import {CreateOfferFormValues, LoginFormValues, RegisterFormValues} from './types';

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

export const INITIAL_CREATEOFFER_VALUES: CreateOfferFormValues = {
    initialValue: 1000,
    monthlySaving: 300,
    savingPeriod: 6,
    annualProfit: 3,
    paymentFrequency: '1',
};
