import styled from 'styled-components';
import {Button} from '@material-ui/core';

export const StyledButton = styled(Button)`
    grid-area: button;
    align-self: center;
    justify-self: center;
`;

export const StyledInvestForm = styled.div`
    grid-area: invest;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    align-self: center;
    justify-content: center;
`;

export const StyledPercentage = styled.div`
    flex-basis: 80px;
    margin: 0 10px;
`;

export const StyledAmount = styled.div`
    flex-basis: 200px;
`;
