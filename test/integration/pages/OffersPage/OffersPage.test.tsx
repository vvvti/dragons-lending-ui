import React from 'react';
import {screen} from '@testing-library/react';

import {AuctionsPage} from '../../../../src/pages/AuctionsPage/AuctionsPage';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';

describe('AuctionsPage', () => {
    it('renders component with active auctions', async () => {
        renderWithRouter(<AuctionsPage />);

        expect(screen.getByText(/active/i)).toBeInTheDocument();
    });
});
