import React from 'react';
import {
    PageContainer,
    StyledButton,
    StyledContainer,
    StyledDetailsText,
    StyledTile,
    StyledTileContainer,
    StyledTileTitle,
    StyledTitle,
} from './UserAccount.styled';
import {UserDataGrid} from '../../components/UserDataGrid/UserDataGrid';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';

export const UserAccount: React.FC = () => {
    return (
        <PageContainer>
            <StyledContainer>
                <StyledTitle>Summary</StyledTitle>
                <div>
                    <StyledButton type="submit" size="small" variant="contained" color="primary">
                        Deposit
                    </StyledButton>
                    <NavLink to={ROUTES.WITHDRAWMONEY}>
                        <StyledButton type="submit" size="small" variant="contained" color="primary">
                            Withdraw
                        </StyledButton>
                    </NavLink>
                </div>
            </StyledContainer>
            <StyledTileContainer>
                <StyledTile>
                    <StyledTileTitle>Invested capital</StyledTileTitle>
                    <StyledDetailsText>400 GBP</StyledDetailsText>
                </StyledTile>
                <StyledTile>
                    <StyledTileTitle>Borrowed capital</StyledTileTitle>
                    <StyledDetailsText>250 GBP</StyledDetailsText>
                </StyledTile>
                <StyledTile>
                    <StyledTileTitle>Average Return</StyledTileTitle>
                    <StyledDetailsText>7%</StyledDetailsText>
                </StyledTile>
            </StyledTileContainer>
            <StyledContainer>
                <UserDataGrid />
            </StyledContainer>
        </PageContainer>
    );
};
