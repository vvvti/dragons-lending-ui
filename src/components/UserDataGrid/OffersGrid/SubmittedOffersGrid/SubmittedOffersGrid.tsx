import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useOffers} from '../../../../hooks/useOffers';
import {StyledButton, StyledContainer} from './SubmittedOffersGrid.styled';
import {deleteOfferItem} from '../../../../api/offersApi';

export const SubmittedOffersGrid: React.FC = () => {
    const {offersList, getOffers} = useOffers();

    useEffect(() => {
        getOffers();
    }, [getOffers]);

    const rowsData = offersList.map((obj: any) => ({
        ...obj,
        finalValue: obj.calculation.finalValue.toFixed(2),
        periodValue: obj.calculation.periodValue,
        idValue: obj.id.substring(0, 8),
    }));

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Submitted Offers ID', width: 250},
        {field: 'auctionOwner', headerName: 'Username', type: 'string', width: 150},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'offerAmount', headerName: 'Amount (GBP)', type: 'number', width: 200},
        {field: 'finalValue', headerName: 'Final Value(GBP)', type: 'number', width: 247},
        {
            field: '',
            headerName: 'Actions',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: ({data}) => {
                return (
                    <StyledButton onClick={() => deleteOfferItem(data.id)} type="submit" size="small" variant="contained" color="primary">
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
