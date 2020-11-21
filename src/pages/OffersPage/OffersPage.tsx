import React from 'react';
import {PageContainer, PageWrapper} from './OffersPage.styled';
import {OffersGrid} from '../../components/OffersGrid/OffersGrid';
import {StatusContainer} from '../../components/Account/StatusContainer/StatusContainer';

export const OffersPage: React.FC = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <StatusContainer />
                <OffersGrid />
            </PageContainer>
        </PageWrapper>
    );
};
