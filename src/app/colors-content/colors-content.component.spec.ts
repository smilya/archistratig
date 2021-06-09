import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsContentComponent } from './colors-content.component';

describe('ColorsContentComponent', () => {
  let component: ColorsContentComponent;
  let fixture: ComponentFixture<ColorsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
