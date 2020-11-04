import React from 'react';
import {GridView, ItemContainer, StyledAvatar, Title} from './Loans.styled';

export const Loans = () => {
    return (
        <GridView>
            <Title>Active loan applications</Title>
            <ItemContainer>
                <StyledAvatar>OW</StyledAvatar>
            </ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
            <ItemContainer>Item</ItemContainer>
        </GridView>
    );
};
