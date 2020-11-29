import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {StyledButton, StyledContainer} from './ReceivedOffersGrid.styled';
import {useReceivedOffers} from '../../../../hooks/useReceivedOffers';
import {getAcceptLoan} from '../../../../api/loansApi';

export const ReceivedOffersGrid: React.FC = () => {
    const {receivedOffersList, getReceivedOffers} = useReceivedOffers();

    useEffect(() => {
        getReceivedOffers();
    }, [getReceivedOffers]);

    const handleClick = async (id: any) => {
        await getAcceptLoan(id);
        await getReceivedOffers();
    };

    const rowsData = receivedOffersList.map((obj: any) => ({
        ...obj,
        finalValue: obj.calculation.finalValue.toFixed(2),
        periodValue: obj.calculation.periodValue,
        idValue: obj.id.substring(0, 8),
    }));

    const columns: ColDef[] = [
        {field: 'idValue', headerName: 'Received Offers', width: 250},
        {field: 'username', headerName: 'Username', type: 'string', width: 150},
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
                    <StyledButton onClick={() => handleClick(data.id)} type="submit" size="small" variant="contained" color="primary">
                        Accept
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
