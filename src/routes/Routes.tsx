import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {Login} from '../pages/Login/Login';
import {Registration} from '../pages/Registration/Registration';
import {LoansPage} from '../pages/LoansPage/LoansPage';
import {ROUTES} from '../helpers/routes';
import {CreateOffer} from '../pages/CreateOffer/CreateOffer';
import {Rules} from '../pages/Rules/Rules';
import {About} from '../pages/About/About';
import {CALCULATORPAGE} from '../helpers/constants';
import {Privacy} from '../pages/Privacy/Privacy';
import {Contact} from '../pages/Contact/Contact';
import {UserAccount} from '../pages/UserAccount/UserAccount';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.CREATEOFFER} component={CreateOffer} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.LOANGRID} component={LoansPage} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.REGISTRATION} component={Registration} />
            <Route exact path={ROUTES.RULES} component={Rules} />
            <Route exact path={ROUTES.PRIVACY} component={Privacy} />
            <Route exact path={ROUTES.CONTACT} component={Contact} />
            <Route exact path={ROUTES.USERACCOUNT} component={UserAccount} />
            <Route
                exact
                path={ROUTES.CALCULATORPAGE}
                component={() => {
                    window.location.href = CALCULATORPAGE;
                    return null;
                }}
            />
        </Switch>
    );
};
