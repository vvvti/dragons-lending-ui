import React from 'react';
import {StyledGrid, StyledMain} from './Home.styled';
import {SectionContainer} from '../../components/SectionContainer/SectionContainer';
import {PAGETYPE} from '../../helpers/constants';

export const Home = () => {
    return (
        <StyledGrid>
            <StyledMain>
                <SectionContainer pageType={PAGETYPE.LOGIN} />
                <SectionContainer pageType={PAGETYPE.INVESTMENTS} />
            </StyledMain>
        </StyledGrid>
    );
};
