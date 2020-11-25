import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledFooter = styled.div`
    background-color: hsl(240, 2%, 16%);
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: ${colors.dragonOrange};
`;

export const StyledListElement = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: 12px;
    margin-left -40px;
`;
