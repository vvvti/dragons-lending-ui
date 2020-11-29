import React, {useState} from 'react';
import {StyledButton, StyledContainer, StyledGrid, StyledGridContainer} from './DataBoard.styled';
import {DATAGRIDTYPE} from '../../helpers/constants';
import {SubmittedOffersGrid} from '../UserDataGrid/OffersGrid/SubmittedOffersGrid/SubmittedOffersGrid';
import {AuctionsGrid} from '../UserDataGrid/AuctionsGrid/AuctionsGrid';
import {ReceivedOffersGrid} from '../UserDataGrid/OffersGrid/ReceivedOffersGrid/ReceivedOffersGrid';
import {LoansGrid} from '../UserDataGrid/LoansGrid/LoansGrid';

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
                        <SubmittedOffersGrid />
                        <ReceivedOffersGrid />
                    </>
                )}
                {dataGrid === DATAGRIDTYPE.AUCTIONS && <AuctionsGrid />}
                {/*{dataGrid === DATAGRIDTYPE.LOANS && <LoansGrid />}*/}
                {/*{dataGrid === DATAGRIDTYPE.REPAYMENT && <AuctionsGrid />}*/}
            </StyledGrid>
        </StyledGridContainer>
    );
};
