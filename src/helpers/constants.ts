import {AccountBalance, DepositAmount, InvestFormValues, LoginFormValues, OfferValues, RegisterFormValues, WithdrawnAmount} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    OFFERS,
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
export const INITIAL_WITHDRAW_VALUES: WithdrawnAmount = {
    requestedAccountNumber: '',
    amount: '',
};

export const INITIAL_DEPOSIT_VALUES: DepositAmount = {
    fromAccountNumber: '',
    amount: '',
};

export const INITIAL_ACCOUNT_BALANCE: AccountBalance = {
    balance: 0,
    availableFunds: 0,
};
