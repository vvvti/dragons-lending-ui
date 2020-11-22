import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import {SectionContainer} from '../../../../src/components/SectionContainer/SectionContainer';
import {PAGETYPE} from '../../../../src/helpers/constants';

describe('SectionContainer', () => {
    it('renders offers component', async () => {
        renderWithRouter(<SectionContainer pageType={PAGETYPE.OFFERS} />);

        expect(screen.getByText(/check out/i)).toBeInTheDocument();
    });
    it('renders investment component', async () => {
        renderWithRouter(<SectionContainer pageType={PAGETYPE.INVESTMENTS} />);

        expect(screen.getByText(/calculate/i)).toBeInTheDocument();
    });
});
