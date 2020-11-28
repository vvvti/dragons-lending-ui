import {useCallback, useState} from 'react';
import {InvestFormValues} from '../helpers/types';
import {postValuesToInvest} from '../api/investApi';

export const useInvest = () => {
    const [errorMessage, setErrorMessage] = useState<string>();

    const postInvestValues = useCallback(async (values: InvestFormValues) => {
        try {
            await postValuesToInvest(values);
            setErrorMessage('');
        } catch {
            setErrorMessage('Something went wrong, please try again');
        }
    }, []);

    return {
        errorMessage,
        postInvestValues,
    };
};
