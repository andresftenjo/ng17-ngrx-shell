import { createReducer, on } from "@ngrx/store";
import { initialState } from "../app.state";
import { setLenguageYourOrders } from "../mcf-home/mcf-home.actions";


export const actionMcfYourOrderReducer = createReducer(
    initialState,
    on(setLenguageYourOrders, (state, { mcfYourOrder }) => ({ ...state, mcfYourOrder }))
);