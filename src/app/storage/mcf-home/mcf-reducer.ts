import { createReducer, on } from "@ngrx/store";
import { initialState } from "../app.state";
import * as actionMcfHome from '../mcf-home/mcf-home.actions';


export const actionMcfHomeReducer = createReducer(
    initialState,
    on(actionMcfHome.setLenguage, (state, { mcfHome }) => ({ ...state, mcfHome }))
);