import React from 'react';
import {PageContainer, PageWrapper, StatusContainer} from './LoanGrid.styled';
import {LoanCard} from '../../components/LoanCard/LoanCard';

export const LoanGrid = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
                <LoanCard />
            </PageContainer>
        </PageWrapper>
    );
};
