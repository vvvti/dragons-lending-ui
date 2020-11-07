import React from 'react';
import {PageContainer, PageWrapper, StatusContainer} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';

export const LoansPage = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
