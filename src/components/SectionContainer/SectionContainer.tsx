import React from 'react';
import {Button} from '@material-ui/core';
import {ButtonContainer, StyledContainer, StyledExternalLink, StyledLink, StyledTitle} from './SectionContainer.styled';
import {CALCULATOR, PAGETYPE} from '../../helpers/constants';
import {ROUTES} from '../../helpers/routes';

interface SectionContainerProps {
    pageType: number;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({pageType}) => {
    return (
        <StyledContainer>
            <StyledTitle>{pageType === PAGETYPE.LOGIN ? 'Social Lending' : 'Investments'}</StyledTitle>
            <ButtonContainer>
                <Button color="secondary" variant="contained" size="large">
                    {pageType === PAGETYPE.LOGIN ? (
                        <StyledLink to={ROUTES.LOANGRID}>Check out</StyledLink>
                    ) : (
                        <StyledExternalLink href={CALCULATOR}>Calculate</StyledExternalLink>
                    )}
                </Button>
            </ButtonContainer>
        </StyledContainer>
    );
};
