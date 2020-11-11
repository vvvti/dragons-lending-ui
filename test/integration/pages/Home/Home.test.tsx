import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Home} from '../../../../src/pages/Home/Home';

describe('<Home/>', () => {
    test('renders /loangrid after click on checkout button ', async () => {
        const {history} = renderWithRouter(<Home />);

        userEvent.click(screen.getByRole('link', {name: /check out/i}));

        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/loangrid');
    });
});
