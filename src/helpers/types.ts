export interface RegisterFormValues {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    personalId: number | undefined;
}

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface InvestFormValues {
    investAmount: number | undefined;
    investRate: number | undefined;
}

export interface CreateOfferFormValues {
    loanAmount: number | '';
    timePeriod: number | '';
    interestRate: number | '';
    endDate: string;
}
