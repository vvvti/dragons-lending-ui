import styled from 'styled-components';
import {Avatar} from '@material-ui/core';

export const GridView = styled.div`
    width: 80%;
    display: grid;
    grid-gap: 15px;
    padding: 120px 15px 15px 15px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    position: relative;
`;

export const Title = styled.h1`
    position: absolute;
    top: 30px;
    left: 10px;
    width: 100%;
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr;
    width: 100%;
    height: 200px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    grid-template-areas:
        'image details'
        'name button';
`;

export const StyledAvatar = styled(Avatar)`
    grid-area: image;
    align-self: center;
    justify-self: center;
    width: 100px;
    height: 100px;
`;
