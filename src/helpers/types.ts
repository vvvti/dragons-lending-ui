export interface RegisterFormValues {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    personalId: string;
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
