import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledContainer = styled.div`
    margin: 0;
    background-color: ${colors.subPagesBackground};
`;

export const StyledRules = styled.div`
    margin: auto;
    max-width: 80%;
    padding: 1em 1.5em;
    text-align: justify;
    text-justify: inter-word;
    color: white;
`;
export const StyledHeader = styled.h1`
    text-align: center;
`;

export const StyledBold = styled.span`
    font-weight: bold;
`;

export const StyledH3 = styled.h3`
    margin-top: 5em;
`;
