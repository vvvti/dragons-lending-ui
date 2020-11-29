import React, {useState} from 'react';
import {StyledButton, StyledContainer, StyledGrid, StyledGridContainer} from './DataBoard.styled';
import {DATAGRIDTYPE} from '../../helpers/constants';
import {SubmittedOffersGrid} from '../UserDataGrid/OffersGrid/SubmittedOffersGrid/SubmittedOffersGrid';
import {AuctionsGrid} from '../UserDataGrid/AuctionsGrid/AuctionsGrid';
import {ReceivedOffersGrid} from '../UserDataGrid/OffersGrid/ReceivedOffersGrid/ReceivedOffersGrid';
import {GrantedLoansGrid} from '../UserDataGrid/LoansGrid/GrantedLoansGrid/GrantedLoansGrid';
import {TakenLoansGrid} from '../UserDataGrid/LoansGrid/TakenLoansGrid/TakenLoansGrid';

export const DataBoard: React.FC = () => {
    const [dataGrid, setDataGrid] = useState<DATAGRIDTYPE>(DATAGRIDTYPE.OFFERS);

    return (
        <StyledGridContainer>
            <StyledContainer>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.OFFERS)}>Offers</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.AUCTIONS)}>Auctions</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.TAKENLOANS)}>Taken Loans</StyledButton>
                <StyledButton onClick={() => setDataGrid(DATAGRIDTYPE.GRANTEDLOANS)}>Granted Loans</StyledButton>
            </StyledContainer>
            <StyledGrid>
                {dataGrid === DATAGRIDTYPE.OFFERS && (
                    <>
                        <SubmittedOffersGrid />
                        <ReceivedOffersGrid />
                    </>
                )}
                {dataGrid === DATAGRIDTYPE.AUCTIONS && <AuctionsGrid />}
                {dataGrid === DATAGRIDTYPE.TAKENLOANS && <TakenLoansGrid />}
                {dataGrid === DATAGRIDTYPE.GRANTEDLOANS && <GrantedLoansGrid />}
            </StyledGrid>
        </StyledGridContainer>
    );
};
