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
    StyledProfileText,
    StyledSummary,
    StyledSummaryNumber,
    StyledTileTitle,
    StyledTitle,
    StyledUserDetails,
    StyledUserName,
} from './UserAccount.styled';
import {OffersGrid} from '../../components/UserDataGrid/OffersGrid/OffersGrid';
import {AUTHROUTES, NONAUTHROUTES} from '../../helpers/routes';
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

    const handleButtonClick = () => {
        logout();
    };
    return (
        <PageContainer>
            <StyledGrid>
                <StyledProfile>
                    <StyledAvatar />
                    <StyledUserDetails>
                        <StyledUserName>
                            {userDetails.firstName} {userDetails.lastName}
                        </StyledUserName>
                        <StyledProfileText>{userDetails.email}</StyledProfileText>
                        <StyledProfileText>username: {userDetails.username}</StyledProfileText>
                    </StyledUserDetails>
                    <StyledButton onClick={handleButtonClick} size="small" variant="contained" color="primary">
                        Logout
                    </StyledButton>
                    <StyledNavLink to={NONAUTHROUTES.PRIVACY}>
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
                        <StyledNavLink to={AUTHROUTES.DEPOSIT}>
                            <StyledButton type="submit" size="small" variant="contained" color="primary">
                                Deposit
                            </StyledButton>
                        </StyledNavLink>
                        <StyledNavLink to={AUTHROUTES.WITHDRAWMONEY}>
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
