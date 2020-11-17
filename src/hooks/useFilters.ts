import {useState} from 'react';
import {OfferItems} from '../helpers/types';
import {data, images} from '../components/LoansGrid/data';

export const useFilters = () => {
    const offerArray = data.map(obj => ({...obj, url: images[obj.id]}));

    const [offersList, setOffersList] = useState<OfferItems>(offerArray);
    const [isUpTo500, setIsUpTo500] = useState<boolean>(true);
    const [isSortedByAmount, setIsSortedByAmount] = useState<boolean>(false);
    const [isSortedByDuration, setIsSortedByDuration] = useState<boolean>(false);

    const filterOneMonth = () => {
        let filteredData = offerArray;
        if (isUpTo500) {
            filteredData = filteredData.filter(data => data.loanAmount < 500);
            setOffersList(filteredData);
            setIsUpTo500(!isUpTo500);
        } else {
            setOffersList(offerArray);
            setIsUpTo500(!isUpTo500);
        }
    };

    const sortByAmount = () => {
        let sortedUsers = offersList;
        if (!isSortedByAmount) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            setOffersList(sortedUsers);
            setIsSortedByAmount(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
            setOffersList(sortedUsers);
            setIsSortedByAmount(false);
        }
    };

    const sortByExpireDate = () => {
        let sortedUsers = offersList;
        if (!isSortedByDuration) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.timePeriod) > Number(b.timePeriod) ? 1 : -1));
            setOffersList(sortedUsers);
            setIsSortedByDuration(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.timePeriod) < Number(b.timePeriod) ? 1 : -1));
            setOffersList(sortedUsers);
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
        sortFilteredList: offersList,
    };
};
