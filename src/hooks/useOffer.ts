import {useCallback, useState} from 'react';
import {postOffer} from '../api/createOfferApi';
import {CreateOfferFormValues} from '../helpers/types';
import {INITIAL_CREATEOFFER_VALUES} from '../helpers/constants';

export const useOffer = () => {
    const [offerValues, setOfferValues] = useState<CreateOfferFormValues>(INITIAL_CREATEOFFER_VALUES);

    const postOfferValues = useCallback(async (values: CreateOfferFormValues) => {
        const response = await postOffer(values);
        setOfferValues(response.data);
    }, []);

    return {
        offerValues,
        postOfferValues,
    };
};
