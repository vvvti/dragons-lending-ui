import React from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledGrid} from './UserDataGrid.styled';
import Button from '@material-ui/core/Button';
import {StyledNavLink} from '../../pages/Deposit/Deposit.styled';
import {ROUTES} from '../../helpers/routes';
import {StyledButton} from '../../pages/UserAccount/UserAccount.styled';

const columns: ColDef[] = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'user', headerName: 'User', width: 250},
    {field: 'return', headerName: 'Return (%)', type: 'number', width: 150},
    {field: 'amount', headerName: 'Amount (GBP)', type: 'number', width: 150},
    {field: 'duration', headerName: 'Duration (months)', type: 'number', width: 150},
    {
        field: '',
        headerName: 'Button',
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: () => {
            return (
                <StyledNavLink to={ROUTES.USERHISTORY}>
                    <StyledButton type="submit" size="small" variant="contained" color="primary">
                        History
                    </StyledButton>
                </StyledNavLink>
            );
        },
    },
];

const rows = [
    {id: 1, user: 'pablo34', return: 7, amount: 500, duration: 2},
    {id: 2, user: 'andrea89', return: 3, amount: 400, duration: 3},
    {id: 3, user: 'maria56', return: 4, amount: 700, duration: 1},
    {id: 4, user: 'hugo29', return: 7, amount: 800, duration: 3},
    {id: 5, user: 'max76', return: 5, amount: 450, duration: 3},
    {id: 6, user: 'tom12', return: 4, amount: 300, duration: 2},
];

export const UserDataGrid: React.FC = () => {
    return (
        <StyledGrid>
            <DataGrid rows={rows} columns={columns} pageSize={3} checkboxSelection />
        </StyledGrid>
    );
};
