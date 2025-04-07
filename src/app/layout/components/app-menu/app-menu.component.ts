import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppAccountSelectorComponent } from "../app-account-selector/app-account-selector.component";
import { TranslatePipe } from '../../../common/pipes/shared/translate.pipe';
import { AppState } from '../../../storage/app.state';
import { Store, select } from '@ngrx/store';
import { selectAccountSelect, selectLoadInitial, selectMenu, selectRecipientSelect, selectSideMenuToggle } from '../../../storage/state/state.selectors';
import { MenuModel } from '../../../graphql/models/menu/menu.model';
import { AccountModel } from '../../../graphql/models/account/account.model';
import { SkeletonModule } from 'primeng/skeleton';
import { AppMobileMenuComponent } from "../app-mobile-menu/app-mobile-menu.component";
import { selectedStoreMenu } from '../../../storage/state/state.selectors';
import { setAccountListState, toggleSideMenu } from '../../../storage/state/state.actions';


@Component({
    selector: 'app-app-menu',
    standalone: true,
    templateUrl: './app-menu.component.html',
    styleUrl: './app-menu.component.scss',
    imports: [RouterModule, CommonModule, MenuModule, TranslatePipe, TranslateModule, SidebarModule, ButtonModule, AppAccountSelectorComponent, SkeletonModule, AppMobileMenuComponent]
})
export class AppMenuComponent implements OnInit {


  public menuOptions:Array<MenuModel> = [];
  public accountSelect: AccountModel | any;
  public recipientSelect: AccountModel | any;
  public loadInitial: boolean = false;
  constructor(private store: Store<AppState>) {}

  sidebarVisible = true;
  public isChooseAccount: boolean = false;
  showSelectorAccount = false;
  showMobileAccountSelector = false;
  openSideMenu: boolean = true;

  ngOnInit() {
  
    this.store.pipe(select(selectMenu)).subscribe(menu => {
        this.menuOptions = menu;
    });

    this.store.pipe(select(selectAccountSelect)).subscribe(accountSelect => {
      this.accountSelect = accountSelect;
    });

    this.store.pipe(select(selectRecipientSelect)).subscribe(recipientSelect => {
      this.recipientSelect = recipientSelect;
    });

    this.store.pipe(select(selectLoadInitial)).subscribe(loadInitial => {
      this.loadInitial = loadInitial;
    });

    this.store.pipe(select(selectedStoreMenu)).subscribe((menuOptions: any) => {
      //this.menuOptions$ = menuOptions;
    });

    this.store.pipe(select(selectSideMenuToggle)).subscribe(isOpen => {
      this.openSideMenu = isOpen;
    });
  }
  
  showAccounts(event: any): void {
    this.showSelectorAccount = true;
    this.store.dispatch(setAccountListState({ openSelectAccount: this.showSelectorAccount }));
  }

  onCompleteSelection(event: any) {
    this.showSelectorAccount = false;
  }

  openMenu() {
    this.store.dispatch(toggleSideMenu());
  }

  openMenuMobile() {
/*     this.menu.classList.toggle("activeMenuMobile");
    this.headerTop.classList.toggle("activeOverflow"); */
  }

  onClickToggleMenu(event:any) {
    if (screen.width > 1050) {
        this.openMenu();
    }
    else {
        this.openMenuMobile();
    }
}

public accountSubtitle(account:any){
  if (account && account.AccountName) {
    return account.AccountName.substring(0, 2);
  }
  return '';
}

}

