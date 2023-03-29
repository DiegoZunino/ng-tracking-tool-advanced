/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {ProjectService} from './project.service';

describe('Service: Project', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService]
    });
  });

  it('should ...', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
