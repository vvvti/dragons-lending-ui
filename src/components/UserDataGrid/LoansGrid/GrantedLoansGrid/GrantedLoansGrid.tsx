import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './GrantedLoansGrid.styled';
import {useLoans} from '../../../../hooks/useLoans';

export const GrantedLoansGrid: React.FC = () => {
    const {loansList, getLoans} = useLoans();

    useEffect(() => {
        getLoans();
    }, [getLoans]);

    let loansGranted = loansList ? loansList.loansGranted : [];

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 497},
        {field: 'timePeriod', headerName: 'Duration (months)', type: 'number', width: 200},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 200},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 200},
    ];

    return (
        <>
            <StyledContainer>
                <DataGrid rows={loansGranted} columns={columns} pageSize={3} />
            </StyledContainer>
        </>
    );
};
