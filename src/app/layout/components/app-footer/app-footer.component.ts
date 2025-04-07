import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-app-footer',
  standalone: true,
  imports: [DialogModule, CommonModule, TranslateModule, ButtonModule],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {
  displayTermsConditions = false;

  closeTermsConditions() {
    this.displayTermsConditions = false;
  }

  showTermsConditions() {
    this.displayTermsConditions = true;
  }
}
