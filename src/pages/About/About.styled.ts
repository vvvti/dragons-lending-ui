import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledContainer = styled.div`
    margin: 0;
    background-color: ${colors.subPagesBackground};
`;

export const StyledAbout = styled.div`
    margin: auto;
    max-width: 80%;
    padding: 1em 1.5em;
    text-align: justify;
    text-justify: inter-word;
    color: white;
    height: 95vh;
`;
export const StyledHeader = styled.h1`
    text-align: center;
`;

export const StyledParagraph = styled.p`
    margin-top: 50px;
    line-height: 200%;
`;

export const StyledWishes = styled.div`
    margin-top: 100px;
`;
