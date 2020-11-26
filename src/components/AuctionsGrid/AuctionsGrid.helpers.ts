import {POSTSPERPAGE} from '../../helpers/constants';
import {AuctionValues} from '../../helpers/types';

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

export const getPageNumbers = (sortedItems: AuctionValues[]) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(sortedItems.length / POSTSPERPAGE); i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
};
