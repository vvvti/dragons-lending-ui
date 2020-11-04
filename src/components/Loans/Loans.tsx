import React from 'react';
import {GridView, ItemContainer, Star, StyledAvatar, StyledButton, StyledName, Title} from './Loans.styled';
import star from '../../assets/star.svg';

export const Loans = () => {
    return (
        <GridView>
            <Title>Active loan applications</Title>
            <ItemContainer>
                <StyledAvatar>OW</StyledAvatar>
                <StyledName>
                    <Star src={star} />
                    4.4 62 Votes
                </StyledName>
                <StyledButton type="submit" fullWidth variant="contained" color="primary">
                    Details
                </StyledButton>
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
