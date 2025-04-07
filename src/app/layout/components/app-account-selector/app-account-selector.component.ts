import { Component, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { EventEmitter } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ListboxModule } from 'primeng/listbox';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../storage/app.state';
import { selectAccounts, selectOpenAccount, selectRecipients } from '../../../storage/state/state.selectors';
import { AccountModel } from '../../../graphql/models/account/account.model';
import { AccountService } from '../../../graphql/services/account/account.service';
import { ProgreesBarService } from '../../../common/services/shared/progrees-bar.service';
import { SkeletonModule } from 'primeng/skeleton';
import { setAccountListState, setAccountSelect, setAccounts, setRecipientSelect, setRecipients } from '../../../storage/state/state.actions';

@Component({
  selector: 'app-account-selector',
  standalone: true,
  imports: [CardModule, DialogModule, ButtonModule, DropdownModule, CommonModule, TranslateModule, ListboxModule,SkeletonModule],
  providers:[ProgreesBarService],
  templateUrl: './app-account-selector.component.html',
  styleUrl: './app-account-selector.component.scss'
})
export class AppAccountSelectorComponent implements OnInit {
  
  @Input() displayModal = false;
  @Output() onComplete = new EventEmitter<any>();

  accounts:AccountModel[] = [];
  recipients:AccountModel[] = [];
  isloading:boolean = false;

  accountSelect: AccountModel | any;
  recipientSelect: AccountModel | any;

  accountSelectTitle: string = 'Select Account';

  constructor(private store: Store<AppState>, private accountService: AccountService, private progreesBarService:ProgreesBarService){

  }

  ngOnInit() {

    this.store.pipe(select(selectAccounts)).subscribe(accounts => {
        this.accounts = accounts;
        this.store.dispatch(setAccounts({ accounts: this.accounts}));
    });

    this.store.pipe(select(selectRecipients)).subscribe(recipientSelect => {
      this.recipients = recipientSelect;
    });

    this.store.pipe(select(selectOpenAccount)).subscribe(isOpen => {
      this.displayModal = isOpen;
    });

  }

  
  /**
   *Metodo que obtiene el titulo de la cuenta
   *
   * @param {*} address
   * @return {*} 
   * @memberof AppAccountSelectorComponent
   */
  public accountTitle(address:any){
      return address.AccountId + ' - ' + address.AccountName;
  }


  
  /**
   *Metodo que finaliza la seleccion de la cuenta
   *
   * @memberof AppAccountSelectorComponent
   */
  public finishAccountSelected(){
    this.store.dispatch(setAccountSelect({ accountSelect: this.accountSelect}));
    this.store.dispatch(setRecipientSelect({ recipientSelect: this.recipientSelect}));
    this.closeModel();
  }

  
  /**
   *Metodo que cierra el modal
   *
   * @memberof AppAccountSelectorComponent
   */
  public closeModel(){
    this.displayModal = false;
    this.onComplete.emit(this.displayModal);

    this.store.dispatch(setAccountListState({ openSelectAccount: this.displayModal }));
  }

  
  /**
   *Metodo que selecciona la cuenta
   *
   * @param {*} event
   * @memberof AppAccountSelectorComponent
   */
  public selectAccount(event : any) {
    this.isloading = true;
    this.progreesBarService.showProgressBar();
    this.accountSelect = event.value;
    this.accountService.getRecipients(this.accountSelect.AccountId).subscribe(resp=> {
        this.recipients = resp.Recipient;
        this.progreesBarService.hideProgressBar();
        this.isloading = false;
    });
  }

  
  /**
   *Metodo que selecciona el destinatario
   *
   * @param {*} event
   * @memberof AppAccountSelectorComponent
   */
  public selectAddress(event : any) {
    this.recipientSelect = event;
    this.store.dispatch(setRecipients({ recipients: this.recipients}));
    this.recipients.filter(x => x.AccountId === event.AccountId)[0].Selected = true;
  }


}
