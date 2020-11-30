import {useCallback, useState} from 'react';
import {LoansList, Repayments} from '../helpers/types';
import {getLoansList, getRepaymentLoan} from '../api/loansApi';

export const useLoans = () => {
    const [loansList, setLoansList] = useState<LoansList>();
    const [repaymentLoans, setRepaymentLoans] = useState<Repayments>();

    const getLoans = useCallback(async () => {
        const response = await getLoansList();
        setLoansList(response.data);
    }, []);

    const getRepayment = useCallback(async id => {
        const response = await getRepaymentLoan(id);
        setRepaymentLoans(response.data);
    }, []);

    return {
        loansList,
        getLoans,
        repaymentLoans,
        getRepayment,
    };
};
