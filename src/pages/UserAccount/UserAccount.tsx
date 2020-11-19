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
import {ROUTES} from '../../helpers/routes';
import {StyledNavLink} from '../Deposit/Deposit.styled';

export const UserAccount: React.FC = () => {
    return (
        <PageContainer>
            <StyledContainer>
                <StyledTitle>Summary</StyledTitle>
                <div>
                    <StyledNavLink to={ROUTES.DEPOSIT}>
                        <StyledButton type="submit" size="small" variant="contained" color="primary">
                            Deposit
                        </StyledButton>
                    </StyledNavLink>
                    <StyledNavLink to={ROUTES.WITHDRAWMONEY}>
                        <StyledButton type="submit" size="small" variant="contained" color="primary">
                            Withdraw
                        </StyledButton>
                    </StyledNavLink>
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
