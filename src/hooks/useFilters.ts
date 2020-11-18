import {useState} from 'react';
import {CreateOfferFormArray} from '../helpers/types';
import {images} from '../components/LoansGrid/data';
import {useOffer} from './useOffer';

export const useFilters = () => {
    const {offersList} = useOffer();
    const offerArray = offersList.map((obj: any) => ({...obj, url: images[obj.id]}));

    const [offersDisplayed, setOffersDisplayed] = useState<CreateOfferFormArray>(offerArray);
    const [isUpTo500, setIsUpTo500] = useState<boolean>(true);
    const [isSortedByAmount, setIsSortedByAmount] = useState<boolean>(false);

    const filterOneMonth = () => {
        let filteredData = offerArray;
        if (isUpTo500) {
            filteredData = filteredData.filter(data => data.loanAmount < 500);
            setOffersDisplayed(filteredData);
            setIsUpTo500(!isUpTo500);
        } else {
            setOffersDisplayed(offerArray);
            setIsUpTo500(!isUpTo500);
        }
    };

    const sortByAmount = (activeAuctions: CreateOfferFormArray) => {
        let sortedUsers = activeAuctions;
        if (!isSortedByAmount) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            setOffersDisplayed(sortedUsers);
            setIsSortedByAmount(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
            setOffersDisplayed(sortedUsers);
            setIsSortedByAmount(false);
        }
    };

    return {
        offersDisplayed,
        filterOneMonth,
        sortByAmount,
        isUpTo: isUpTo500,
        isSortedByAmount,
        sortFilteredList: offersDisplayed,
    };
};
