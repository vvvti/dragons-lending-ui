import React from 'react';
import {PageContainer, PageWrapper, StatusContainer} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';

export const LoansPage: React.FC = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
