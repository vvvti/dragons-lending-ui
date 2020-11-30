import styled from 'styled-components';
import {Avatar, Button} from '@material-ui/core';
import {colors} from '../../styles/theme';

export const ButtonsGrid = styled.div`
    width: 80%;
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 50px;
    padding: 20px 0 0 15px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    position: relative;
`;

export const StyledAvatar = styled(Avatar)`
    grid-area: image;
    align-self: center;
    justify-self: center;
    width: 100px;
    height: 100px;
`;

export const StyledTitle = styled.h4`
    margin: 10px 0 5px 0;
`;

export const StyledImage = styled.img`
    width: 100%;
`;

export const StyledButton = styled(Button)`
    width: 220px;
    height: 50px;
    border: none;
`;

export const StyledPageNumber = styled.button`
    font-size: 20px;
    margin: 20px 10px;
    background-color: ${colors.white};
    color: ${colors.black};
    border: none;
`;

export const StyledAvatarContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
