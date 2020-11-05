import React from 'react';
import {
    GridView,
    ItemContainer,
    StyledAvatar,
    StyledButton,
    StyledHeader,
    StyledLoanDetails,
    StyledRatingDetails,
    StyledSpan,
    StyledTitle,
} from './LoanCard.styled';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import {RoutesConst} from '../../helpers/routesConst';
import {NavLink} from 'react-router-dom';

export const LoanCard = () => {
    return (
        <GridView>
            <StyledHeader>
                <h1>Active loan applications</h1>
                <NavLink to={RoutesConst.CREATEOFFER}>
                    <Tooltip title="Add offer" aria-label="add">
                        <Fab color="primary">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </NavLink>
            </StyledHeader>
            <ItemContainer>
                <StyledAvatar>OW</StyledAvatar>
                <StyledRatingDetails>Oskar123</StyledRatingDetails>
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
