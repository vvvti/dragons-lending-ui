import React, {useEffect} from 'react';
import {
    PageContainer,
    StyledAvatar,
    StyledBanking,
    StyledButton,
    StyledContainer,
    StyledGrid,
    StyledHeader,
    StyledInvest,
    StyledLoan,
    StyledProfile,
    StyledSummary,
    StyledSummaryNumber,
    StyledTileTitle,
    StyledTitle,
    StyledProfileText,
} from './UserAccount.styled';
import {OffersGrid} from '../../components/UserDataGrid/OffersGrid/OffersGrid';
import {ROUTES} from '../../helpers/routes';
import {StyledNavLink} from '../Deposit/Deposit.styled';
import {useAuthContext} from '../../context/auth-context';
import {useAccountBalance} from '../../hooks/useAccountBalance';
import {CURRENCY} from '../../helpers/constants';
import {AuctionsGrid} from '../../components/UserDataGrid/AuctionsGrid/AuctionsGrid';
import {useUser} from '../../hooks/useUser';

export const UserAccount: React.FC = () => {
    const {getAccountValue, accountBalance} = useAccountBalance();
    const {logout} = useAuthContext();

    const {userDetails, getUserDetails} = useUser();

    useEffect(() => {
        getAccountValue();
        getUserDetails();
    }, [getAccountValue, getUserDetails]);

    console.log('userDetails up', userDetails);

    const handleButtonClick = () => {
        logout();
    };
    return (
        <PageContainer>
            <StyledGrid>
                <StyledProfile>
                    <StyledAvatar />
                    <StyledProfileText>
                        {userDetails.firstName} {userDetails.lastName}
                    </StyledProfileText>
                    <StyledProfileText>{userDetails.email}</StyledProfileText>
                    <StyledProfileText>username: {userDetails.username}</StyledProfileText>
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
                    <StyledSummary>
                        <StyledContainer>
                            <StyledTitle>Account balance:</StyledTitle>
                            <StyledSummaryNumber
                                value={accountBalance.balance}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={CURRENCY.GBP}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <StyledTitle>Available funds: </StyledTitle>

                            <StyledSummaryNumber
                                value={accountBalance.availableFunds}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={CURRENCY.GBP}
                            />
                        </StyledContainer>
                    </StyledSummary>
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
                        <StyledTileTitle>Offers</StyledTileTitle>
                    </StyledHeader>
                    <OffersGrid />
                </StyledInvest>
                <StyledLoan>
                    <StyledHeader>
                        <StyledTileTitle>Auctions</StyledTileTitle>
                    </StyledHeader>
                    <AuctionsGrid />
                </StyledLoan>
            </StyledGrid>
        </PageContainer>
    );
};
