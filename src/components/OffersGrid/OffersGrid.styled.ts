import styled from 'styled-components';
import {Avatar, Button} from '@material-ui/core';
import {colors} from '../../styles/theme';

export const GridView = styled.div`
    width: 80%;
    display: grid;
    grid-gap: 70px;
    padding: 100px 15px 15px 15px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    position: relative;
`;

export const GridButton = styled.div`
    width: 80%;
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 50px;
    padding: 20px 0 0 15px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    position: relative;
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr;
    width: 100%;
    height: 200px;
    padding: 10px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    transition: transform 0.1s;
    grid-template-areas:
        'image details'
        'invest invest';

    &&:hover {
        transform: scale(1.03);
    }
`;

export const StyledAvatar = styled(Avatar)`
    grid-area: image;
    align-self: center;
    justify-self: center;
    width: 100px;
    height: 100px;
`;

export const StyledLoanDetails = styled.div`
    grid-area: details;
    display: flex;
    flex-direction: column;
`;

export const StyledSpan = styled.span`
    color: ${colors.darkblue};
    font-size: 18px;
`;

export const StyledTitle = styled.h4`
    margin: 10px 0 5px 0;
`;

export const StyledAccordion = styled.div`
    grid-area: invest;
    width: 100%;
    margin-top: 20px;
`;

export const StyledDaysLeft = styled.div`
    text-align: right;
`;

export const StyledImage = styled.img`
    width: 100%;
`;

export const StyledButton = styled(Button)`
    width: 220px;
    height: 50px;
    border: none;
`;

export const StyledPagination = styled.div`
    display: flex;
`;

export const StyledPageNumber = styled.button`
    font-size: 20px;
    margin: 20px 10px;
    background-color: ${colors.white};
    color: ${colors.black};
    border: none;
`;
