import {AccountBalance, AuctionValues, DepositAmount, LoginFormValues, RegisterFormValues, UserValues, WithdrawnAmount} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    AUCTIONS,
}

export enum DATAGRIDTYPE {
    OFFERS,
    AUCTIONS,
    TAKENLOANS,
    GRANTEDLOANS,
}

export enum SERVERSTATUS {
    OK,
    ERROR,
}

export enum CURRENCY {
    GBP = '£',
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

export const AUCTION_VALUES: AuctionValues = {
    loanAmount: 500,
    timePeriod: 12,
    interestRate: 7,
    endDate: '',
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

export const USERDEFAULT: UserValues = {
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    username: '',
};
