import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './GrantedLoansGrid.styled';
import {useLoans} from '../../../../hooks/useLoans';
import {StyledButton, StyledDetails} from '../TakenLoansGrid/TakenLoansGrid.styled';

export const GrantedLoansGrid: React.FC = () => {
    const {loansList, getLoans, repaymentLoans, getRepayment} = useLoans();

    useEffect(() => {
        getLoans();
    }, [getLoans]);

    let loansGranted = loansList ? loansList.loansGranted : [];

    const rowsData = loansGranted.map((obj: any) => ({
        ...obj,
        idValue: obj.id.substring(0, 8),
        date: new Date(obj.nextInstallmentDate).toLocaleDateString(),
    }));

    console.log('loansTaken', loansGranted);

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Granted Loans', width: 247},
        {field: 'username', headerName: 'Username', type: 'string', width: 150},
        {field: 'installmentsNumber', headerName: 'Installments ', type: 'number', width: 200},
        {field: 'amount', headerName: 'Amount (GBP)', type: 'number', width: 200},
        {field: 'date', headerName: 'Next payment', type: 'date', width: 200},
        {
            field: '',
            headerName: 'Actions',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: ({data}) => {
                return (
                    <StyledButton onClick={() => handleClick(data.id)} type="submit" size="small" variant="contained" color="primary">
                        Details
                    </StyledButton>
                );
            },
        },
    ];

    const columnsDetails: ColDef[] = [
        {field: 'status', headerName: 'Status ', type: 'string', width: 157},
        {field: 'repaymentAmount', headerName: 'Repayment Amount (GBP)', width: 300},
        {field: 'timelyRepaymentTime', headerName: 'Repayment date', type: 'data', width: 200},
    ];

    const handleClick = async (id: any) => {
        getRepayment(id);
    };

    const repaymentData = repaymentLoans ? repaymentLoans.loanInstallments : [];

    const repaymentDetails = repaymentData.map((obj, index) => ({
        ...obj,
        id: index,
        timelyRepaymentTime: new Date(obj.timelyRepaymentTime).toLocaleDateString(),
    }));

    return (
        <>
            <StyledContainer>
                <DataGrid rows={rowsData} columns={columns} pageSize={3} />
            </StyledContainer>
            <StyledDetails>{repaymentLoans && <DataGrid rows={repaymentDetails} columns={columnsDetails} pageSize={12} />}</StyledDetails>
        </>
    );
};
