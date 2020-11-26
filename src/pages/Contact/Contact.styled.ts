import styled from 'styled-components';
import {colors} from '../../styles/theme';

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 80vh;
    background-color: ${colors.subPagesBackground};
`;

export const StyledContact = styled.div`
    margin: auto;
    max-width: 50%;
    padding: 1em 1.5em;
    text-align: justify;
    text-justify: inter-word;
    position: relative;
`;
export const StyledHeader = styled.h1`
    text-align: center;
`;

export const StyledH4 = styled.h4`
    margin-top: 5em;
`;

export const StyledMan = styled.img`
    max-height: 700px;
`;

export const ContactItem = styled.div`
    position: absolute;
    left: 4em;
    top: 26em;
`;
