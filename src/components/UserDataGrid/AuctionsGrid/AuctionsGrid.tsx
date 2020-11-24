import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './AuctionsGrid.styled';
import {useOffer} from '../../../hooks/useOffer';

export const AuctionsGrid: React.FC = () => {
    const {getOwnOffersList, ownOfferList} = useOffer();

    useEffect(() => {
        getOwnOffersList();
    }, [getOwnOffersList]);

    console.log('ownOfferList up ', ownOfferList);

    const columns: ColDef[] = [
        {field: 'username', headerName: 'User', width: 250},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 150},
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
    ];

    const rows = ownOfferList;

    return (
        <StyledContainer>
            <DataGrid rows={rows} columns={columns} pageSize={3} checkboxSelection />
        </StyledContainer>
    );
};
