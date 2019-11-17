import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMacrofitaIIIPage } from './add-macrofita-iii.page';

describe('AddMacrofitaIIIPage', () => {
  let component: AddMacrofitaIIIPage;
  let fixture: ComponentFixture<AddMacrofitaIIIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMacrofitaIIIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMacrofitaIIIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
