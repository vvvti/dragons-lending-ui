import React from 'react';
import {StyledButton} from './CloseButton.styled';
import {useToMain} from '../../hooks/useToPage';

export const CloseButton = () => {
    const {goToMain} = useToMain();

    return <StyledButton onClick={goToMain}>X</StyledButton>;
};
