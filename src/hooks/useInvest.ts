import {useCallback, useState} from 'react';
import {InvestFormValues} from '../helpers/types';
import {postValuesToInvest} from '../api/investApi';
import {SERVERSTATUS} from '../helpers/constants';

export const useInvest = () => {
    const [serverMessage, setServerMessage] = useState<SERVERSTATUS>();

    const postInvestValues = useCallback(async (values: InvestFormValues) => {
        try {
            await postValuesToInvest(values);
            setServerMessage(SERVERSTATUS.OK);
        } catch {
            setServerMessage(SERVERSTATUS.ERROR);
        }
    }, []);

    return {
        serverMessage,
        postInvestValues,
    };
};
