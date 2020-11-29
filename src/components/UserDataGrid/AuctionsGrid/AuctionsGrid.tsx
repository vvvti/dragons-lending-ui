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

    const rowsData = ownAuctionsList.map((obj: any) => ({
        ...obj,
        idValue: obj.id.substring(0, 8),
    }));

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

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} />
        </StyledContainer>
    );
};
