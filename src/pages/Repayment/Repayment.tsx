import React from 'react';
import {PageContainer, StyledBanking, StyledInvest, StyledTitle} from './Repayment.styled';
import {SubmittedOffersGrid} from '../../components/UserDataGrid/OffersGrid/SubmittedOffersGrid/SubmittedOffersGrid';

export const Repayment: React.FC = () => {
    return (
        <PageContainer>
            <StyledBanking>
                <StyledTitle>Repayment schedule</StyledTitle>
            </StyledBanking>
            <StyledInvest>
                <SubmittedOffersGrid />
            </StyledInvest>
        </PageContainer>
    );
};
