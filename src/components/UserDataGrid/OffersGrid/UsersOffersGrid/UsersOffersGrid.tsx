import React, {useEffect} from 'react';
import {ColDef, DataGrid} from '@material-ui/data-grid';
import {useOffers} from '../../../../hooks/useOffers';
import {StyledButton, StyledContainer} from './UsersOffersGrid.styled';

export const UsersOffersGrid: React.FC = () => {
    const {offersList, getOffers} = useOffers();

    const passId = (id: any) => {
        console.log(id);
    };

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
        {field: 'idValue', headerName: "User's Offers", width: 450},
        {field: 'interestRate', headerName: 'Return (%)', type: 'number', width: 150},
        {field: 'offerAmount', headerName: 'Amount (GBP)', type: 'number', width: 150},
        {field: 'finalValue', headerName: 'Final Value(GBP)', type: 'number', width: 150},
        {
            field: '',
            headerName: '',
            sortable: false,
            width: 300,
            disableClickEventBubbling: true,
            renderCell: ({data}) => {
                return (
                    <StyledButton onClick={() => passId(data.id)} type="submit" size="small" variant="contained" color="primary">
                        Accept
                    </StyledButton>
                );
            },
        },
    ];

    return (
        <StyledContainer>
            <DataGrid rows={rowsData} columns={columns} pageSize={3} checkboxSelection />
        </StyledContainer>
    );
};
