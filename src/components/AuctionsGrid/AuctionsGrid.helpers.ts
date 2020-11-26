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
