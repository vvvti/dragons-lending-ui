import React from 'react';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';

export const renderWithRouter = (ui: React.ReactNode, entries?: string[]) => {
    const history = createMemoryHistory({initialEntries: entries});
    const renderResult = render(
        <Router history={history}>
            <Route path={'/'}>{ui}</Route>
        </Router>,
    );
    return {...renderResult, history};
};
