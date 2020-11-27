import React, {useState} from 'react';
import {StyledButton, StyledContainer, StyledInvest} from './DataBoard.styled';
import {DATAGRIDTYPE} from '../../helpers/constants';
import {OffersGrid} from '../UserDataGrid/OffersGrid/OffersGrid';
import {AuctionsGrid} from '../UserDataGrid/AuctionsGrid/AuctionsGrid';

export const DataBoard: React.FC = () => {
    const [dataGrid, setDataGrid] = useState<DATAGRIDTYPE>(DATAGRIDTYPE.OFFERS);

    return (
        <StyledInvest>
            <StyledContainer>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.OFFERS)}>Offers</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.AUCTIONS)}>Auctions</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.LOANS)}>Loans</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.REPAYMENT)}>Repayment</StyledButton>
            </StyledContainer>
            <StyledContainer>
                {dataGrid === DATAGRIDTYPE.OFFERS && <OffersGrid />}
                {dataGrid === DATAGRIDTYPE.AUCTIONS && <AuctionsGrid />}
                {dataGrid === DATAGRIDTYPE.LOANS && <OffersGrid />}
                {dataGrid === DATAGRIDTYPE.REPAYMENT && <AuctionsGrid />}
            </StyledContainer>
        </StyledInvest>
    );
};
