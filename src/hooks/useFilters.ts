import {useState} from 'react';
import {OfferItems} from '../helpers/types';
import {images} from '../components/LoansGrid/data';
import {useOffer} from './useOffer';

export const useFilters = () => {
    const {offersList} = useOffer();
    const offerArray = offersList.map((obj: any) => ({...obj, url: images[obj.id]}));

    const [offersDisplayed, setOffersDisplayed] = useState<OfferItems>(offerArray);
    const [isUpTo500, setIsUpTo500] = useState<boolean>(true);
    const [isSortedByAmount, setIsSortedByAmount] = useState<boolean>(false);
    const [isSortedByDuration, setIsSortedByDuration] = useState<boolean>(false);

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

    const sortByAmount = () => {
        let sortedUsers = offersDisplayed;
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

    const sortByExpireDate = () => {
        let sortedUsers = offersDisplayed;
        if (!isSortedByDuration) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.timePeriod) > Number(b.timePeriod) ? 1 : -1));
            setOffersDisplayed(sortedUsers);
            setIsSortedByDuration(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.timePeriod) < Number(b.timePeriod) ? 1 : -1));
            setOffersDisplayed(sortedUsers);
            setIsSortedByDuration(false);
        }
    };

    return {
        filterOneMonth,
        sortByAmount,
        sortByExpireDate,
        isUpTo: isUpTo500,
        isSortedByDuration,
        isSortedByAmount,
        sortFilteredList: offersDisplayed,
    };
};
