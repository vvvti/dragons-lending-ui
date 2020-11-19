import React from 'react';
import {PageContainer, PageWrapper} from './LoansPage.styled';
import {LoansGrid} from '../../components/LoansGrid/LoansGrid';
import {StatusContainer} from '../../components/Account/StatusContainer/StatusContainer';

export const LoansPage: React.FC = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer />
                <LoansGrid />
            </PageContainer>
        </PageWrapper>
    );
};
