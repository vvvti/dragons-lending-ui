import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import {NavLink} from 'react-router-dom';
import {StyledHeader} from './LoansHeader.styled';
import {ROUTES} from '../../../helpers/routes';

export const LoansHeader: React.FC = () => {
    return (
        <StyledHeader>
            <h1>Active loan applications</h1>
            <NavLink to={ROUTES.CREATEOFFER}>
                <Tooltip title="Add offer" aria-label="add">
                    <Fab color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </NavLink>
        </StyledHeader>
    );
};
