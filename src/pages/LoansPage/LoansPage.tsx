import React from 'react';
<<<<<<< HEAD:src/pages/LoanGrid/LoanGrid.tsx
import {PageContainer, PageWrapper, StatusContainer} from './LoanGrid.styled';
import {LoanCard} from '../../components/LoanCard/LoanCard';
=======
import {Navbar} from '../../components/Navbar/Navbar';
import {PageContainer, PageWrapper, StatusContainer} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
>>>>>>> b4937a7c5d30e39d627c540b1f75627c83f09a1a:src/pages/LoansPage/LoansPage.tsx

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
