import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInfoModel, defaultUser } from '../../model/config/userInfo.model';
import { AppState } from '../../../storage/app.state';
import { setAuthUser, setConfiguration, setDefaultUser } from '../../../storage/state/state.actions';
import { setConfigurations } from '../../model/config/config.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  userInfo : UserInfoModel = {
    userId: "123",
    email: "john@test.com",
    firstName: "John",
    lastName: "test",
    phone: "123456",
    nit: "123454",
    companyName: "Argos",
    documentNumber: "123456",
    profileImage: "/assets/images/profile-pic.svg"
  };
  
  constructor(private store: Store<AppState>) {
    
  }
  
  dispatch() {
    this.store.dispatch(setAuthUser({ sessionUser: this.userInfo }));
  }


  setDefaultUser() {
    this.store.dispatch(setDefaultUser({ userState : defaultUser}));
  }

}
