import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import {RoutesConst} from '../../../helpers/routesConst';
import {NavLink} from 'react-router-dom';
import {StyledHeader} from './LoansHeader.styled';

export const LoansHeader = () => {
    return (
        <StyledHeader>
            <h1>Active loan applications</h1>
            <NavLink to={RoutesConst.CREATEOFFER}>
                <Tooltip title="Add offer" aria-label="add">
                    <Fab color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </NavLink>
        </StyledHeader>
    );
};
