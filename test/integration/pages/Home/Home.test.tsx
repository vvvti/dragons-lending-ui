import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Home} from '../../../../src/pages/Home/Home';
import {ROUTES} from '../../../../src/helpers/routes';

describe('Home', () => {
    it('renders component status bar', async () => {
        renderWithRouter(<Home />);

        expect(screen.getByText(/social lending/i)).toBeInTheDocument();
        expect(screen.getByText(/investments/i)).toBeInTheDocument();
    });

    test('renders /loangrid after click on checkout button ', async () => {
        const {history} = renderWithRouter(<Home />);

        userEvent.click(screen.getByRole('link', {name: /check out/i}));

        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual(ROUTES.LOANGRID);
    });
});
