import React from 'react';
import {StyledGrid, StyledMain} from './Home.styled';
import {Navbar} from '../Navbar/Navbar';
import {HomeContainer} from './HomeContainer/HomeContainer';

export const Home = () => {
    return (
        <StyledGrid>
            <Navbar />
            <StyledMain>
                <HomeContainer title="Social lending" />
                <HomeContainer title="Investments" />
            </StyledMain>
        </StyledGrid>
    );
};
