import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExternalLayoutsComponent } from './app-external-layouts.component';

describe('AppExternalLayoutsComponent', () => {
  let component: AppExternalLayoutsComponent;
  let fixture: ComponentFixture<AppExternalLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppExternalLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppExternalLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
