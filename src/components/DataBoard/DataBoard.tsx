import React, {useState} from 'react';
import {StyledButton, StyledContainer, StyledGrid, StyledGridContainer} from './DataBoard.styled';
import {DATAGRIDTYPE} from '../../helpers/constants';
import {MyOffersGrid} from '../UserDataGrid/OffersGrid/MyOffersGrid/MyOffersGrid';
import {AuctionsGrid} from '../UserDataGrid/AuctionsGrid/AuctionsGrid';
import {UsersOffersGrid} from '../UserDataGrid/OffersGrid/UsersOffersGrid/UsersOffersGrid';

export const DataBoard: React.FC = () => {
    const [dataGrid, setDataGrid] = useState<DATAGRIDTYPE>(DATAGRIDTYPE.OFFERS);

    return (
        <StyledGridContainer>
            <StyledContainer>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.OFFERS)}>Offers</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.AUCTIONS)}>Auctions</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.LOANS)}>Loans</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.REPAYMENT)}>Repayment</StyledButton>
            </StyledContainer>
            <StyledGrid>
                {dataGrid === DATAGRIDTYPE.OFFERS && (
                    <>
                        <MyOffersGrid />
                        <UsersOffersGrid />
                    </>
                )}
                {dataGrid === DATAGRIDTYPE.AUCTIONS && <AuctionsGrid />}
                {dataGrid === DATAGRIDTYPE.LOANS && <MyOffersGrid />}
                {dataGrid === DATAGRIDTYPE.REPAYMENT && <AuctionsGrid />}
            </StyledGrid>
        </StyledGridContainer>
    );
};
