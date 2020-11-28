import styled from 'styled-components';
import {Avatar, Button} from '@material-ui/core';
import {colors} from '../../styles/theme';
import NumberFormat from 'react-number-format';
import {NavLink} from 'react-router-dom';

export const PageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 1fr;
    align-items: flex-start;
    grid-gap: 10px;
    grid-template-areas:
        'profile banking banking banking'
        'profile invest invest invest';
    min-height: 90vh;
    margin: 20px 0;
`;

export const StyledProfile = styled.div`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    min-height: 90vh;
`;
export const StyledBanking = styled.div`
    grid-area: banking;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    min-height: 10vh;
`;

export const StyledLoan = styled.div`
    grid-area: loan;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    min-height: 30vh;
`;

export const StyledTile = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    height: 120px;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 4px 12px ${colors.boxShadow};
`;

export const StyledButton = styled(Button)`
    width: 125px;
    height: 40px;
    margin: 15px;
`;

export const StyledTitle = styled.span`
    font-size: 20px;
    margin: 5px 0;
`;

export const StyledTileTitle = styled.span`
    border-bottom: 2px solid ${colors.darkblue};
    font-size: 24px;
    font-weight: 900;
    margin: 10px 0;
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

export const StyledSummary = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
`;

export const StyledSummaryNumber = styled(NumberFormat)`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 900;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledProfileText = styled.div`
    font-size: 14px;
    margin: 2px 0;
`;

export const StyledUserDetails = styled.div`
    margin: 10px 0 20px;
    text-align: center;
`;

export const StyledUserName = styled.div`
    font-size: 24px;
    font-weight: 900;
    margin: 10px 0;
`;
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;

export const StyledLoading = styled.div`
    font-size: 24px;
    font-weight: 900;
    margin: 100px 0;
`;
