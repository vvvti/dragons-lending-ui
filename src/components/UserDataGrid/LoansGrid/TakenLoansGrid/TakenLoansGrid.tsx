import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './TakenLoansGrid.styled';
import {useLoans} from '../../../../hooks/useLoans';

export const TakenLoansGrid: React.FC = () => {
    const {loansList, getLoans} = useLoans();

    useEffect(() => {
        getLoans();
    }, [getLoans]);

    const loansTaken = loansList ? loansList.loansTaken : [];

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 497},
        {field: 'timePeriod', headerName: 'Duration (months)', type: 'number', width: 200},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 200},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 200},
    ];

    return (
        <>
            <StyledContainer>
                <DataGrid rows={loansTaken} columns={columns} pageSize={3} />
            </StyledContainer>
        </>
    );
};
