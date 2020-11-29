import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './LoansGrid.styled';
import {useLoans} from '../../../hooks/useLoans';
import {LoansList} from '../../../helpers/types';

export const LoansGrid: React.FC = () => {
    const {loansList, getLoans} = useLoans();

    useEffect(() => {
        getLoans();
    }, [getLoans]);

    const LoansGranted = loansList ? loansList.LoansGranted : [];
    const LoansTaken = loansList ? loansList.LoansTaken : [];

    console.log('LoansGranted,LoansTaken', LoansGranted, LoansTaken);

    // const rowsData = loansList.map((obj: any) => ({
    //     ...obj,
    //     idValue: obj.id.substring(0, 8),
    // }));

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 397},
        {field: 'timePeriod', headerName: 'Duration (months)', type: 'number', width: 200},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 200},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 200},
    ];

    return (
        <StyledContainer>
            <DataGrid rows={LoansGranted} columns={columns} pageSize={3} />
        </StyledContainer>
    );
};
