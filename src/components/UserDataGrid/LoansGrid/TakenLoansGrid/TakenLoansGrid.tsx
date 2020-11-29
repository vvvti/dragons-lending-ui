import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer, StyledButton, StyledDetails} from './TakenLoansGrid.styled';
import {useLoans} from '../../../../hooks/useLoans';

export const TakenLoansGrid: React.FC = () => {
    const {loansList, getLoans, repaymentLoans, getRepayment} = useLoans();

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

    const columnsDetails: ColDef[] = [
        {field: 'repaymentAmount', headerName: 'Repayment Amount (GBP)', width: 310},
        {field: 'timelyRepaymentTime', headerName: 'Repayment date', type: 'data', width: 250},
        {field: 'status', headerName: 'Status ', type: 'string', width: 200},
    ];

    const handleClick = async (id: any) => {
        getRepayment(id);
    };

    console.log('repaymentLoans', repaymentLoans);
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

// {repaymentLoans && (<StyledContainer>
//     <StyledGrid>
//         <StyledWrapper>
//             <StyledFlex>
//                 <div>Id:</div>
//                 <div>{repaymentLoans.id}</div>
//             </StyledFlex>
//             <StyledFlex>
//                 <div>Repayment Amount:</div>
//                 <div> {repaymentLoans.calculatedRepaymentAmount} GBP</div>
//             </StyledFlex>
//             <StyledFlex>
//                 <div>Next Installment Date:</div> <div>{new Date(repaymentLoans.nextInstallmentDate).toLocaleDateString()}</div>
//             </StyledFlex>
//         </StyledWrapper>
//         <StyledList>
//             <DataGrid rows={repaymentDetails} columns={columnsDetails} pageSize={3} />
//             {/*{repaymentLoans.loanInstallments.map((obj, index) => (*/}
//             {/*    <li key={index}>*/}
//
//             {/*        Repayment Amount:{obj.repaymentAmount}GBP Time:{new Date(obj.timelyRepaymentTime).toLocaleDateString()}*/}
//             {/*        Status: {obj.status}*/}
//             {/*    </li>*/}
//             {/*))}*/}
//         </StyledList>
//
//     </StyledGrid>
//
// )}
