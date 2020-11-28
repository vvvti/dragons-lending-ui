import {useCallback, useState} from 'react';
import {InvestFormValues} from '../helpers/types';
import {postValuesToInvest} from '../api/investApi';

export const useInvest = () => {
    const [errorMessage, setErrorMessage] = useState<string>();

    const postInvestValues = useCallback(async (values: InvestFormValues) => {
        try {
            await postValuesToInvest(values);
            setErrorMessage('ok');
        } catch {
            setErrorMessage('error');
        }
    }, []);

    return {
        errorMessage,
        postInvestValues,
    };
};
