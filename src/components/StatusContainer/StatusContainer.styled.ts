import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledStatus = styled.div`
    display: flex;
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    padding: 0 20px;
`;

export const StyledText = styled.div`
    align-self: center;
    color: ${colors.black};
`;
