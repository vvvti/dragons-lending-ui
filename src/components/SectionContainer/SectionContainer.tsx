import React from 'react';
import {Button} from '@material-ui/core';
import {ButtonContainer, StyledContainer, StyledExternalLink, StyledLink, StyledTitle} from './SectionContainer.styled';
import {ROUTES} from '../../helpers/routes';
import {CALCULATORPAGE, PAGETYPE} from '../../helpers/constants';

interface SectionContainerProps {
    pageType: PAGETYPE;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({pageType}) => {
    return (
        <StyledContainer>
            <StyledTitle>{pageType === PAGETYPE.OFFERS ? 'Social Lending' : 'Investments'}</StyledTitle>
            <ButtonContainer>
                {pageType === PAGETYPE.OFFERS ? (
                    <StyledLink to={ROUTES.OFFERSGRID}>
                        <Button color="secondary" variant="contained" size="large">
                            Check out
                        </Button>
                    </StyledLink>
                ) : (
                    <StyledExternalLink href={CALCULATORPAGE}>
                        <Button color="secondary" variant="contained" size="large">
                            Calculate
                        </Button>
                    </StyledExternalLink>
                )}
            </ButtonContainer>
        </StyledContainer>
    );
};
