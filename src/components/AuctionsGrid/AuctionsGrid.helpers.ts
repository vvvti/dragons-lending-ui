import {AuctionValues, filterValues} from '../../helpers/types';
import {POSTSPERPAGE} from '../../helpers/constants';

export const getImagesUrl = (auctionsList: AuctionValues[]) => {
    const urlArray: string[] = [];

    for (let i = 0; i < auctionsList.length; i++) {
        if (i % 2) {
            urlArray.push(`https://randomuser.me/api/portraits/men/${i}.jpg`);
        } else {
            urlArray.push(`https://randomuser.me/api/portraits/women/${i}.jpg`);
        }
    }
    return urlArray;
};
export const setDisplayedSorting = (sortState: any, setSortState: any) => {
    if (sortState === 'ascending') {
        setSortState('descending');
    }
};

export const handleResetClick = (setSortState: any, setFilterConfig: any) => {
    setSortState('');
    setFilterConfig((prevState: any) => ({
        ...prevState,
        filter: false,
        active: false,
    }));
};

export const slicePage = (currentPage: any, sortedItems: any) => {
    const indexOfLastPost = currentPage * POSTSPERPAGE;
    const indexOfFirstPost = indexOfLastPost - POSTSPERPAGE;
    return sortedItems.slice(indexOfFirstPost, indexOfLastPost);
};

export const handleSortByClick = (setSortState: any, sortState: any, setFilterConfig: any) => {
    setSortState('ascending');
    setDisplayedSorting(sortState, setSortState);
    setFilterConfig((prevState: filterValues) => ({
        ...prevState,
        sort: !prevState.sort,
        active: true,
    }));
};

export const handleFilterClick = (setCurrentPage: any, setFilterConfig: any) => {
    setCurrentPage(1);
    setFilterConfig((prevState: filterValues) => ({
        ...prevState,
        filter: !prevState.filter,
        active: true,
    }));
};
