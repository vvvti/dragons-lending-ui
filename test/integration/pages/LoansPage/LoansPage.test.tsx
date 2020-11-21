import React from 'react';
import {screen} from '@testing-library/react';

import {OffersPage} from '../../../../src/pages/OffersPage/OffersPage';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';

describe('OffersPage', () => {
    it('renders component with active offers', async () => {
        renderWithRouter(<OffersPage />);

        expect(screen.getByText(/active/i)).toBeInTheDocument();
    });
});
