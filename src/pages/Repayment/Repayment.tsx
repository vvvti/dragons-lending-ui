import React from 'react';
import {PageContainer, StyledBanking, StyledInvest, StyledTitle} from './Repayment.styled';
import {OffersGrid} from '../../components/UserDataGrid/OffersGrid/OffersGrid';

export const Repayment: React.FC = () => {
    return (
        <PageContainer>
            <StyledBanking>
                <StyledTitle>Repayment schedule</StyledTitle>
            </StyledBanking>
            <StyledInvest>
                <OffersGrid />
            </StyledInvest>
        </PageContainer>
    );
};
