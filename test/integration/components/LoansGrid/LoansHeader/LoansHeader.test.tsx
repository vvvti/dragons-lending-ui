import React from 'react';
import {screen} from '@testing-library/react';
import {LoansHeader} from '../../../../../src/components/LoansGrid/LoansHeader/LoansHeader';
import {renderWithRouter} from '../../../../_helpers/renderWithRouters';

describe('LoansHeader', () => {
    it('renders component', async () => {
        renderWithRouter(<LoansHeader />);

        expect(screen.getByRole('heading', {name: /active loan applications/i})).toBeInTheDocument();
    });
});
