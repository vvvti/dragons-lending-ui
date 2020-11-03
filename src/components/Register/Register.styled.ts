import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {Button} from '@material-ui/core';

export const StyledPaper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
    background-color: hsl(339, 100%, 43%);
    margin: 10px 0;
`;

export const StyledForm = styled.form`
    margin-top: 20px;
    width: 100%;
`;
export const StyledButton = styled(Button)`
    margin: 20px 0;
`;
