import React from 'react';
import {PageContainer, StyledBanking, StyledInvest, StyledTitle} from './Repayment.styled';
import {MyOffersGrid} from '../../components/UserDataGrid/OffersGrid/MyOffersGrid/MyOffersGrid';

export const Repayment: React.FC = () => {
    return (
        <PageContainer>
            <StyledBanking>
                <StyledTitle>Repayment schedule</StyledTitle>
            </StyledBanking>
            <StyledInvest>
                <MyOffersGrid />
            </StyledInvest>
        </PageContainer>
    );
};
