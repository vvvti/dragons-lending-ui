import styled from 'styled-components';
import {Avatar, Button} from '@material-ui/core';
import {colors} from '../../styles/theme';

export const PageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const StyledProfile = styled.div`
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding: 20px 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
`;
export const StyledBanking = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 10vh;
`;

export const StyledInvest = styled.div`
    grid-area: invest;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    height: 40vh;
    margin-top: 50px;
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
    width: 200px;
    height: 50px;
    margin: 5px;
`;

export const StyledTitle = styled.span`
    font-size: 20px;
`;

export const StyledTileTitle = styled.span`
    border-bottom: 2px solid ${colors.darkblue}
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
