import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../storage/app.state';
import { selectCountryIcon, selectDefaultUser } from '../../../storage/state/state.selectors';
import { UserInfoModel } from '../../../common/model/config/userInfo.model';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { TranslatePipe } from '../../../common/pipes/shared/translate.pipe';

@Component({
    selector: 'app-app-header',
    standalone: true,
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
    imports: [TranslatePipe, TranslateModule, SkeletonModule, CommonModule, RouterModule, TooltipModule]
})
export class AppHeaderComponent implements OnInit {

    currentUser!: UserInfoModel;
    countryIcon: string = '';
    userProfileImage: string = '';

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.pipe(select(selectDefaultUser)).subscribe(userState => {
            this.currentUser = userState;
            this.userProfileImage = userState.profileImage;
        });

        this.store.pipe(select(selectCountryIcon)).subscribe(countryIcon => {
            this.countryIcon = countryIcon;
        });
        
    }
}
