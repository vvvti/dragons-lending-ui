import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const PageContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 20px;
    box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
`;

export const StyledTile = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    height: 120px;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
`;

export const StyledTileContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 40px 0;
`;

export const StyledButton = styled(Button)`
    width: 125px;
    height: 40px;
    margin: 15px;
`;

export const StyledTitle = styled.span`
    font-size: 26px;
`;

export const StyledTileTitle = styled.span`
    border-bottom: 2px solid hsl(232, 54%, 41%);
    font-size: 26px;
    width: 90%;
`;
export const StyledDetailsText = styled.span`
    font-size: 36px;
`;
