import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {InvestForm} from '../../../../../src/components/LoansGrid/InvestForm/InvestForm';
import {renderWithRouter} from '../../../../_helpers/renderWithRouters';

describe('Invest Form', () => {
    test('success message on submit correct values', async () => {
        renderWithRouter(<InvestForm loanAmount={300} interestRate={5} />);

        const investAmountInput = screen.getByLabelText(/invest amount/i);
        userEvent.clear(investAmountInput);
        await userEvent.type(investAmountInput, '300');

        const investRateInput = screen.getByLabelText(/invest rate/i);
        userEvent.clear(investRateInput);
        await userEvent.type(investRateInput, '5');

        fireEvent.blur(investAmountInput);

        const submitButton = screen.getByRole('button', {name: /invest/i});
        await userEvent.click(submitButton);

        await screen.findByText('Offer submitted!');
    });

    test('invest amount should throw error on invalid values', async () => {
        renderWithRouter(<InvestForm />);

        const investAmountInput = screen.getByLabelText(/invest amount/i);
        userEvent.clear(investAmountInput);
        await userEvent.type(investAmountInput, '30000000000000');

        fireEvent.blur(investAmountInput);

        const submitButton = screen.getByRole('button', {name: /invest/i});
        await userEvent.click(submitButton);

        await screen.findByText('You can select max 1 000 000');
    });

    test('invest rate should throw error on invalid values', async () => {
        renderWithRouter(<InvestForm loanAmount={300} interestRate={5} />);

        const investRateInput = screen.getByLabelText(/invest rate/i);
        userEvent.clear(investRateInput);
        await userEvent.type(investRateInput, '120');

        fireEvent.blur(investRateInput);

        const submitButton = screen.getByRole('button', {name: /invest/i});
        await userEvent.click(submitButton);

        await screen.findByText('You can select max 100%');
    });
});
