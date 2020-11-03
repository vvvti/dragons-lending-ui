import React from 'react';
import {Button} from '@material-ui/core';
import {ButtonContainer, StyledContainer, StyledExternalLink, StyledLink, StyledTitle} from './HomeContainer.styled';
import {ROUTES} from '../../../helpers/routes';
import {CALCULATOR, PAGETYPE} from '../../../helpers/constants';

interface IProps {
    pageType: number;
}

export const HomeContainer: React.FC<IProps> = ({pageType}) => {
    return (
        <StyledContainer>
            <StyledTitle>{pageType === PAGETYPE.LOGIN ? 'Social Lending' : 'Investments'}</StyledTitle>
            <ButtonContainer>
                <Button color="secondary" variant="contained" size="large">
                    {pageType === PAGETYPE.LOGIN ? (
                        <StyledLink to={ROUTES.REGISTER}>Register</StyledLink>
                    ) : (
                        <StyledExternalLink href={CALCULATOR}>Calculate</StyledExternalLink>
                    )}
                </Button>
            </ButtonContainer>
        </StyledContainer>
    );
};
