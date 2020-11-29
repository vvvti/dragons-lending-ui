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

    const rowsData = loansTaken.map((obj: any) => ({
        ...obj,
        idValue: obj.id.substring(0, 8),
        date: new Date(obj.nextInstallmentDate).toLocaleDateString(),
    }));

    console.log('loansTaken', loansTaken);

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Taken Loans', width: 347},
        {field: 'username', headerName: 'Username', type: 'string', width: 150},
        {field: 'installmentsNumber', headerName: 'Installments ', type: 'number', width: 200},
        {field: 'amount', headerName: 'Amount (GBP)', type: 'number', width: 200},
        {field: 'date', headerName: 'Next payment', type: 'date', width: 200},
    ];

    return (
        <>
            <StyledContainer>
                <DataGrid rows={rowsData} columns={columns} pageSize={3} />
            </StyledContainer>
        </>
    );
};
