import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './AuctionsGrid.styled';
import {useAuctions} from '../../../hooks/useAuctions';

export const AuctionsGrid: React.FC = () => {
    const {getOwnAuctionsList, ownAuctionsList} = useAuctions();

    useEffect(() => {
        getOwnAuctionsList();
    }, [getOwnAuctionsList]);

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 500},
        {field: 'timePeriod', headerName: 'Duration (months)', type: 'number', width: 150},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 150},
    ];

    const rowsData = ownAuctionsList.map((obj: any) => ({
        ...obj,
        idValue: obj.id.substring(0, 8),
    }));

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} checkboxSelection />
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
