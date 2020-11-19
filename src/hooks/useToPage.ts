import {useHistory} from 'react-router';
import {ROUTES} from '../helpers/routes';

export const useToPage = () => {
    const history = useHistory();

    const goToMain = () => {
        const location = {
            pathname: ROUTES.LOANGRID,
        };
        history.push(location);
    };

    const goToLogin = () => {
        const location = {
            pathname: ROUTES.LOGIN,
        };
        history.push(location);
    };

    const goToUserAccount = () => {
        const location = {
            pathname: ROUTES.USERACCOUNT,
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
//             pathname: ROUTES.LOGIN,
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
