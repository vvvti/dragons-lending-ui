import React from 'react';
import {StyledButton} from './CloseButton.styled';
import {useToPage} from '../../hooks/useToPage';

export const CloseButton: React.FC = () => {
    const {goToMain} = useToPage();

    return <StyledButton onClick={goToMain}>X</StyledButton>;
};
