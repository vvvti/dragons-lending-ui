import React from 'react';
import {PageContainer, PageWrapper, StatusContainer, StyledAvatar, StyledNavLink, StyledText} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
import {ROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const LoansPage: React.FC = () => {
    const {isLoggedIn} = useAuthContext();

    return (
        <PageWrapper>
            <PageContainer>
                {isLoggedIn && (
                    <StatusContainer>
                        <StyledNavLink to={ROUTES.LOGIN}>
                            <StyledText>Account</StyledText>
                            <StyledAvatar />
                        </StyledNavLink>
                    </StatusContainer>
                )}
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
