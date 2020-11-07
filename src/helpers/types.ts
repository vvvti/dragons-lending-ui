export interface RegisterFormValues {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    personalId: number | null;
}

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface InvestFormValues {
    investAmount: number | null;
    investRate: number | null;
}

export interface CreateOfferFormValues {
    loanAmount: number;
    timePeriod: number;
    interestRate: number;
    paymentFrequency: string;
    endDate: string;
}
