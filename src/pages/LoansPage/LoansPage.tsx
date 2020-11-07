import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import {PageContainer, PageWrapper, StatusContainer} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';

export const LoansPage = () => {
    return (
        <PageWrapper>
            <Navbar />
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
