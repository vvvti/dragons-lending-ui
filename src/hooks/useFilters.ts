import {useState} from 'react';
import {OfferItems} from '../helpers/types';
import {data, images} from '../components/LoansGrid/data';

export const useFilters = () => {
    const offerArray = data.map(obj => ({...obj, url: images[obj.id]}));

    const [sortFilteredList, setSortFilteredList] = useState<OfferItems>(offerArray);
    const [isUpTo, stIsUpTo] = useState<boolean>(true);
    const [isSortedByAmount, setIsSortedByAmount] = useState<boolean>(false);
    const [isSortedByDuration, setIsSortedByDuration] = useState<boolean>(false);

    const filterOneMonth = () => {
        let filteredData = offerArray;
        if (isUpTo) {
            filteredData = filteredData.filter(data => data.loanAmount < 500);
            setSortFilteredList(filteredData);
            stIsUpTo(!isUpTo);
        } else {
            setSortFilteredList(offerArray);
            stIsUpTo(!isUpTo);
        }
    };

    const sortByAmount = () => {
        let sortedUsers = sortFilteredList;
        if (!isSortedByAmount) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSortedByAmount(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSortedByAmount(false);
        }
    };

    const sortByExpireDate = () => {
        let sortedUsers = sortFilteredList;
        if (!isSortedByDuration) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.timePeriod) > Number(b.timePeriod) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSortedByDuration(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.timePeriod) < Number(b.timePeriod) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSortedByDuration(false);
        }
    };

    return {
        filterOneMonth,
        sortByAmount,
        sortByExpireDate,
        isUpTo: isUpTo,
        isSortedByDuration,
        isSortedByAmount,
        sortFilteredList,
    };
};
