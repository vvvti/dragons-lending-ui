import React from 'react';
import {Registration} from '../../../../src/pages/Registration/Registration';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {fireEvent, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Registration', () => {
    test('submit button disabled on invalid values', async () => {
        renderWithRouter(<Registration />);

        const userNameInput = screen.getByLabelText(/user name/i);
        userEvent.clear(userNameInput);
        await userEvent.type(userNameInput, 'abc123');

        const firstNameInput = screen.getByLabelText(/first name/i);
        userEvent.clear(firstNameInput);
        await userEvent.type(firstNameInput, '');

        const lastNameInput = screen.getByLabelText(/last name/i);
        userEvent.clear(lastNameInput);
        await userEvent.type(lastNameInput, 'Zuckerberg');

        const emailInput = screen.getByLabelText(/email/i);
        userEvent.clear(emailInput);
        await userEvent.type(emailInput, 'test@test.pl');

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.clear(passwordInput);
        await userEvent.type(passwordInput, 'password1234');

        const personalId = screen.getByLabelText(/personal id/i);
        userEvent.clear(personalId);
        await userEvent.type(personalId, '860412994');

        const submitButton = screen.getByRole('button', {name: /register/i});

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });
    });

    test('first name should throw error on invalid values', async () => {
        renderWithRouter(<Registration />);

        const firstNameInput = screen.getByLabelText(/first name/i);
        userEvent.clear(firstNameInput);
        await userEvent.type(firstNameInput, '');

        fireEvent.blur(firstNameInput);
        await screen.findByText('Field is required');
    });

    test('last name should throw error on invalid values', async () => {
        renderWithRouter(<Registration />);

        const lastNameInput = screen.getByLabelText(/last name/i);
        userEvent.clear(lastNameInput);
        await userEvent.type(lastNameInput, '');

        fireEvent.blur(lastNameInput);
        await screen.findByText('Field is required');
    });

    test('email should throw error on invalid values', async () => {
        renderWithRouter(<Registration />);

        const emailInput = screen.getByLabelText(/email/i);
        userEvent.clear(emailInput);
        await userEvent.type(emailInput, '');

        fireEvent.blur(emailInput);
        await screen.findByText('Field is required');
    });

    test('password should throw error on invalid values', async () => {
        renderWithRouter(<Registration />);

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.clear(passwordInput);
        await userEvent.type(passwordInput, 'test');

        fireEvent.blur(passwordInput);
        await screen.findByText('Password should contain at last 8 character');
    });

    test('personal should throw error on invalid values', async () => {
        renderWithRouter(<Registration />);

        const personalIdInput = screen.getByLabelText(/personal id/i);
        userEvent.clear(personalIdInput);
        await userEvent.type(personalIdInput, '43434');

        fireEvent.blur(personalIdInput);
        await screen.findByText('Personal Id should have 11 characters');
    });
});
