import React from 'react';
import {PageContainer, PageWrapper, StatusContainer, StyledText} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
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
                        <StyledText>{tokenStorage && `Logged in as ${validToken.sub}`}</StyledText>
                    </StatusContainer>
                )}
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
