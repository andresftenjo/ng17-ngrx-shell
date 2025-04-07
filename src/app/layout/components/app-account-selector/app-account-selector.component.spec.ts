import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppAccountSelectorComponent } from './app-account-selector.component';

describe('AppAccountSelectorComponent', () => {
  let component: AppAccountSelectorComponent;
  let fixture: ComponentFixture<AppAccountSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAccountSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAccountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
