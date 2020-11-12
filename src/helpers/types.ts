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

export interface CreateOfferFormValues {
    loanAmount: number | '' | undefined;
    timePeriod: number | '' | undefined;
    interestRate: number | '';
    endDate: string;
}

export interface OfferItem {
    id: number;
    loanAmount: number | '' | undefined;
    timePeriod: number | '' | undefined;
    interestRate: number | '';
    endDate: string;
    url: string;
}

export interface OfferItems extends Array<OfferItem> {}
