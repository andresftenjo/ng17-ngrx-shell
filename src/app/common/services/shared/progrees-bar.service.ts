import { Injectable } from "@angular/core";
import { AppState } from "../../../storage/app.state";
import { Store } from "@ngrx/store";
import { setLoadInitial, setProgreesBar } from "../../../storage/state/state.actions";


@Injectable({
    providedIn: 'root'
  })

export class ProgreesBarService { 
    

    constructor(private store: Store<AppState>){}


    public showProgressBar(){
        this.store.dispatch(setProgreesBar({ progressBar: true }));
    }

    public hideProgressBar(){
        this.store.dispatch(setProgreesBar({ progressBar: false }));
    }

    public showLoadInitial(){
        this.store.dispatch(setLoadInitial({ loadInitial: true }));
    }

    public hideLoadInitial(){
        this.store.dispatch(setLoadInitial({ loadInitial: false }));
    }

}