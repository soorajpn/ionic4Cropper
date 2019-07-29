import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroppComponent } from './cropp.component';

describe('CroppComponent', () => {
  let component: CroppComponent;
  let fixture: ComponentFixture<CroppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroppComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
