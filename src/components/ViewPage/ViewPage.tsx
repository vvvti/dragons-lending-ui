import React from 'react';
import {Navbar} from '../Navbar/Navbar';
import {PageContainer, PageWrapper, StatusContainer} from './ViewPage.styled';
import {Loans} from '../Loans/Loans';

export const ViewPage = () => {
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
