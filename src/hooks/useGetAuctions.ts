import {useCallback, useState} from 'react';
import {AuctionValues} from '../helpers/types';
import {getAuctionsList, getAuctionsListWithoutToken} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';

export const useGetAuctions = () => {
    const [auctionsList, setAuctionsList] = useState<AuctionValues[]>();
    const [ownAuctionsList, setOwnAuctionsList] = useState<AuctionValues[]>([]);
    const {tokenStorage} = useAuthContext();

    const getAuctions = useCallback(async () => {
        if (tokenStorage) {
            const response = await getAuctionsList();
            setAuctionsList(response.data);
        } else {
            const response = await getAuctionsListWithoutToken();
            setAuctionsList(response.data);
        }
    }, [tokenStorage]);

    const getOwnAuctionsList = useCallback(async () => {
        const config = {
            params: {yours: true},
        };

        const response = await getAuctionsList(config);
        setOwnAuctionsList(response.data);
    }, []);

    return {
        auctionsList,
        getAuctions,
        getOwnAuctionsList,
        ownAuctionsList,
    };
};
