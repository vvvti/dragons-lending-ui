import React from 'react';
import {Navbar} from '../../../../src/components/Navbar/Navbar';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';

describe('Navbar', () => {
    it('renders component', async () => {
        renderWithRouter(<Navbar />);

        expect(screen.getByTestId('main-navbar')).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /about/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /rules/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /login/i})).toBeInTheDocument();
    });
});
