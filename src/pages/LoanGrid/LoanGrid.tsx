import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import {PageContainer, PageWrapper, StatusContainer} from './LoanGrid.styled';
import {LoanCard} from '../../components/LoanCard/LoanCard';

export const LoanGrid = () => {
    return (
        <PageWrapper>
            <Navbar />
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
                <LoanCard />
            </PageContainer>
        </PageWrapper>
    );
};
