import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertAddFormComponent } from './advert-add-form.component';

describe('AdvertAddFormComponent', () => {
  let component: AdvertAddFormComponent;
  let fixture: ComponentFixture<AdvertAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
