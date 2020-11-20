import React from 'react';
import {
    PageContainer,
    StyledAvatar,
    StyledBanking,
    StyledButton,
    StyledGrid,
    StyledHeader,
    StyledInvest,
    StyledLoan,
    StyledProfile,
    StyledTileTitle,
    StyledTitle,
} from './UserAccount.styled';
import {UserDataGrid} from '../../components/UserDataGrid/UserDataGrid';
import {ROUTES} from '../../helpers/routes';
import {StyledNavLink} from '../Deposit/Deposit.styled';
import {useAuthContext} from '../../context/auth-context';

export const UserAccount: React.FC = () => {
    const {logout} = useAuthContext();

    const handleButtonClick = () => {
        logout();
    };
    return (
        <PageContainer>
            <StyledGrid>
                <StyledProfile>
                    <StyledAvatar />
                    <StyledTitle>Jan Kowalski</StyledTitle>
                    <StyledButton onClick={handleButtonClick} size="small" variant="contained" color="primary">
                        Logout
                    </StyledButton>
                    <StyledNavLink to={ROUTES.PRIVACY}>
                        <StyledButton type="submit" size="small" variant="contained" color="primary">
                            Privacy
                        </StyledButton>
                    </StyledNavLink>
                </StyledProfile>
                <StyledBanking>
                    <StyledTitle>Account balance: 2 000 GBP</StyledTitle>
                    <div>
                        <StyledNavLink to={ROUTES.DEPOSIT}>
                            <StyledButton type="submit" size="small" variant="contained" color="primary">
                                Deposit
                            </StyledButton>
                        </StyledNavLink>
                        <StyledNavLink to={ROUTES.WITHDRAWMONEY}>
                            <StyledButton type="submit" size="small" variant="contained" color="primary">
                                Withdrawal
                            </StyledButton>
                        </StyledNavLink>
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
                        <StyledTileTitle>Average interest rate: 10%</StyledTileTitle>
                    </StyledHeader>
                    <UserDataGrid />
                </StyledLoan>
            </StyledGrid>
        </PageContainer>
    );
};
