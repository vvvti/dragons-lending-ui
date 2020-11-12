import {useState} from 'react';
import {OfferItems} from '../helpers/types';
import {data, images} from '../components/LoansGrid/data';

export const useFilters = () => {
    const offerArray = data.map(obj => ({...obj, url: images[obj.id]}));
    const [sortFilteredList, setSortFilteredList] = useState<OfferItems>(offerArray);
    const [isSorted, setIsSorted] = useState<boolean>(false);

    const filterOneMonth = () => {
        let filteredData = offerArray;
        filteredData = filteredData.filter(data => data.timePeriod === 1);
        setSortFilteredList(filteredData);
    };

    const filterUpTo = (loanValue: number) => {
        let filteredData = offerArray;
        filteredData = filteredData.filter(data => data.loanAmount < loanValue);
        setSortFilteredList(filteredData);
    };

    const clearFilterArray = () => {
        setSortFilteredList(offerArray);
    };

    const sortByAmount = () => {
        let sortedUsers = sortFilteredList;
        if (!isSorted) {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) > Number(b.loanAmount) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSorted(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Number(a.loanAmount) < Number(b.loanAmount) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSorted(false);
        }
    };

    const sortByExpireDate = () => {
        let sortedUsers = sortFilteredList;
        if (!isSorted) {
            sortedUsers = sortedUsers.sort((a, b) => (Date.parse(a.endDate) > Date.parse(b.endDate) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSorted(true);
        } else {
            sortedUsers = sortedUsers.sort((a, b) => (Date.parse(b.endDate) > Date.parse(a.endDate) ? 1 : -1));
            setSortFilteredList(sortedUsers);
            setIsSorted(false);
        }
    };

    return {
        filterOneMonth,
        filterUpTo,
        sortByAmount,
        sortByExpireDate,
        clearFilterArray,
        sortFilteredList,
    };
};
