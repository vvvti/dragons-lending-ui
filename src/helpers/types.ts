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

export interface CreateOfferFormValues {
    loanAmount: number;
    timePeriod: number;
    interestRate: number;
    paymentFrequency: string;
    endDate: string;
}
