import React from 'react';
import {screen} from '@testing-library/react';
import {InvestForm} from '../../../../../src/components/AuctionsGrid/InvestForm/InvestForm';
import {renderWithRouter} from '../../../../_helpers/renderWithRouters';

describe('Invest Form', () => {
    test('submit button disabled when user is not logged', async () => {
        renderWithRouter(<InvestForm loanAmount={300} interestRate={5} />);

        const submitButton = screen.getByRole('button', {name: /invest/i});

        expect(submitButton).toBeDisabled();
    });
});
