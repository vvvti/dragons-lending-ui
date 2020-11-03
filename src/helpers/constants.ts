import {RegisterFormValues} from './types';

export enum PAGETYPE {
    INVESTMENTS,
    LOGIN,
}

export const CALCULATOR = 'https://dragons-investments-ui.ersa-team.fintechchallenge.pl/';

export const INITIAL_REGISTER_VALUES: RegisterFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    majority: false,
};
