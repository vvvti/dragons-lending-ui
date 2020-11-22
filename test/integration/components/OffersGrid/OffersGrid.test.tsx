import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import {OffersGrid} from '../../../../src/components/OffersGrid/OffersGrid';

describe('OffersGrid', () => {
    it('renders component', async () => {
        renderWithRouter(<OffersGrid />);

        expect(screen.getByTestId('grid-results')).toBeInTheDocument();
    });
});
