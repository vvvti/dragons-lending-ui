import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useProposals} from '../../../hooks/useProposals';
import {StyledContainer} from './OffersGrid.styled';

export const OffersGrid: React.FC = () => {
    const {proposalsList, getProposals} = useProposals();

    useEffect(() => {
        getProposals();
    }, [getProposals]);

    const rowsData = proposalsList.map((obj: any) => ({
        ...obj,
        finalValue: obj.calculation.finalValue.toFixed(2),
        periodValue: obj.calculation.periodValue,
        idValue: obj.id.substring(0, 8),
    }));

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 450},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'offerAmount', headerName: 'Amount (GBP)', type: 'number', width: 150},
        {field: 'finalValue', headerName: 'Final Value(GBP)', type: 'number', width: 150},
    ];

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} checkboxSelection />
        </StyledContainer>
    );
};
