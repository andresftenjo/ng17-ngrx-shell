import { createAction, props } from '@ngrx/store';
import { AppState } from '../app.state';

export const isAuthenticatedUser = createAction('[AuthUser] authenticatedUser', props<{ authenticatedUser: boolean }>());

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const initUser = createAction(
    '[AuthUser] Init User',
    props<{ appState: AppState }>()
);

export const updateAuthenticatedUser = createAction(
    '[AuthUser] Update Authenticated user',
    props<{ userAuthenticated: boolean }>()
);