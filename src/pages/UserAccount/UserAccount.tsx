import React, {useEffect} from 'react';
import {
    PageContainer,
    StyledAvatar,
    StyledBanking,
    StyledButton,
    StyledContainer,
    StyledGrid,
    StyledNavLink,
    StyledProfile,
    StyledProfileText,
    StyledSummary,
    StyledSummaryNumber,
    StyledTitle,
    StyledUserDetails,
    StyledUserName,
} from './UserAccount.styled';
import {AUTHROUTES, NONAUTHROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';
import {useAccountBalance} from '../../hooks/useAccountBalance';
import {CURRENCY} from '../../helpers/constants';
import {useUser} from '../../hooks/useUser';
import {DataBoard} from '../../components/DataBoard/DataBoard';

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
                <DataBoard />
            </StyledGrid>
        </PageContainer>
    );
};
