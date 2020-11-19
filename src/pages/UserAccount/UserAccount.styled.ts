import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {Avatar} from '@material-ui/core';

export const PageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const StyledGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
        'profile banking banking banking'
        'profile invest invest invest'
        'profile invest invest invest'
        'profile loan loan loan'
        'profile loan loan loan';
    grid-template-columns: repeat(4, 1fr);
    height: 90vh;
`;

export const StyledProfile = styled.div`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding: 20px 20px;
    box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
`;
export const StyledBanking = styled.div`
    grid-area: banking;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 20px;
    box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
    height: 10vh;
`;

export const StyledInvest = styled.div`
    grid-area: invest;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px;
    box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
    height: 34vh;
`;

export const StyledLoan = styled.div`
    grid-area: loan;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px;
    box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
    height: 33vh;
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
    font-size: 20px;
`;

export const StyledTileTitle = styled.span`
    border-bottom: 2px solid hsl(232, 54%, 41%);
    font-size: 16px;
`;
export const StyledDetailsText = styled.span`
    font-size: 36px;
`;

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin-bottom: 5px;
`;

export const StyledAvatar = styled(Avatar)`
    align-self: center;
    justify-self: center;
    width: 8em;
    height: 8em;
    margin-bottom: 20px;
`;
