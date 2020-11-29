import styled from 'styled-components';
import {colors} from '../../../../styles/theme';
import {Button} from '@material-ui/core';

export const StyledContainer = styled.div`
    min-height: 300px;
    width: 100%;
    margin: 5px;

    .MuiDataGrid-colCell {
        font-size: 18px;
        background-color: ${colors.gray};
        color: white;
    }
`;

export const StyledDetails = styled.div`
    min-height: 800px;
    width: 70%;
    margin: 5px;

    .MuiDataGrid-colCell {
        font-size: 18px;
        background-color: ${colors.gray};
        color: white;
    }
`;

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-size: 12px;
`;

export const StyledButton = styled(Button)`
    background-color: ${colors.green};
    color: white;
`;

export const StyledList = styled.div`
    list-style: none;
`;
