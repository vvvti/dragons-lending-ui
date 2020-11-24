export interface RegisterFormValues {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface InvestFormValues {
    investAmount: number | '';
    investRate: number | '';
}

export interface OfferValues {
    id: string | number;
    loanAmount: number | '';
    timePeriod: number | '';
    interestRate: number | '';
    endDate: string;
    url?: string;
}

export interface OffersArray extends Array<OfferValues> {}

export interface DepositAmount {
    fromAccountNumber: string;
    amount: number | '';
}

export interface AccountBalance {
    balance: number;
    availableFunds: number;
}

export interface WithdrawnAmount {
    requestedAccountNumber: string;
    amount: number | '';
}
