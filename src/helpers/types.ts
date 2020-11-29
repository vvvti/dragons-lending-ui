import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

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

export interface AuctionValues {
    id?: string;
    loanAmount: number | '';
    timePeriod: number | '';
    interestRate: number | '';
    endDate: number | '';
    username?: string;
    url?: string;
}

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

export interface Calculation {
    finalValue: number;
    periodValue: number;
}

export interface Offers {
    id: string;
    offerAmount: number;
    interestRate: number;
    calculation: Calculation;
    userId: string;
    username: string;
}

export interface userValues {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    username: string;
}

export interface AuthRouteProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}

export interface configType {
    params: {yours: boolean};
}

export interface filterValues {
    sort: boolean;
    filter: boolean;
    active: boolean;
}

export interface LoansGranted {
    id: string;
    username: string;
    amount: number;
    creationTime: string;
    nextInstallmentDate: string;
    installmentsNumber: number;
}

export interface LoansTaken {
    id: string;
    username: string;
    amount: number;
    creationTime: string;
    nextInstallmentDate: string;
    installmentsNumber: number;
}

export interface LoansList {
    LoansGranted: LoansGranted[];
    LoansTaken: LoansTaken[];
}
