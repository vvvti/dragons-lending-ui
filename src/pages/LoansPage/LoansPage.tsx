import React from 'react';
import {PageContainer, PageWrapper, StatusContainer} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
import {AuthContextProvider} from '../../context/auth-context';

export const LoansPage = () => {
    return (
        <AuthContextProvider>
            <PageWrapper>
                <PageContainer>
                    <StatusContainer>Status Bar</StatusContainer>
                    <LoansGrid />
                </PageContainer>
            </PageWrapper>
        </AuthContextProvider>
    );
};
