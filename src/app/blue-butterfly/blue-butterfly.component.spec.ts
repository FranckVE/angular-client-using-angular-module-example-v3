import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueButterflyComponent } from './blue-butterfly.component';

describe('BlueButterflyComponent', () => {
  let component: BlueButterflyComponent;
  let fixture: ComponentFixture<BlueButterflyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueButterflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
