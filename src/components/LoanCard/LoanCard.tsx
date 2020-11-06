import React from 'react';
import {
    GridView,
    ItemContainer,
    StyledAvatar,
    StyledButton,
    StyledHeader,
    StyledLoanDetails,
    StyledPercentageField,
    StyledSpan,
    StyledTextField,
    StyledTitle,
} from './LoanCard.styled';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import {RoutesConst} from '../../helpers/routesConst';
import {NavLink} from 'react-router-dom';

import {Snackbar} from '@material-ui/core';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const LoanCard = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
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
                <StyledTextField variant="outlined" label="Amount" size="small" />
                <StyledPercentageField type="number" variant="outlined" label="%" size="small" />
                <StyledLoanDetails>
                    <StyledTitle>Want to borrow</StyledTitle>
                    <div>
                        <StyledSpan>500 GBP</StyledSpan> for <StyledSpan>30 days</StyledSpan>
                    </div>
                    <div>
                        <StyledSpan>7 %</StyledSpan> bonus <StyledSpan>30 GBP</StyledSpan>
                    </div>
                </StyledLoanDetails>
                <StyledButton type="submit" fullWidth variant="contained" color="primary" onClick={handleClick}>
                    Invest
                </StyledButton>
            </ItemContainer>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Offer submitted!
                </Alert>
            </Snackbar>
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
