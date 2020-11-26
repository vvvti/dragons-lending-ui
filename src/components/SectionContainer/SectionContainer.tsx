import React from 'react';
import {ButtonContainer, StyledButton, StyledContainer, StyledExternalLink, StyledLink, StyledTitle} from './SectionContainer.styled';
import {NONAUTHROUTES} from '../../helpers/routes';
import {CALCULATORPAGE, PAGETYPE} from '../../helpers/constants';

interface SectionContainerProps {
    pageType: PAGETYPE;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({pageType}) => {
    return (
        <StyledContainer>
            <StyledTitle>{pageType === PAGETYPE.AUCTIONS ? 'Social Lending' : 'Investments'}</StyledTitle>
            <ButtonContainer>
                {pageType === PAGETYPE.AUCTIONS ? (
                    <StyledLink to={NONAUTHROUTES.AUCTIONSGRID}>
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
