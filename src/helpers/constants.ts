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
    personalId: '',
};

export const INITIAL_LOGIN_VALUES: LoginFormValues = {
    email: '',
    password: '',
};

// const ONE_DAY_IN_MILIS = 1000 * 60 * 60 * 24;
// endDate: new Date(Date.now() + ONE_DAY_IN_MILIS).toISOString().slice(0, 10),

export const INITIAL_CREATEOFFER_VALUES: CreateOfferFormValues = {
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7.5,
    endDate: '',
};
