import {POSTSPERPAGE} from '../../helpers/constants';
import {OffersArray} from '../../helpers/types';

export const getImagesUrl = (offersList: OffersArray) => {
    const urlArray: string[] = [];

    for (let i = 0; i < offersList.length; i++) {
        if (i % 2) {
            urlArray.push(`https://randomuser.me/api/portraits/men/${i}.jpg`);
        } else {
            urlArray.push(`https://randomuser.me/api/portraits/women/${i}.jpg`);
        }
    }
    return urlArray;
};

export const getPageNumbers = (sortedItems: OffersArray) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(sortedItems.length / POSTSPERPAGE); i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
};
