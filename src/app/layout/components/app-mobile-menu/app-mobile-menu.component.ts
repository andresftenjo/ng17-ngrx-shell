import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppAccountSelectorComponent } from "../app-account-selector/app-account-selector.component";
import { DOCUMENT } from '@angular/common';
import { TranslatePipe } from '../../../common/pipes/shared/translate.pipe';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../storage/app.state';
import { selectCountryIcon, selectDefaultUser, selectedStoreMenu } from '../../../storage/state/state.selectors';
import { setAccountListState } from '../../../storage/state/state.actions';


@Component({
    selector: 'app-mobile-menu',
    standalone: true,
    templateUrl: './app-mobile-menu.component.html',
    styleUrl: './app-mobile-menu.component.scss',
    imports: [RouterModule, CommonModule, MenuModule, TranslatePipe, TranslateModule, SidebarModule, ButtonModule, AppAccountSelectorComponent]
})
export class AppMobileMenuComponent implements OnInit {

  constructor(private store: Store<AppState>, private renderer: Renderer2) {}

  menuOptions$!: any;
  expandedManu = false;
  @ViewChild('mobileMenu') myElementRef!: ElementRef;

  @ViewChild('mobileMenuDragger') myElementRefDragger!: ElementRef;
  userProfileImage: string = '';

  ngOnInit() {
    this.store.pipe(select(selectedStoreMenu)).subscribe((menuOptions: any) => {
      this.menuOptions$ = menuOptions;
    });

    this.store.pipe(select(selectCountryIcon)).subscribe(countryIcon => {
        this.userProfileImage = countryIcon;
    });
  }

  openMenu() {

  }

  openMenuMobile() {
  }

  onClickToggleMenu(event:any) {
    if (screen.width > 1050) {
        this.openMenu();
    }
    else {
        this.openMenuMobile();
    }
  }

  expandMobileMenu() {
    this.expandedManu = true;
  }

  closeMobileMenu() {
    this.expandedManu = false;
  }

  openAccountSelector() {
    this.store.dispatch(setAccountListState({ openSelectAccount: true }));
  }

  @HostListener('document:click', ['$event'])
  handleMenu(event: MouseEvent) {
    const clickedInside = this.myElementRef.nativeElement.contains(event.target);

    const clickedInsideDragger = this.myElementRefDragger.nativeElement.contains(event.target);
    
    console.log(clickedInside);
    if (clickedInside && this.expandedManu && !clickedInsideDragger) {
      this.expandedManu = false;
    }
  }
}

