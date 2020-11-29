import {useCallback, useState} from 'react';
import {LoansList} from '../helpers/types';
import {getLoansList} from '../api/loansApi';

export const useLoans = () => {
    const [loansList, setLoansList] = useState<LoansList>();

    const getLoans = useCallback(async () => {
        const response = await getLoansList();
        setLoansList(response.data);
    }, []);

    return {
        loansList,
        getLoans,
    };
};
