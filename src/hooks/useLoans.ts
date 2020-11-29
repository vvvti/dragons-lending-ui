import {useCallback, useState} from 'react';
import {getOffersList, postOffersList} from '../api/offersApi';
import {LoansList, Offers} from '../helpers/types';
import {getAcceptLoan, getLoansList} from '../api/loansApi';

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
