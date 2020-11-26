import React from 'react';
import {screen} from '@testing-library/react';
import {AuctionsHeader} from '../../../../../src/components/AuctionsGrid/AuctionsHeader/AuctionsHeader';
import {renderWithRouter} from '../../../../_helpers/renderWithRouters';

describe('AuctionsHeader', () => {
    it('renders component', async () => {
        renderWithRouter(<AuctionsHeader />);

        expect(screen.getByRole('heading', {name: /active/i})).toBeInTheDocument();
    });
});
