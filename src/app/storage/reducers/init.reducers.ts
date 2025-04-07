import { createReducer, on } from '@ngrx/store';
import { decrement, increment, initUser, isAuthenticatedUser, reset, updateAuthenticatedUser } from '../actions/init.actions';
import { initialState } from '../app.state';

export const userAuthenticated = {};

export const userAuthenticatedReducer = createReducer(
    userAuthenticated,
    on(isAuthenticatedUser, (state: any) => state.auth = state)
);


export const test = 0;

export const counterReducer = createReducer(
    test,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);

export const storeReducer = createReducer(
    initialState,
    on(updateAuthenticatedUser, (state, { userAuthenticated }) => ({
        ...state,
        userAuthenticated: userAuthenticated
    }))
);
