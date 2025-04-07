import { createAction, props } from "@ngrx/store";


export const setLenguage = createAction('[SPINNER] SET LENGUAGE', props<{ mcfHome : any }>());
export const setLenguageYourOrders = createAction('[SPINNER] SET LENGUAGE', props<{ mcfYourOrder : any }>());