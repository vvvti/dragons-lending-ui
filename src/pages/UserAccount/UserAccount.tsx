import React from 'react';
import {
    PageContainer,
    StyledButton,
    StyledAvatar,
    StyledTileTitle,
    StyledTitle,
    StyledGrid,
    StyledProfile,
    StyledBanking,
    StyledInvest,
    StyledLoan,
    StyledHeader,
} from './UserAccount.styled';
import {UserDataGrid} from '../../components/UserDataGrid/UserDataGrid';

export const UserAccount: React.FC = () => {
    return (
        <PageContainer>
            <StyledGrid>
                <StyledProfile>
                    <StyledAvatar />
                    <StyledTitle>Jan Kowalski</StyledTitle>
                </StyledProfile>
                <StyledBanking>
                    <StyledTitle>Account balance: 2 000 GBP</StyledTitle>
                    <div>
                        <StyledButton type="submit" size="small" variant="contained" color="primary">
                            Deposit
                        </StyledButton>
                        <StyledButton type="submit" size="small" variant="contained" color="primary">
                            Withdraw
                        </StyledButton>
                    </div>
                </StyledBanking>
                <StyledInvest>
                    <StyledHeader>
                        <StyledTileTitle>Invested capital: 400 GBP</StyledTileTitle>
                        <StyledTileTitle>Average return: 7%</StyledTileTitle>
                    </StyledHeader>
                    <UserDataGrid />
                </StyledInvest>
                <StyledLoan>
                    <StyledHeader>
                        <StyledTileTitle>Borrowed capital: 400 GBP</StyledTileTitle>
                        <StyledTileTitle>Average intrest rate: 10%</StyledTileTitle>
                    </StyledHeader>
                    <UserDataGrid />
                </StyledLoan>
            </StyledGrid>
        </PageContainer>
    );
};
