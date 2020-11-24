import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './AuctionsGrid.styled';
import {useOffer} from '../../../hooks/useOffer';

export const AuctionsGrid: React.FC = () => {
    const {getOwnOffersList, ownOfferList} = useOffer();

    useEffect(() => {
        getOwnOffersList();
    }, [getOwnOffersList]);

    const columns: ColDef[] = [
        {field: 'username', headerName: 'User', width: 500},
        {field: 'timePeriod', headerName: 'Duration (months)', type: 'number', width: 150},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 150},
    ];

    const rows = ownOfferList;

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={3} checkboxSelection />
        </StyledContainer>
    );
};

// {field: 'calculation', headerName: 'Duration (months)', type: 'number', width: 150},
// {
//     field: '',
//     headerName: 'Button',
//     sortable: false,
//     width: 300,
//     disableClickEventBubbling: true,
//     renderCell: () => {
//         return (
//             <StyledNavLink to={ROUTES.USERHISTORY}>
//                 <StyledButton type="submit" size="small" variant="contained" color="primary">
//                     History
//                 </StyledButton>
//             </StyledNavLink>
//         );
//     },
// },
