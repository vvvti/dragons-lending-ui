import React from 'react';
import {PageContainer, PageWrapper} from './AuctionsPage.styled';
import {AuctionsGrid} from '../../components/AuctionsGrid/AuctionsGrid';
import {StatusContainer} from '../../components/Account/StatusContainer/StatusContainer';

export const AuctionsPage: React.FC = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer />
                <AuctionsGrid />
            </PageContainer>
        </PageWrapper>
    );
};
