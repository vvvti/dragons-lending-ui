import React from 'react';
import {GridView} from './AuciotnsDetails.styled';
import {AuctionValues} from '../../../helpers/types';
import {Loading} from '../../Loading/Loading';
import {AuctionsHeader} from '../AuctionsHeader/AuctionsHeader';
import {AuctionDetails} from './AuctionDetails/AuctionDetails';

export const AuctionsDetails: React.FC<{currentAuctions: AuctionValues[]}> = ({currentAuctions}) => {
    return (
        <GridView data-testid={'grid-results'}>
            <AuctionsHeader />
            {Number(currentAuctions.length) ? (
                currentAuctions.map(auction => <AuctionDetails key={auction.id} auction={auction} />)
            ) : (
                <Loading />
            )}
        </GridView>
    );
};
