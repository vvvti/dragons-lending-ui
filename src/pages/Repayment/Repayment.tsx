import React from 'react';
import {PageContainer, StyledBanking, StyledInvest, StyledTitle} from './Repayment.styled';
import {UserDataGrid} from '../../components/UserDataGrid/UserDataGrid';

export const Repayment: React.FC = () => {
    return (
        <PageContainer>
            <StyledBanking>
                <StyledTitle>Repayment schedule</StyledTitle>
            </StyledBanking>
            <StyledInvest>
                <UserDataGrid />
            </StyledInvest>
        </PageContainer>
    );
};
