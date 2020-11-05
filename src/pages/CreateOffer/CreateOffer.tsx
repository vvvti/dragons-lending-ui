import React from 'react';
import {Navbar} from '../../components/Navbar/Navbar';
import {PageContainer, PageWrapper, StatusContainer} from './CreateOffer.styled';

export const CreateOffer = () => {
    return (
        <PageWrapper>
            <Navbar />
            <PageContainer>
                <StatusContainer>Status Bar</StatusContainer>
            </PageContainer>
        </PageWrapper>
    );
};
