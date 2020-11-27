import styled from 'styled-components';
import {colors} from '../../styles/theme';

const activeClassName = 'active';

export const StyledButton = styled.button.attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${colors.black};
    background-color: ${colors.white};
    font-size: 24px;
    border: none;
    outline: none;
    margin: 10px 0;
    text-transform: uppercase;
    font-weight: 900;

    &:focus {
        border-bottom: 2px solid ${colors.darkblue};
    }
`;

export const StyledContainer = styled.div`
    grid-area: nav;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    padding: 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    min-height: 10vh;
    font-size: 24px;
    font-weight: 900;
`;

export const StyledGridContainer = styled.div`
    grid-area: invest;
`;

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    box-shadow: 0 4px 12px ${colors.boxShadow};
    min-height: 10vh;
    font-size: 24px;
    font-weight: 900;
`;
