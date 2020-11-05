import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import {PageContainer, PageWrapper, StatusContainer} from './LoanGrid.styled';
import {Loans} from './Loans/Loans';

export const LoanGrid = () => {
    return (
        <PageWrapper>
            <Navbar />
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
                <Loans />
            </PageContainer>
        </PageWrapper>
    );
};
