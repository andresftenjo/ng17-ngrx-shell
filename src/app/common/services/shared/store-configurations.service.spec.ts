/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreConfigurationsService } from './store-configurations.service';

describe('Service: StoreConfigurations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreConfigurationsService]
    });
  });

  it('should ...', inject([StoreConfigurationsService], (service: StoreConfigurationsService) => {
    expect(service).toBeTruthy();
  }));
});
