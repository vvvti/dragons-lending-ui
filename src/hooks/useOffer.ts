import {useCallback, useState} from 'react';
import {CreateOfferFormValues} from '../helpers/types';
import {INITIAL_CREATEOFFER_VALUES} from '../helpers/constants';
import {getOffersList, getOffersListWithoutToken} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';

export const useOffer = () => {
    const [offersList, setOffersList] = useState<CreateOfferFormValues>(INITIAL_CREATEOFFER_VALUES);

    const {tokenStorage} = useAuthContext();

    console.log('tokenStorage', tokenStorage);

    const data = {
        headers: {'x-authorization': tokenStorage},
    };

    const getOffers = useCallback(async () => {
        if (tokenStorage) {
            const response = await getOffersList(data);
            console.log('get offer list', response);
            setOffersList(response.data);
        } else {
            const response = await getOffersListWithoutToken();
            setOffersList(response.data);
        }
    }, [tokenStorage, data]);

    return {
        offersList,
        getOffers,
    };
};
