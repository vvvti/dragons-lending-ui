import styled from 'styled-components';
import {colors} from '../../../styles/theme';

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
