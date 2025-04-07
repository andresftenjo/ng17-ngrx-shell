import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactUsService } from '../../../graphql/services/contactUs/contactUs.service';
import { ContactUsContractInput } from '../../../graphql/mutations/category-configuration.graphql';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../storage/app.state';
import { selectDefaultUser } from '../../../storage/state/state.selectors';
import { UserInfoModel } from '../../../common/model/config/userInfo.model';
import { environment } from '../../../../environments/environment';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrl: './app-contact.component.scss',
  providers: [ContactUsService, TranslateService],
  imports: [ReactiveFormsModule, CommonModule, MessagesModule, ToastModule, TranslateModule]
})
export class AppContactComponent implements OnInit {

  contactForm!: FormGroup;
  currentUser!: UserInfoModel;
  
  constructor(
    private fb: FormBuilder,
    private contactService: ContactUsService,
    private store: Store<AppState>,
    private messageService: MessageService,
    private translateService: TranslateService
  ) {
  }

  ngOnInit() {

    this.store.pipe(select(selectDefaultUser)).subscribe(userState => {
      this.currentUser = userState;
      this.initForm();
    });
  }

  initForm() {
    this.contactForm = this.fb.group({
      nameContact: [this.currentUser.firstName, Validators.required],
      lastNameContact: [this.currentUser.lastName],
      phoneContact: [this.currentUser.phone],
      commentsContact: ['', Validators.required],
      emailContact: [this.currentUser.email, [Validators.required, Validators.email]]
    });
  }

  submitContact() {

    if(this.contactForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Notificacion', detail: this.translateService.instant('contactUsPage.invalidFormat') });
      return;
    }

    const contactUsInput: ContactUsContractInput = {
      contactEmail: this.contactForm.value.emailContact,
      contactFirstname: this.contactForm.value.nameContact,
      contactLastname: this.contactForm.value.lastNameContact,
      contactMessage: this.contactForm.value.commentsContact,
      contactNumber: this.contactForm.value.phoneContact,
      storeId: environment.idApp,
    };
    this.contactService.postContactUs(contactUsInput).subscribe((data)=>{
        console.log('data', data);
        this.messageService.add({ severity: 'success', summary: 'Envio de Mensaje', detail: this.translateService.instant('contactUsPage.confirmationMessage') });
        this.contactForm.reset();
        this.initForm();
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Notificacion', detail: this.translateService.instant('contactUsPage.invalidRequest') });
      }
    );
  }
}
