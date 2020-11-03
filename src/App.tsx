import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Home} from './components/Home/Home';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ROUTES} from './helpers/routes';
import {Register} from './components/Register/Register';
import {Login} from './components/Login/Login';

export const App = () => {
    const history = createBrowserHistory();

    return (
        <StylesProvider injectFirst>
            <Router history={history}>
                <CssBaseline />
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route exact path={ROUTES.LOGIN} component={Login} />
                    <Route exact path={ROUTES.REGISTER} component={Register} />
                </Switch>
            </Router>
        </StylesProvider>
    );
};
