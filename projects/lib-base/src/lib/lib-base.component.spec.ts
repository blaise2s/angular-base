import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBaseComponent } from './lib-base.component';

describe('LibBaseComponent', () => {
  let component: LibBaseComponent;
  let fixture: ComponentFixture<LibBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
