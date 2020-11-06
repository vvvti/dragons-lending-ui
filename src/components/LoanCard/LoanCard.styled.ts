import styled from 'styled-components';
import {Avatar, Button, Snackbar, TextField} from '@material-ui/core';

export const GridView = styled.div`
    width: 80%;
    display: grid;
    grid-gap: 15px;
    padding: 100px 15px 15px 15px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    position: relative;
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 70px 1fr;
    grid-template-rows: 100px 1fr;
    width: 100%;
    height: 200px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    grid-template-areas:
        'image details details'
        'button percentage amount';
`;

export const StyledAvatar = styled(Avatar)`
    grid-area: image;
    align-self: center;
    justify-self: center;
    width: 100px;
    height: 100px;
`;

export const StyledTextField = styled(TextField)`
    grid-area: amount;
    align-self: center;
    justify-self: left;
    display: flex;
    align-items: center;
    max-width: 150px;
`;

export const StyledPercentageField = styled(TextField)`
    grid-area: percentage;
    align-self: center;
    justify-self: center;
    max-width: 60px;
`;

export const StyledButton = styled(Button)`
    grid-area: button;
    align-self: center;
    justify-self: right;
    max-width: 150px;
`;

export const StyledLoanDetails = styled.div`
    grid-area: details;
    display: flex;
    flex-direction: column;
`;

export const StyledSpan = styled.span`
    color: darkblue;
    font-size: 18px;
`;

export const StyledTitle = styled.h4`
    margin: 10px 0;
`;

export const StyledHeader = styled.div`
    position: absolute;
    padding: 0 20px;
    top: 20px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const StyledSnackbar = styled(Snackbar)`
    color: red;
`;
