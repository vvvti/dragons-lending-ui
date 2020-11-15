import React from 'react';
import {PageContainer, PageWrapper, StatusContainer, StyledAvatar, StyledNavLink, StyledText} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
import {ROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const LoansPage: React.FC = () => {
    const {tokenStorage} = useAuthContext();
    console.log('LoansPage token', tokenStorage);

    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer>
                    <StyledNavLink to={ROUTES.LOGIN}>
                        <StyledText>Account</StyledText>
                        <StyledAvatar />
                    </StyledNavLink>
                </StatusContainer>
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
