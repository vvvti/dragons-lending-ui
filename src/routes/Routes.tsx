import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {Login} from '../pages/Login/Login';
import {Registration} from '../pages/Registration/Registration';
import {OffersPage} from '../pages/OffersPage/OffersPage';
import {AUTHROUTES, NONAUTHROUTES} from '../helpers/routes';
import {CreateOffer} from '../pages/CreateOffer/CreateOffer';
import {Rules} from '../pages/Rules/Rules';
import {About} from '../pages/About/About';
import {Privacy} from '../pages/Privacy/Privacy';
import {Contact} from '../pages/Contact/Contact';
import {UserAccount} from '../pages/UserAccount/UserAccount';
import {NotFoundPage} from '../pages/NotFoundPage/NotFoundPage';
import {WithdrawMoney} from '../pages/WithdrawMoney/WithdrawMoney';
import {Deposit} from '../pages/Deposit/Deposit';
import {Repayment} from '../pages/Repayment/Repayment';
import {AuthRoute} from '../components/AuthRoute/AuthRoute';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <AuthRoute path={AUTHROUTES.CREATEOFFER} Component={CreateOffer} />
            <Route exact path={NONAUTHROUTES.HOME} component={Home} />
            <Route path={NONAUTHROUTES.ABOUT} component={About} />
            <Route path={NONAUTHROUTES.OFFERSGRID} component={OffersPage} />
            <Route path={NONAUTHROUTES.LOGIN} component={Login} />
            <Route path={NONAUTHROUTES.REGISTRATION} component={Registration} />
            <Route path={NONAUTHROUTES.RULES} component={Rules} />
            <Route path={NONAUTHROUTES.PRIVACY} component={Privacy} />
            <Route path={NONAUTHROUTES.CONTACT} component={Contact} />
            <AuthRoute path={AUTHROUTES.USERACCOUNT} Component={UserAccount} />
            <AuthRoute path={AUTHROUTES.WITHDRAWMONEY} Component={WithdrawMoney} />
            <AuthRoute path={AUTHROUTES.DEPOSIT} Component={Deposit} />
            <AuthRoute path={AUTHROUTES.USERHISTORY} Component={Repayment} />
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};
