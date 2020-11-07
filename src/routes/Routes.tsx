import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {Login} from '../pages/Login/Login';
import {Registration} from '../pages/Registration/Registration';
import {LoanGrid} from '../pages/LoanGrid/LoanGrid';
import {RoutesConst} from '../helpers/routesConst';
import {CreateOffer} from '../pages/CreateOffer/CreateOffer';
import {Rules} from '../pages/Rules/Rules';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={RoutesConst.CREATEOFFER} component={CreateOffer} />
            <Route exact path={RoutesConst.HOME} component={Home} />
            <Route exact path={RoutesConst.LOANGRID} component={LoanGrid} />
            <Route exact path={RoutesConst.LOGIN} component={Login} />
            <Route exact path={RoutesConst.REGISTRATION} component={Registration} />
            <Route exact path={RoutesConst.RULES} component={Rules} />
        </Switch>
    );
};
