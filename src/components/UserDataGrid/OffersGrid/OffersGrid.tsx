import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useProposals} from '../../../hooks/useProposals';
import {StyledContainer, StyledNavLink} from './OffersGrid.styled';
import {ROUTES} from '../../../helpers/routes';
import {Button} from '@material-ui/core';

export const OffersGrid: React.FC = () => {
    const {proposalsList, getProposals} = useProposals();

    useEffect(() => {
        getProposals();
    }, [getProposals]);

    const rowsData = proposalsList.map(obj => ({
        ...obj,
        finalValue: obj.calculation.finalValue.toFixed(2),
        periodValue: obj.calculation.periodValue,
        idValue: obj.id.substring(0, 8),
    }));

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 300},
        {field: 'periodValue', headerName: 'Period Value ', type: 'number', width: 150},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'offerAmount', headerName: 'Amount (GBP)', type: 'number', width: 150},
        {field: 'finalValue', headerName: 'Final Value(GBP)', type: 'number', width: 150},
        {
            field: '',
            headerName: '',
            sortable: false,
            width: 120,
            disableClickEventBubbling: true,
            renderCell: () => {
                return (
                    <StyledNavLink to={ROUTES.USERHISTORY}>
                        <Button type="submit" size="small" variant="contained" color="secondary">
                            Remove
                        </Button>
                    </StyledNavLink>
                );
            },
        },
    ];

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} checkboxSelection />
        </StyledContainer>
    );
};

// {field: 'calculation', headerName: 'Duration (months)', type: 'number', width: 150},
