import React from 'react';
import {ButtonContainer, StyledContainer, StyledExternalLink, StyledLink, StyledTitle, StyledButton} from './SectionContainer.styled';
import {NONAUTHROUTES} from '../../helpers/routes';
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
                    <StyledLink to={NONAUTHROUTES.OFFERSGRID}>
                        <StyledButton variant="contained" size="large">
                            Check out
                        </StyledButton>
                    </StyledLink>
                ) : (
                    <StyledExternalLink href={CALCULATORPAGE}>
                        <StyledButton variant="contained" size="large">
                            Calculate
                        </StyledButton>
                    </StyledExternalLink>
                )}
            </ButtonContainer>
        </StyledContainer>
    );
};
