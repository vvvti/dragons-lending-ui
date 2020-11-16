import React from 'react';
import {screen} from '@testing-library/react';

import {LoansPage} from '../../../../src/pages/LoansPage/LoansPage';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';

describe('LoansPage', () => {
    it('renders component with active offers', async () => {
        renderWithRouter(<LoansPage />);

        expect(screen.getByText(/active/i)).toBeInTheDocument();
    });
});
