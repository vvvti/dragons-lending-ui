import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useOffers} from '../../../../hooks/useOffers';
import {StyledButton, StyledContainer} from './UsersOffersGrid.styled';

export const UsersOffersGrid: React.FC = () => {
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
        {field: 'idValue', headerName: "User's Offers", width: 350},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 200},
        {field: 'offerAmount', headerName: 'Amount (GBP)', type: 'number', width: 200},
        {field: 'finalValue', headerName: 'Final Value(GBP)', type: 'number', width: 247},
        {
            field: '',
            headerName: 'Actions',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: () => {
                return (
                    <StyledButton type="submit" size="small" variant="contained" color="primary">
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
