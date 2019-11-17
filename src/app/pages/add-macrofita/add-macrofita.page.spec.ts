import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMacrofitaPage } from './add-macrofita.page';

describe('AddMacrofitaPage', () => {
  let component: AddMacrofitaPage;
  let fixture: ComponentFixture<AddMacrofitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMacrofitaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMacrofitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
