import {useCallback, useState} from 'react';
import {InvestFormValues} from '../helpers/types';
import {INITIAL_INVEST_VALUES} from '../helpers/constants';
import {postValuesToInvest} from '../api/investApi';

export const useInvest = () => {
    const [investValues, setInvestValues] = useState<InvestFormValues>(INITIAL_INVEST_VALUES);

    const postInvestValues = useCallback(async (values: InvestFormValues) => {
        console.log('postInvestValues', values);

        const response = await postValuesToInvest(values);
        setInvestValues(response.data);
    }, []);

    return {
        investValues,
        postInvestValues,
    };
};
