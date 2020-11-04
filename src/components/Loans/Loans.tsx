import React from 'react';
import {
    GridView,
    ItemContainer,
    Star,
    StyledAvatar,
    StyledButton,
    StyledLoanDetails,
    StyledRating,
    StyledRatingDetails,
    StyledSpan,
    StyledTitle,
    StyledVotes,
    Title,
} from './Loans.styled';
import star from '../../assets/star.svg';

export const Loans = () => {
    return (
        <GridView>
            <Title>Active loan applications</Title>
            <ItemContainer>
                <StyledAvatar>OW</StyledAvatar>
                <StyledRatingDetails>
                    <Star src={star} />
                    <StyledRating>4.4</StyledRating>
                    <StyledVotes>62 Votes</StyledVotes>
                </StyledRatingDetails>
                <StyledLoanDetails>
                    <StyledTitle>Want to borrow</StyledTitle>
                    <div>
                        <StyledSpan>500 GBP</StyledSpan> for <StyledSpan>30 days</StyledSpan>
                    </div>
                    <div>
                        <StyledSpan>7 %</StyledSpan> bonus <StyledSpan>30 GBP</StyledSpan>
                    </div>
                </StyledLoanDetails>
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
