import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectGraphState = createFeatureSelector<AppState>('appState');

export const selectIsAuthenticated = createSelector(
    selectGraphState,
    (state) => state.userAuthenticated
);
