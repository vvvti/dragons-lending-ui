import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './GrantedLoansGrid.styled';
import {useLoans} from '../../../../hooks/useLoans';
import {StyledButton, StyledGrid} from '../TakenLoansGrid/TakenLoansGrid.styled';

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
        {field: 'idValue', headerName: 'Taken Loans', width: 247},
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

    const handleClick = async (id: any) => {
        getRepayment(id);
    };

    console.log('repaymentLoans', repaymentLoans);

    return (
        <>
            <StyledContainer>
                <DataGrid rows={rowsData} columns={columns} pageSize={3} />
            </StyledContainer>
            {repaymentLoans && (
                <StyledGrid>
                    <div>Id: {repaymentLoans.id}</div>
                    <div>Repayment Amount: {repaymentLoans.calculatedRepaymentAmount}GBP</div>
                    <div>Next Installment Date:{new Date(repaymentLoans.nextInstallmentDate).toLocaleDateString()}</div>
                    <ul>
                        {repaymentLoans.loanInstallments.map((obj, index) => (
                            <li key={index}>
                                Repayment Amount:{obj.repaymentAmount}GBP Time:{new Date(obj.timelyRepaymentTime).toLocaleDateString()}
                                Status: {obj.status}
                            </li>
                        ))}
                    </ul>
                </StyledGrid>
            )}
        </>
    );
};
