import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreationDateComponent} from './creation-date.component';

describe('CreationDateComponent', () => {
  let component: CreationDateComponent;
  let fixture: ComponentFixture<CreationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreationDateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });
});
