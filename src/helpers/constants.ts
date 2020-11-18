import {CreateOfferFormArray, CreateOfferFormValues, InvestFormValues, LoginFormValues, RegisterFormValues} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    LOGIN,
}

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

export const INITIAL_CREATEOFFER_VALUES: CreateOfferFormValues = {
    id: '',
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7.5,
    endDate: '',
};

export const INITIAL_CREATEOFFER_ARRAY: CreateOfferFormArray = [
    {
        id: '',
        loanAmount: 500,
        timePeriod: 12,
        interestRate: 7.5,
        endDate: '',
    },
];

export const INITIAL_INVEST_VALUES: InvestFormValues = {
    investAmount: 3,
    investRate: 500,
};
