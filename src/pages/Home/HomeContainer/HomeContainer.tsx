import React from 'react';
import {Button} from '@material-ui/core';
import {ButtonContainer, StyledContainer, StyledExternalLink, StyledLink, StyledTitle} from './HomeContainer.styled';
import {CALCULATOR, PAGETYPE} from '../../../helpers/constants';
import {RoutesConst} from '../../../helpers/routesConst';

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
                        <StyledLink to={RoutesConst.LOANGRID}>Check out</StyledLink>
                    ) : (
                        <StyledExternalLink href={CALCULATOR}>Calculate</StyledExternalLink>
                    )}
                </Button>
            </ButtonContainer>
        </StyledContainer>
    );
};
