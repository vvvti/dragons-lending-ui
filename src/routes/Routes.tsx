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
import {Privacy} from '../pages/Privacy/Privacy';
import {Contact} from '../pages/Contact/Contact';
import {UserAccount} from '../pages/UserAccount/UserAccount';
import {NotFoundPage} from '../pages/NotFoundPage/NotFoundPage';
import {WithdrawMoney} from '../pages/WithdrawMoney/WithdrawMoney';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={ROUTES.CREATEOFFER} component={CreateOffer} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.LOANGRID} component={LoansPage} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.REGISTRATION} component={Registration} />
            <Route path={ROUTES.RULES} component={Rules} />
            <Route path={ROUTES.PRIVACY} component={Privacy} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route path={ROUTES.USERACCOUNT} component={UserAccount} />
            <Route path={ROUTES.WITHDRAWMONEY} component={WithdrawMoney} />
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};
