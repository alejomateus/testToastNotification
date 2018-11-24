import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomnotificactionComponent } from './customnotificaction.component';

describe('CustomnotificactionComponent', () => {
  let component: CustomnotificactionComponent;
  let fixture: ComponentFixture<CustomnotificactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomnotificactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomnotificactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
