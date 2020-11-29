import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledContainer} from './AuctionsGrid.styled';
import {useGetAuctions} from '../../../hooks/useGetAuctions';
import {StyledButton} from '../OffersGrid/SubmittedOffersGrid/SubmittedOffersGrid.styled';
import {deleteAuctionItem} from '../../../api/auctionsApi';

export const AuctionsGrid: React.FC = () => {
    const {getOwnAuctionsList, ownAuctionsList} = useGetAuctions();

    useEffect(() => {
        getOwnAuctionsList();
    }, [getOwnAuctionsList]);

    const handleClick = async (id: any) => {
        await deleteAuctionItem(id);
        await getOwnAuctionsList();
    };

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Auction ID', width: 397},
        {field: 'timePeriod', headerName: 'Duration (months)', type: 'number', width: 200},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 200},
        {field: 'loanAmount', headerName: 'Amount (GBP)', type: 'number', width: 200},
        {
            field: '',
            headerName: 'Actions',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: ({data}) => {
                return (
                    <StyledButton onClick={() => handleClick(data.id)} type="submit" size="small" variant="contained" color="primary">
                        Remove
                    </StyledButton>
                );
            },
        },
    ];

    const rowsData = ownAuctionsList.map((obj: any) => ({
        ...obj,
        idValue: obj.id.substring(0, 8),
    }));

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} />
        </StyledContainer>
    );
};

//TODO: Add button after backend implementation
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
