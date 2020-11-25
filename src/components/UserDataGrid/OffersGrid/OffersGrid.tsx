import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useProposals} from '../../../hooks/useProposals';
import {StyledContainer} from './OffersGrid.styled';

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
        // {
        //     field: '',
        //     headerName: '',
        //     sortable: false,
        //     width: 120,
        //     disableClickEventBubbling: true,
        //     renderCell: () => {
        //         return (
        //             <Button type="submit" size="small" variant="contained" color="secondary"
        //                     onClick={deleteProposals}>
        //                 Remove
        //             </Button>
        //         );
        //     },
        // },
    ];

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} checkboxSelection />
        </StyledContainer>
    );
};

// {field: 'calculation', headerName: 'Duration (months)', type: 'number', width: 150},
