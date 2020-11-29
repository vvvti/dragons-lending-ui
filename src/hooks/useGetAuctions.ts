import {useCallback, useState} from 'react';
import {AuctionValues} from '../helpers/types';
import {getAuctionsList, getAuctionsListWithoutToken} from '../api/auctionsApi';
import {useAuthContext} from '../context/auth-context';
import {getImagesUrl} from '../components/AuctionsGrid/AuctionsGrid.helpers';

export const useGetAuctions = () => {
    const [auctionsList, setAuctionsList] = useState<AuctionValues[]>();
    const [ownAuctionsList, setOwnAuctionsList] = useState<AuctionValues[]>([]);
    const {tokenStorage} = useAuthContext();

    const getAuctions = useCallback(async () => {
        let auctions: AuctionValues[];
        console.log('getAuctions');
        if (tokenStorage) {
            const response = await getAuctionsList();
            auctions = response.data;
            console.log('getAuctions', response.data);
        } else {
            const response = await getAuctionsListWithoutToken();
            auctions = response.data;
        }
        const urlArray = getImagesUrl(auctions);

        const auctionsWithPhotos = auctions.map((obj, index) => ({...obj, url: urlArray[index]}));
        setAuctionsList(auctionsWithPhotos);
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
