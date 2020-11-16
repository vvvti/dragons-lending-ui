import React from 'react';
import {PageContainer, PageWrapper, StatusContainer, StyledAvatar, StyledNavLink, StyledText} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
import {ROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';
import jwtDecode from 'jwt-decode';

export const LoansPage: React.FC = () => {
    const {isLoggedIn, tokenStorage} = useAuthContext();
    let validToken: any;

    if (tokenStorage) {
        validToken = jwtDecode(tokenStorage);
    }

    return (
        <PageWrapper>
            <PageContainer>
                {isLoggedIn && (
                    <StatusContainer>
                        <StyledNavLink to={ROUTES.LOGIN}>
                            <StyledText>{tokenStorage && `Logged in as ${validToken.sub}`}</StyledText>
                            <StyledAvatar />
                        </StyledNavLink>
                    </StatusContainer>
                )}
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
