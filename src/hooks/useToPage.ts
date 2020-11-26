import {useHistory} from 'react-router';
import {AUTHROUTES, NONAUTHROUTES} from '../helpers/routes';

export const useToPage = () => {
    const history = useHistory();

    const goToMain = () => {
        const location = {
            pathname: NONAUTHROUTES.OFFERSGRID,
        };
        history.push(location);
    };

    const goToLogin = () => {
        const location = {
            pathname: NONAUTHROUTES.LOGIN,
        };
        history.push(location);
    };

    const goToUserAccount = () => {
        const location = {
            pathname: AUTHROUTES.USERACCOUNT,
        };
        history.push(location);
    };

    return {goToMain, goToLogin, goToUserAccount};
};

// export const useToLogin = () => {
//     const history = useHistory();
//
//     const goToLogin = () => {
//         const location = {
//             pathname: ROUTES.OFFERS,
//         };
//         history.push(location);
//     };
//
//     return {goToLogin};
// };
//
// export const useToUserAccount = () => {
//     const history = useHistory();
//
//     const goToLogin = () => {
//         const location = {
//             pathname: ROUTES.USERACCOUNT,
//         };
//         history.push(location);
//     };
//
//     return {goToLogin};
// };
//
