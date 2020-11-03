import React from 'react';
import {StyledGrid, StyledMain} from './Home.styled';
import {Navbar} from '../Navbar/Navbar';
import {HomeContainer} from './HomeContainer/HomeContainer';
import {PAGETYPE} from '../../helpers/constants';

export const Home = () => {
    return (
        <StyledGrid>
            <Navbar />
            <StyledMain>
                <HomeContainer pageType={PAGETYPE.LOGIN} />
                <HomeContainer pageType={PAGETYPE.INVESTMENTS} />
            </StyledMain>
        </StyledGrid>
    );
};
