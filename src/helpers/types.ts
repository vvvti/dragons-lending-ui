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
    offerAmount: number | '';
    interestRate: number | '';
    auctionId: string;
}

export interface OfferValues {
    id: string;
    loanAmount: number | '';
    timePeriod: number | '';
    interestRate: number | '';
    endDate: string;
    username: string;
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

export interface Proposals {
    id: string;
    offerAmount: number;
    interestRate: number;
    calculation: {
        finalValue: number;
        periodValue: number;
    };
    userId: string;
    username: string;
}

export interface ProposalsArray extends Array<Proposals> {}

export interface userValues {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    username: string;
}
