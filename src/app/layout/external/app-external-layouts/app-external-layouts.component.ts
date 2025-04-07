import { Component, Inject, OnInit } from '@angular/core';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppMenuComponent } from '../../components/app-menu/app-menu.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { DOCUMENT } from '@angular/common';  
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../storage/app.state';
import { selectSideMenuToggle, selectStoreColors, selectedUnitLength, selectedUnitVolume, selectedUnitWeight } from '../../../storage/state/state.selectors';
import { filter } from 'rxjs';
import { setFiveColor, setFourColor, setPrimaryColor, setSecondaryColor, setSevenColor, setSixColor, setThirdColor, setUnitLength, setUnitVolume, setUnitWeight } from '../../../storage/state/state.actions';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CurrencyFormatPipe } from '../../../common/pipes/shared/currencyformat.pipe';
import { FormatUnitPipe } from '../../../common/pipes/shared/formatLength.pipe';
import { FormatWeightUnitPipe } from '../../../common/pipes/shared/formatWeight.pipe';
import { FormatVolumeUnitPipe } from '../../../common/pipes/shared/formatVolume.pipe';
import { UserAuthService } from '../../../common/services/shared/userauth.service';
import { LanguageService } from '../../../common/services/shared/language-service.service';
import { CurrencyService } from '../../../common/services/shared/currency.service';
import { StoreConfigurationsService } from '../../../common/services/shared/store-configurations.service';
import { AccountService } from '../../../graphql/services/account/account.service';
import { SharedComponentsModule } from '../../../common/components/shared-components.module';
import { ProgreesBarService } from '../../../common/services/shared/progrees-bar.service';
import { AppMobileMenuComponent } from '../../components/app-mobile-menu/app-mobile-menu.component';
import { ContactUsService } from '../../../graphql/services/contactUs/contactUs.service';


@Component({
  selector: 'app-app-external-layouts',
  standalone: true,
  imports: [
    AppFooterComponent,
    AppHeaderComponent,
    AppMenuComponent,
    RouterOutlet,
    SharedComponentsModule,
    AppMobileMenuComponent,
    CommonModule,
  ],
  templateUrl: './app-external-layouts.component.html',
  styleUrl: './app-external-layouts.component.scss',
  providers: [UserAuthService, LanguageService, CurrencyService, CurrencyPipe, StoreConfigurationsService, ProgreesBarService, ContactUsService]
})
export class AppExternalLayoutsComponent implements OnInit {

  openSideMenu: boolean = true;
  constructor(
    private storeConfigurationsService: StoreConfigurationsService,
    private contactService: ContactUsService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.storeConfigurationsService.getStoreConfigurations();

    this.store.pipe(select(selectSideMenuToggle)).subscribe(isOpen => {
      this.openSideMenu = isOpen;
    });
  }
}
