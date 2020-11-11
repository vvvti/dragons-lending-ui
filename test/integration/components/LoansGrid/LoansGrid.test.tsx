import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import {LoansGrid} from '../../../../src/components/LoansGrid/LoansGrid';

describe('LoansGrid', () => {
    it('renders component', async () => {
        renderWithRouter(<LoansGrid />);

        expect(screen.getByTestId('grid-results')).toBeInTheDocument();
    });
});
