import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersContentComponent } from './chapters-content.component';

describe('ChaptersContentComponent', () => {
  let component: ChaptersContentComponent;
  let fixture: ComponentFixture<ChaptersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
