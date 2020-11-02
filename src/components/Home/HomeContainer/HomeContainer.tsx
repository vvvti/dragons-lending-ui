import React from 'react';
import {Button} from '@material-ui/core';
import {ButtonContainer, StyledContainer, StyledList, StyledTitle} from './HomeContainer.styled';

interface IProps {
    title: string;
}

export const HomeContainer: React.FC<IProps> = ({title}) => {
    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                <li>line1</li>
                <li>line2</li>
                <li>line3</li>
            </StyledList>
            <ButtonContainer>
                <Button color="secondary" variant="contained" size="large">
                    {title === 'Investments' ? 'Calculate' : 'Register'}
                </Button>
            </ButtonContainer>
        </StyledContainer>
    );
};
