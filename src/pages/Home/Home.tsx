import React from 'react';
import {StyledGrid, StyledMain} from './Home.styled';
import {PAGETYPE} from '../../helpers/constants';
import {SectionContainer} from '../../components/SectionContainer/SectionContainer';

export const Home: React.FC = () => {
    return (
        <StyledGrid>
            <StyledMain>
                <SectionContainer pageType={PAGETYPE.LOGIN} />
                <SectionContainer pageType={PAGETYPE.INVESTMENTS} />
            </StyledMain>
        </StyledGrid>
    );
};
