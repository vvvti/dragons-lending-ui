import React from 'react';
import {StyledGrid, StyledMain} from './Home.styled';
import {PAGETYPE} from '../../helpers/constants';
import {SectionContainer} from './SectionContainer/SectionContainer';

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
