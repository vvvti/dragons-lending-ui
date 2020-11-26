import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledPagination = styled.div`
    display: flex;
`;

export const StyledPageNumber = styled.button`
    font-size: 20px;
    margin: 20px 10px;
    background-color: ${colors.white};
    color: ${colors.black};
    border: none;
`;
