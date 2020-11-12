import React from 'react';
import {useHistory} from 'react-router';
import {StyledButton} from './CloseButton.styled';

export const CloseButton = () => {
    const history = useHistory();

    const goBack = () => {
        const location = {
            pathname: '/loangrid',
        };
        history.push(location);
    };

    return <StyledButton onClick={goBack}>X</StyledButton>;
};
