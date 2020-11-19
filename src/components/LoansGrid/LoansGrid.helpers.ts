import {POSTSPERPAGE} from '../../helpers/constants';
import {CreateOfferFormArray} from '../../helpers/types';

export let urlArray: string[] = [];

for (let i = 0; i < 100; i++) {
    if (i % 2) {
        urlArray.push(`https://randomuser.me/api/portraits/men/${i}.jpg`);
    } else {
        urlArray.push(`https://randomuser.me/api/portraits/women/${i}.jpg`);
    }
}

export const pages = (sortedItems: CreateOfferFormArray) => {
    const pageNumbers: any = [];

    for (let i = 1; i <= Math.ceil(sortedItems.length / POSTSPERPAGE); i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
};
