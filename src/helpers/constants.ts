import {
    AccountBalance,
    AuctionValues,
    DepositAmount,
    InvestFormValues,
    LoginFormValues,
    RegisterFormValues,
    userValues,
    WithdrawnAmount,
} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    AUCTIONS,
}

export enum CURRENCY {
    GBP = '£',
}

export const POSTSPERPAGE = 6;

export const CALCULATORPAGE = 'https://dragons-investments-ui.ersa-team.uat.fintechchallenge.pl/';
export const FACEBOOK = 'https://facebook.com';
export const TWITTER = 'https://twitter.com';
export const LINKEDIN = 'https://linkedin.com';

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

export const AUCTION_VALUES: AuctionValues = {
    id: '',
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7,
    endDate: '',
    username: '',
};

export const INITIAL_INVEST_VALUES: InvestFormValues = {
    offerAmount: 500,
    interestRate: 3,
    auctionId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
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

export const USERDEFAULT: userValues = {
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    username: 'string',
};
