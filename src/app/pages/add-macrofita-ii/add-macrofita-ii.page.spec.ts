import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMacrofitaIIPage } from './add-macrofita-ii.page';

describe('AddMacrofitaIIPage', () => {
  let component: AddMacrofitaIIPage;
  let fixture: ComponentFixture<AddMacrofitaIIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMacrofitaIIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMacrofitaIIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
