import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import {AuctionsGrid} from '../../../../src/components/AuctionsGrid/AuctionsGrid';

describe('AuctionsGrid', () => {
    it('renders component', async () => {
        renderWithRouter(<AuctionsGrid />);

        expect(screen.getByTestId('grid-results')).toBeInTheDocument();
    });
});
