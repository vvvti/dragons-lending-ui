import {useHistory} from 'react-router';

export const useBack = () => {
    const history = useHistory();

    const goBack = () => {
        const location = {
            pathname: '/loangrid',
        };
        history.push(location);
    };

    return {goBack};
};
